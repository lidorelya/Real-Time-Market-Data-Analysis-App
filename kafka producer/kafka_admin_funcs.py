import subprocess
from kafka.admin import KafkaAdminClient, NewTopic


# Run the following command to list all processes that are listening on port 9092:
# netstat -ano | findstr :9092
# Look for the line that lists the process that is listening on port 9092, and note the PID listed in the second column.

# Once you have the PID, you can use it to terminate the process if needed using the kill command:
# kill <PID>
# kill 1684

def run_kafka_service(kafka_path):
    # specify the path to the Kafka

    # start Zookeeper
    zk_process = subprocess.Popen([f'{kafka_path}/bin/windows/zookeeper-server-start.bat',
                                   f'{kafka_path}/config/zookeeper.properties'])

    # start Kafka server
    kafka_process = subprocess.Popen([f'{kafka_path}/bin/windows/kafka-server-start.bat',
                                      f'{kafka_path}/config/server.properties'])

    # wait for the processes to finish
    zk_process.wait()
    kafka_process.wait()


def create_new_topic(bootstrap_servers, topic_name, replication_factor, partitions, config=[]):
    # create a Kafka admin client object
    admin_client = KafkaAdminClient(bootstrap_servers=bootstrap_servers,
                                    request_timeout_ms=240000 # Increase the timeout value to 240 seconds (default 30)
                                    )

    # create a new topic with the specified configuration
    new_topic = NewTopic(name=topic_name,
                         num_partitions=partitions,
                         replication_factor=replication_factor,
                         )

    # create the new topic
    admin_client.create_topics(new_topics=[new_topic], validate_only=False)


def delete_topic(bootstrap_servers, topic_name):
    # create a Kafka admin client object
    admin_client = KafkaAdminClient(bootstrap_servers=bootstrap_servers)

    # delete the topic
    admin_client.delete_topics(topics=[topic_name])