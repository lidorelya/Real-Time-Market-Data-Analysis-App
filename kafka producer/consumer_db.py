from kafka import KafkaConsumer
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
import json
import uuid
from mongodb.send_to_database import send_to_database

uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"
db_name = 'daily_metadata'
collection_name = 'kafka_stream_config'
server_set = {"uri": uri, "db_name": db_name, "collection_name": collection_name}
data_date = "04012022"
topic_name = 'Stocks'
bootstrap_servers = ['192.168.31.240:9092']

# 'Stocks'
# 'Indices'
# 'Derivatives'
# ['localhost:9092']


# from consumer_db import create_consumer_db
# create_consumer_db(topic_name, bootstrap_servers, server_set, data_date)
def create_consumer_db(topic_name, bootstrap_servers, server_set, data_date):

    # Create a new client and connect to the server
    cluster = MongoClient(server_set["uri"], server_api=ServerApi('1'))
    db = cluster[server_set["db_name"]]
    collection = db[server_set["collection_name"]]

    # check if document exist in the collection
    timestamp = datetime.datetime(int(data_date[-4:]), int(data_date[2:4]), int(data_date[0:2]))
    document = collection.find_one({"_id": data_date})

    # if the date ("document") exist in collection
    if document is None:
        collection.insert_one({"_id": data_date, "timestamp": timestamp})
        document = collection.find_one({"_id": data_date})

    # Assign partitions and seek to the desired offset
    consumer = KafkaConsumer(
        topic_name,
        bootstrap_servers=bootstrap_servers,
        enable_auto_commit=True,
        group_id=str(uuid.uuid4()),
        auto_offset_reset='latest',
    )

    # consume messages with the specified partition key and offset
    for message in consumer:
        msg_data = message.value.decode('utf-8')

        msg_topic = message.topic
        msg_partition = message.partition
        msg_offset = message.offset
        msg_timestamp = message.timestamp

        # print(f"data: {msg_data} ")
        # print("  ")
        # print(f" ---- msg_topic: {msg_topic} ---- msg_partition: {msg_partition} ---- msg_offset: {msg_offset} ---")
        # print("  ")

        msg = json.loads(msg_data)['RecordDetails']
        security_id = msg["SecurityID"]
        security_id_strint = str(int(security_id))

        try:
            send_to_database_flag = False
            # Check if the Security ID exists in the document
            if security_id_strint in document:
                # check if the new message is not in db -
                # if offset is less or equal to the offset that in the db, so it already updated in db
                # assumming security_id = message.partition
                if document[security_id_strint]["kafka_last_msg"]["offset"] > msg_offset:
                    document[security_id_strint]["kafka_last_msg"]["offset"] = msg_offset
                    # save the updated document to the collection
                    query = {"_id": document['_id']}
                    collection.replace_one(query, document)
                    print("replace_one:  update offset ", str(msg_offset), " to ", security_id_strint)
                    send_to_database_flag = True
            else:
                data_to_update = {"SecurityID": security_id,
                                  'kafka_last_msg': {"topic": msg_topic, "partition": msg_partition,
                                                     "offset": msg_offset}}
                # Select the document you want to update
                query = {"_id": document['_id']}
                # Update the document with a new field using the $set operator
                update = {"$set": {security_id_strint: data_to_update}}
                collection.update_many(query, update)
                print("insert:  insert security_id", security_id_strint)
                send_to_database_flag = True

            if send_to_database_flag:
                kafka_msg_metadata = (msg_topic, msg_partition, msg_offset, msg_timestamp)
                send_to_database(msg, kafka_msg_metadata)

        except:
            print("ERROR (probably in the connection to mongodb)")
            print("")
