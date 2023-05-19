import { Kafka, logLevel } from 'kafkajs'
import express from "express"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"
import dotenv from 'dotenv'
import axios from 'axios';
import { fetchKeysData, fetchInitialData, fetchFieldsData, fetchInitialGraphData } from './fetchDataFromMongodb.js'

dotenv.config();

const port = process.env.PORT_SERVER
const portKeys = process.env.PORT_KEYS
// to allow CORS for all subaddresses of 'corsOrigin' (by adding *)
// const corsOrigin = ["http://localhost:3000", "http://localhost:3000/*"];
const corsOrigin = process.env.CORS_ORIGIN.split(',');
const bootstrapServers = [process.env.BOOT_STRAP_SERVERS];
const clientId = process.env.CLIENT_ID
const keysDBname = process.env.KEYS_DB_NAME
const initialDataDBname = process.env.INITIAL_DATA_DB_NAME

const app = express();
app.use(cors());

// keys list to fetch data in the app function
const appKeys = express();
const router = express.Router();
appKeys.use(cors());

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: corsOrigin,
    methods: ["GET", "POST"],
  }
});

async function getKeysFromServer(dbName, collectionName) {
  let securityIDarray = [];
  const results = await fetchKeysData(dbName, collectionName);
  
  let keys = Object.keys(results[0])
  for(var key in keys) {
    if(typeof results[0][keys[key]] === "object"){
      if("SecurityID" in results[0][keys[key]]){
        securityIDarray.push(results[0][keys[key]]["SecurityID"])
      }
    }   
  }
  return securityIDarray
}

async function getInitialDataFromServer(client, topicName, groupId, dbName, collectionName) {
  const results = await fetchInitialData(dbName, topicName, collectionName);
  await client.emit(`receive_message_${groupId}`, results);
  
}

async function getInitialGraphDataFromServer(client, groupId, dbName, collectionId, fieldName, startDate, endDate, interval) {
  const results = await fetchInitialGraphData(dbName, collectionId, fieldName, startDate, endDate, interval);
  await client.emit(`receive_message_graph_data${groupId}`, results);
  
}

async function getFieldsFromServer(dbName, collectionName, tableName) {
  let results = await fetchFieldsData(dbName, collectionName, tableName);

  return results
}

// http://localhost:5001/keys/stocks
appKeys.use('/keys', router.get('/stocks', async (req, res) => res.send(await getKeysFromServer(keysDBname, "stocks"))));
appKeys.use('/keys', router.get('/indices', async (req, res) => res.send(await getKeysFromServer(keysDBname, "indices"))));
appKeys.use('/keys', router.get('/derivatives', async (req, res) => res.send(await getKeysFromServer(keysDBname, "derivatives"))));

// http://localhost:5001/keys/stocks/fields
appKeys.use('/keys', router.get('/stocks/fields', async (req, res) => res.send(await getFieldsFromServer(keysDBname, "table_fields", "stocks_fields"))));
appKeys.use('/keys', router.get('/indices/fields', async (req, res) => res.send(await getFieldsFromServer(keysDBname, "table_fields", "indices_fields"))));
appKeys.use('/keys', router.get('/derivatives/fields', async (req, res) => res.send(await getFieldsFromServer(keysDBname, "table_fields", "derivatives_fields"))));

appKeys.listen(portKeys, () => console.log(`SERVER Keys list running on port: ${portKeys}`))




async function getKeys(collection){
  let keys = [];
  await axios.get(`http://localhost:${portKeys}/keys/${collection}`)
  .then( async function (response) {keys = await response.data})
  .catch(error => console.error(error));

  return keys
}

async function run(client, topicName, groupId, partitionKeys) {
  const kafka = new Kafka({
    clientId: clientId,
    brokers: bootstrapServers,
    logLevel: logLevel.NOTHING, // set the log level to not log anything
    connectionTimeout: 300000 // 300 seconds
  });

  const consumer = kafka.consumer({ groupId: groupId, fromBeginning: true });
  // const consumer = kafka.consumer({ groupId: groupId, fromBeginning: false, autoOffsetReset:'earliest' });
  const admin = kafka.admin();
  await admin.connect();
  await consumer.connect();
  
  const partitionDict = {};
  let keys = []
  // specify the partition key to get offsets for
  // const partitionKeys = ["01130699", "84065143"];
  if(topicName==="Stocks"){
    keys = await getKeys("stocks")
    // console.log("        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.  ", new Error().stack.split("\n")[1])
  }
  if(topicName==="Indices"){
    keys = await getKeys("indices")
  }
  if(topicName==="Derivatives"){
    keys = await getKeys("derivatives")
  }

  // const keys = ["515315","288500","1150","51826220","4899","26180","18558","04877","15467710","022580193"];
  const partitions = keys.length;
  for (let i = 0; i < partitions; i++) {
    partitionDict[keys[i]] = i;
  }

  const topicPartitions = partitionKeys.map(partitionKey => {
    const partition = partitionDict[partitionKey];
    return { topic: topicName, partition };
  });

  const topicOffsets = await admin.fetchTopicOffsets(topicName); // this line return the loging messages (get from the "logLevel")

  const endOffsets = {};
  for (const [partition, offsetInfo] of Object.entries(topicOffsets)) {
    const offset = offsetInfo.offset;
    endOffsets[partition] = offset;
  }

  const partitionKeyEndOffsets = {};
  for (const [tp, endOffset] of Object.entries(endOffsets)) {
    const key = Object.keys(partitionDict).find(key => partitionDict[key] === tp);
    partitionKeyEndOffsets[key] = endOffset;
  }

  await consumer.subscribe({ topic: topicName, fromBeginning: true, partitions: topicPartitions });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        // const key = message.key.toString('utf-8');
        const key = Object.keys(partitionDict).find(key => partitionDict[key] === partition);
        if (!partitionKeys.includes(key)) {
          return;
        }
        if (message.offset < partitionKeyEndOffsets[partitionDict[key]]) {
          return;
        }
        // const messageData = message.value.toString();
        const messageData = message.value.toString('utf-8');
        client.emit(`receive_message_${topicName}_${groupId}`, messageData);
        // console.log(`data: ${message.offset}`);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    },
  });
}

io.on('connection', client => {
  client.on("send_message",(data) => {
        // run(client, data[0], data[1], data[2]).catch(console.error);
        // run(client, topicName, groupId, partitionKeys)
        run(client, data[0], data[1], data[2]).catch(console.error);

  });

  client.on("getInitialData",(data) => {
    // getInitialDataFromServer(client, topicName, groupId, dbName, collectionName)
    getInitialDataFromServer(client, data[0], data[1], initialDataDBname, data[2])

  });

  client.on("getInitialGraphData",(data) => {
    // getInitialGraphDataFromServer(client, groupId, dbName, collectionId, fieldName, startDate, endDate, interval) 
    getInitialGraphDataFromServer(client, data[0], initialDataDBname, data[1], data[2], data[3], data[4], data[5])

  });

  client.on('disconnect', () => { 
    console.log('Client disconnected');
   });
});

server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
