A web application for real-time financial market data analysis. The project simulates the stream of data in large masses and at low time frequencies (less than a second) from different data providers (such as the stock exchange).

Development technologies:
* Client side - React.js
* Server side - Node.js and Python
* Data stream - Apache Kafka
* Database - MongoDB

For the purpose of the demonstration, I used a Windows machine as a server and a data server and with a Mac (Linux) machine to run the application.

Below is the diagram of the data flow from the provider to the database and to the client (application), using Kafka and implemented in Python:

![Alt Text](https://github.com/lidorelya/RealTimeMarketDataAnalysisApp/blob/15b9cda274a6471c35052353472cd2e604ff1492/data_flow_diagram.png)


Demonstration of the App:
1. [video_url](https://drive.google.com/file/d/1IgOa5sSLaB1T-hjVqTZYY4goSSdwQoEO/view?usp=sharing)
2. [video_url](https://drive.google.com/file/d/1IfwrC9x6MR5WFDEw1VCno4WFEpW6fOGW/view?usp=sharing)

![Alt Text](https://github.com/lidorelya/RealTimeMarketDataAnalysisApp/blob/d9efbd56c01e000e1b54542c71d31fe2cb0d5e95/screenshot.png)
