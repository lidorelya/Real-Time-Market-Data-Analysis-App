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
    # msg = {'RecordType': 'VA', 'LastRecordIndicator': 'E', 'Numerator': '1801', 'MarketID': 'מניות', 'SecurityID': '09981534', 'SymbolEnglish': 'MAAVAR34', 'SymbolHebrew': 'מעבר43', 'NameEnglish': 'MAAVAR 34', 'NameHebrew': 'מעבר 43', 'Sector': '097', 'SectorName': 'השקעה ואחזקות', 'SubSector': '001', 'SubSectorName': 'השקעה ואחזקות', 'SecurityType': '01', 'SecuritySubType': '01', 'SecurityTypeName': 'מניה רגילה', 'TA125Index': '0', 'TA35Index': '0', 'CurrencyCode': '', 'CompanyID': '001290', 'ISINCode': 'IL001281534'}

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
            # "metadata": {'security_id': security_id, "security_name": security_name, "security_type": "FX"},
            "metadata": {'security_id': security_id, 'topic_name': msg_topic},
            # "timestamp": ISODate("2021-05-18T00:00:00.000Z"),
            # "timestamp": datetime.datetime.strptime(f'{doc["Date"].replace(".","/")} 00:00', '%d/%m/%Y %H:%M'),
            # "timestamp": datetime.datetime.strptime(f'04/01/2022 00:00:01', '%d/%m/%Y %H:%M:%S'),
            # "timestamp": datetime.datetime.utcnow(),
            "timestamp": dt_object,
            "kafkaRecordMetadata": {'topic': msg_topic,
                                    'partition': msg_partition,
                                    'offset': msg_offset},
            **msg
        }
    ])

    sleep(0.1)