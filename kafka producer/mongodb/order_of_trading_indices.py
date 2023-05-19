from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json
import datetime

uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"

# Create a new client and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))

dbName = cluster['daily_metadata']
collection = dbName["indices"]

data_date = "04012022"


def order_of_trading_indices():
    # for now, just the indices need to load from the file 'indices.json'
    with open(r'C:\Users\ASUS\PycharmProjects\pythonProject\mongodb\indices.json', encoding="utf8") as f:
        indices_data = json.load(f)

    # check if document exist in the collection
    timestamp = datetime.datetime(int(data_date[-4:]), int(data_date[2:4]), int(data_date[0:2]))
    document = collection.find_one({"_id": data_date})

    # if the date ("document") exist in collection
    if document is None:
        new_document = {"_id": data_date, "timestamp": timestamp, "LastRecordIndicator": "E"}
        new_document.update(indices_data[0])
        collection.insert_one(new_document)
        document = collection.find_one({"_id": data_date})

# def order_of_trading_indices(msg):
#     if 'RecordType' not in msg:
#         return
#     if msg['RecordType'] != "VK":
#         return
#
#     security_id = msg["SecurityID"]
#
#     # Check if the Security ID exists in the document
#     if security_id in document:
#         # write updating code
#         pass
#     else:
#         keys_to_select = ['RecordType', 'IndexCode', 'SecurityID', 'IndexName']
#         selected_dict = {key: msg[key] for key in keys_to_select if key in msg}
#         # Select the document you want to update
#         query = {"_id": document['_id']}
#         # Update the document with a new field using the $set operator
#         update = {"$set": {str(int(security_id)): selected_dict}}
#         collection.update_many(query, update)
