from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def get_keys_by_document(server_set, id_sate):
    # collection_name = "stocks"
    # id_sate = "04012022"
    # get_keys_by_document("stocks", "04012022")

    # Create a new client and connect to the server
    cluster = MongoClient(server_set["uri"], server_api=ServerApi('1'))
    db = cluster[server_set["db_name"]]
    collection = db[server_set["collection_name"]]

    document = collection.find_one({"_id": id_sate})

    # Get the list of fields for the document
    fields = list(document.keys())
    ids = [x for x in fields if x not in ['_id', 'timestamp', 'LastRecordIndicator']]

    keys = []
    for id in ids:
        keys.append(document[id]['SecurityID'])

    return keys
