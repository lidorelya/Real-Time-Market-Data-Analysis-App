from create_producer import create_producer
from kafka_admin_funcs import create_new_topic, delete_topic
from mongodb.get_keys_by_document import get_keys_by_document

from translate_message import translate_message
from mongodb.order_of_trading_stocks import order_of_trading_stocks
from mongodb.order_of_trading_indices import order_of_trading_indices
from mongodb.order_of_trading_derivatives import order_of_trading_derivatives


uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"  # local new
db_name = 'daily_metadata'
data_date = "04012022"

"""
from kafka_admin_funcs import run_kafka_service
kafka_path = 'C:\\Users\\ASUS\\kafka_2.13-3.4.0'
run_kafka_service(kafka_path)
"""

flag_first_running = False
if flag_first_running:
    # load data from text file
    file_name = 'log_file_04-01-2022.txt'
    path_name = 'C:\\Users\\ASUS\\PycharmProjects\\pythonProject\\data\\'
    # removing the new line characters
    with open(path_name + file_name) as f:
        data_lines = [line.rstrip() for line in f]

    order_of_trading_indices()
    for msg in data_lines:
        data_message = translate_message(msg)
        if 'RecordType' not in data_message:
            continue
        if data_message['RecordType'] == "VA":
            order_of_trading_stocks(data_message)
        if data_message['RecordType'] == "FA":
            order_of_trading_derivatives(data_message)


# bootstrap_servers = ['localhost:9092']
bootstrap_servers = ['192.168.31.240:9092']

topic_name = 'Stocks'
# delete_topic(bootstrap_servers, topic_name)
server_set_stocks = {"uri": uri, "db_name": db_name, "collection_name": "stocks"}
keys = get_keys_by_document(server_set_stocks,data_date)
# create_new_topic(bootstrap_servers, topic_name, 1, len(keys))
create_producer(topic_name, bootstrap_servers[0], keys)

topic_name = 'Indices'
# delete_topic(bootstrap_servers, topic_name)
server_set_indices = {"uri": uri, "db_name": db_name, "collection_name": "indices"}
keys = get_keys_by_document(server_set_indices, data_date)
# create_new_topic(bootstrap_servers, topic_name, 1, len(keys))
create_producer(topic_name, bootstrap_servers[0], keys)

topic_name = 'Derivatives'
# delete_topic(bootstrap_servers, topic_name)
server_set_derivatives = {"uri": uri, "db_name": db_name, "collection_name": "derivatives"}
keys = get_keys_by_document(server_set_derivatives, data_date)
# create_new_topic(bootstrap_servers, topic_name, 1, len(keys))
create_producer(topic_name, bootstrap_servers[0], keys)




##############################################################################################

from create_producer import create_producer
from mongodb.get_keys_by_document import get_keys_by_document

uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"  # local new
db_name = 'daily_metadata'
data_date = "04012022"
bootstrap_servers = ['192.168.31.240:9092']

topic_name = 'Indices'
server_set_indices = {"uri": uri, "db_name": db_name, "collection_name": "indices"}
keys = get_keys_by_document(server_set_indices, data_date)
# create_new_topic(bootstrap_servers, topic_name, 1, len(keys))
create_producer(topic_name, bootstrap_servers[0], keys)

##############################################################################################

from create_producer import create_producer
from mongodb.get_keys_by_document import get_keys_by_document

uri = "mongodb://127.0.0.1:27017/?directConnection=true&appName=mongosh+1.8.2"  # local new
db_name = 'daily_metadata'
data_date = "04012022"
bootstrap_servers = ['192.168.31.240:9092']


topic_name = 'Derivatives'
server_set_derivatives = {"uri": uri, "db_name": db_name, "collection_name": "derivatives"}
keys = get_keys_by_document(server_set_derivatives, data_date)
# create_new_topic(bootstrap_servers, topic_name, 1, len(keys))
create_producer(topic_name, bootstrap_servers[0], keys)