from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from time import sleep
import datetime

"""
brew services list
brew services stop mongodb-community
brew services list
brew services start mongodb-community
"""

uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"

# Create a new client and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))

# cluster = MongoClient(uri)
dbName = cluster['HistoricalMarketData']


def send_to_database(msg, kafka_msg_metadata):
    security_id = msg['SecurityID']

    msg_topic = kafka_msg_metadata[0]
    msg_partition = kafka_msg_metadata[1]
    msg_offset = kafka_msg_metadata[2]
    msg_timestamp = kafka_msg_metadata[3]

    # convert the timestamp to a datetime object in the local timezone
    # divide by 1000 to convert milliseconds to seconds
    dt_object = datetime.datetime.fromtimestamp(msg_timestamp/1000)

    # Check if the collection exists
    if security_id not in dbName.list_collection_names():
        # create timeseries collection with the name of "security_id" in db of "dbName"
        dbName.create_collection(
            security_id,
            timeseries={
                "timeField": "timestamp",
                "metaField": "metadata",
                "granularity": "seconds"
            }
        )

    collection = dbName[security_id]

    collection.insert_many([
        {
            "metadata": {'security_id': security_id, 'topic_name': msg_topic},
            "timestamp": dt_object,
            "kafkaRecordMetadata": {'topic': msg_topic,
                                    'partition': msg_partition,
                                    'offset': msg_offset},
            **msg
        }
    ])

    sleep(0.1)
