A web application for real-time financial market data analysis. The project simulates the stream of data in large masses and at low time frequencies (less than a second) from different data providers (such as the stock exchange).

Development technologies:
* Client side - React.js
* Server side - Node.js and Python
* Data stream - Kafka
* Database - MongoDB

For the purpose of the demonstration, I used a Windows machine as a server and a data server and with a Mac (Linux) machine to run the application.

Below is the diagram of the data flow from the provider to the database and to the client (application), using Kafka and implemented in Python:
