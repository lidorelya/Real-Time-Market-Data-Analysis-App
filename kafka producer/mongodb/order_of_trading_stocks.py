from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime


uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"

# Create a new client and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))

dbName = cluster['daily_metadata']
collection = dbName["stocks"]

data_date = "04012022"

# check if document exist in the collection
timestamp = datetime.datetime(int(data_date[-4:]), int(data_date[2:4]), int(data_date[0:2]))
document = collection.find_one({"_id": data_date})

# if the date ("document") exist in collection
if document is None:
    collection.insert_one({"_id": data_date, "timestamp": timestamp, "LastRecordIndicator": ""})
    document = collection.find_one({"_id": data_date})

def order_of_trading_stocks(msg):
    if 'RecordType' not in msg:
        return
    if msg['RecordType'] != "VA":
        return

    security_id = msg["SecurityID"]

    # Check if the Security ID exists in the document
    if security_id in document:
        # write updating code
        # Update the document with a new value in an array field using the $push operator
        pass
    else:
        # Select the document you want to update
        query = {"_id": document['_id']}
        # Update the document with a new field using the $set operator
        update = {"$set": {str(int(security_id)): msg}}
        collection.update_many(query, update)

        if msg["LastRecordIndicator"] == "E":
            update = {"$set": {"LastRecordIndicator": "E"}}
            collection.update_one(query, update)

