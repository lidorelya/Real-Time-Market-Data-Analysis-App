from kafka import KafkaProducer
from time import sleep
import json
from translate_message import translate_message
from datetime import datetime
# from mongodb.send_to_database import send_to_database

# load data from text file
file_name = 'log_file_04-01-2022.txt'
path_name = 'C:\\Users\\ASUS\\PycharmProjects\\pythonProject\\data\\'
# removing the new line characters
with open(path_name + file_name) as f:
    data_lines = [line.rstrip() for line in f]


def create_producer(topic_name, bootstrap_servers, keys):
    producer = KafkaProducer(bootstrap_servers=bootstrap_servers,
                             value_serializer=lambda x: json.dumps(x).encode('utf-8'))

    partition_dict = {}
    partitions = len(keys)
    for i in range(partitions):
        partition_dict[keys[i]] = i

    try:
        i = 0
        while True:
            for Line in data_lines:
                # Line = data_lines[11029]
                try:
                    sequence_number = Line[:Line.find(':')]
                    data_message = translate_message(Line)
                    if "RecordType" in data_message:
                        if data_message['RecordType'] in ["VA", "FA"]:
                            continue
                        else:
                            # what happen if there is updating of the list: write updating code of "order_of_trading" !!!!
                            pass
                    if "SecurityID" in data_message:
                        key = data_message['SecurityID']
                        if key in keys:
                            partition_num = [val for k, val in partition_dict.items() if k == key][0]
                            i = i + 1
                            data = {'partition_key': key,
                                    'value': {"Sequence Number": sequence_number,
                                              "RecordDetails": data_message
                                              }
                                    }
                            partition = partition_num
                            key_bytes = data['partition_key'].encode('utf-8')
                            # producer.send(topic_name, key=key_bytes, value=data['value'], partition=partition)
                            future = producer.send(topic_name, key=key_bytes, value=data['value'], partition=partition)
                            # Block until the message is sent and get the metadata of `future`
                            metadata = future.get()
                            # send_to_database(data_message, metadata)
                            print("")
                            print("data >>>  ", data)
                            print("metadata >>>  ", metadata)
                            sleep(0.05)
                except Exception as e:
                    try:
                        data_message = translate_message(Line)
                    except:
                        data_message = Line

                    now = datetime.now()
                    with open(r'C:\Users\ASUS\PycharmProjects\pythonProject\error_log.txt', "a", encoding="utf8") as fw:
                        # Write the error message to the file
                        fw.write(str(now) + ":  " + str(e) + '\n')
                    with open(r'C:\Users\ASUS\PycharmProjects\pythonProject\error_data_log.txt', "a", encoding="utf8") as fw1:
                        # Records the data that caused an error to the file
                        fw1.write(str(now) + ":  " + str(data_message) + '\n')

    except KeyboardInterrupt:
        # Close the producer
        print(f"  << Producer of topic '{topic_name}' stopped running >>  ")
        producer.close()
