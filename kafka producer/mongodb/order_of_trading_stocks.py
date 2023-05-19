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


# delete collection
# x = collection.delete_many({})

def order_of_trading_stocks(msg):
    # msg = {'RecordType': 'VA', 'LastRecordIndicator': '', 'Numerator': '1472', 'MarketID': 'מניות', 'SecurityID': '01235761', 'SymbolEnglish': 'TEST61', 'SymbolHebrew': 'נסוי16', 'NameEnglish': 'TEST 61', 'NameHebrew': 'נסוי 16', 'Sector': '094', 'SectorName': 'מסחר ושירותים', 'SubSector': '001', 'SubSectorName': 'מסחר', 'SecurityType': '01', 'SecuritySubType': '01', 'SecurityTypeName': 'מניה רגילה', 'TA125Index': '0', 'TA35Index': '0', 'CurrencyCode': '', 'CompanyID': '001120', 'ISINCode': 'IL001235761'}
    # msg = {'RecordType': 'VA', 'LastRecordIndicator': 'E', 'Numerator': '1801', 'MarketID': 'מניות', 'SecurityID': '01281534', 'SymbolEnglish': 'MAAVAR34', 'SymbolHebrew': 'מעבר43', 'NameEnglish': 'MAAVAR 34', 'NameHebrew': 'מעבר 43', 'Sector': '097', 'SectorName': 'השקעה ואחזקות', 'SubSector': '001', 'SubSectorName': 'השקעה ואחזקות', 'SecurityType': '01', 'SecuritySubType': '01', 'SecurityTypeName': 'מניה רגילה', 'TA125Index': '0', 'TA35Index': '0', 'CurrencyCode': '', 'CompanyID': '001290', 'ISINCode': 'IL001281534'}

    if 'RecordType' not in msg:
        return
    if msg['RecordType'] != "VA":
        return

    security_id = msg["SecurityID"]

    # Check if the Security ID exists in the document
    if security_id in document:
        # write updating code
        # Update the document with a new value in an array field using the $push operator
        # query = {"_id": document['_id']}
        # update = {"$push": {"existingArrayField": "newValue"}}
        # collection.update_one(query, update)
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

