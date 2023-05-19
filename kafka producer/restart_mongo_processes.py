import subprocess

process_name = "mongodb-community"


def restart_mongo_processes():
    # Stop mongod process
    subprocess.run(["brew", "services", "stop", process_name])

    # Wait for a few seconds
    subprocess.run(["sleep", "8"])

    # Start mongod process
    subprocess.run(["brew", "services", "start", process_name])