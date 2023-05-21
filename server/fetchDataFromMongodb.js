import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config();

const url = process.env.SERVER_URL;
const client = new MongoClient(url);

function formatDate(date) {
    const parsedDate = new Date(date);
    const year = parsedDate.getUTCFullYear();
    const month = String(parsedDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getUTCDate()).padStart(2, '0');
    const hours = String(parsedDate.getUTCHours()).padStart(2, '0');
    const minutes = String(parsedDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(parsedDate.getUTCSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000+00:00`;
  }

export const fetchKeysData = async (dbName_getData, collectionName) => {
    
    // Use connect method to connect to the server
    await client.connect();
    console.log(`Connected successfully to Mongodb server >>  fetching data from Database: '${dbName_getData}', Collection: '${collectionName}'`);
    const db = client.db(dbName_getData);
    const collection = db.collection(collectionName);

    // const findResult = await collection.find({"_id": Number(id)}).toArray();
    const findResult = await collection.find({}).toArray();

    // client.close()
    return findResult
}

export const fetchInitialData = async (dbName_getData, topicNameIn, collectionNameList) => {
    
    // Use connect method to connect to the server
    await client.connect();

    const topicName = topicNameIn === "Stocks" ? 'stocks' : ( topicNameIn === "Indices" ? 'indices' : 'derivatives');
    const fieldType = topicNameIn === "Stocks" ? 'stocks_fields' : ( topicNameIn === "Indices" ? 'indices_fields' : 'derivatives_fields');

    const daily_metadata = await client.db("daily_metadata").collection(topicName).find({}).toArray();

    const kafkaStreamConfig = await client.db("daily_metadata").collection("kafka_stream_config").find({}).toArray();
    const tableFields = await client.db("daily_metadata").collection("table_fields").find({}).toArray();

    // Construct the query for all field names
    const fieldNames = tableFields[0][fieldType]["fields"].map(fieldObj => fieldObj["field_name"]);
    const query = { $or: fieldNames.map(fieldName => ({ [fieldName]: { $exists: true } })) };

    // Construct the projection for all field names
    const projection = fieldNames.reduce((obj, fieldName) => ({ ...obj, [fieldName]: 1 }), { _id: 0 });

    // Construct the options
    const options = { sort: { timestamp: -1 }, limit: 1 };

    // Fetch the data for all collections in one go
    const results = await Promise.all(collectionNameList.map(collectionId =>
        client.db("HistoricalMarketData").collection(collectionId).find(query, options).project(projection).toArray()
    ));

    const dataArray = collectionNameList.map((collectionId, i) => {
        let data = daily_metadata[0][collectionId.toString()] || {};

        const result = results[i];
        if (result.length > 0) {
            for (const fieldObj of tableFields[0][fieldType]["fields"]) {
                if (result[0][fieldObj["field_name"]] !== undefined) {
                    data[fieldObj["field_name"]] = result[0][fieldObj["field_name"]];
                }
            }
        }

        try {            
            data['kafka_topic'] = kafkaStreamConfig[0][Number(collectionId)]["kafka_last_msg"]["topic"];
            data['kafka_partition'] = kafkaStreamConfig[0][Number(collectionId)]["kafka_last_msg"]["partition"];
            data['kafka_offset'] = kafkaStreamConfig[0][Number(collectionId)]["kafka_last_msg"]["offset"];
        } catch (error) {
            data['kafka_topic'] = '';
            data['kafka_partition'] = '';
            data['kafka_offset'] = '';
        }

        return data;
    });

    return dataArray;
}


export const fetchFieldsData = async (dbName_getData, collectionName, tableName) => {
    
    // Use connect method to connect to the server
    await client.connect();
    console.log(`Connected successfully to Mongodb server >>  fetching data from Database: '${dbName_getData}', Collection: '${collectionName}', Tablen name: '${tableName}'`);
    const db = client.db(dbName_getData);
    const collection = db.collection(collectionName);

    const findResult = await collection.find({}).toArray();

    // client.close()
    return findResult[0][tableName]["fields"]
}

export const fetchDailyMetadata = async (dbName_getData, collectionName) => {
    
    // Use connect method to connect to the server
    await client.connect();
    console.log(`Connected successfully to Mongodb server >>  fetching data from Database: '${dbName_getData}', Collection: '${collectionName}'`);
    const db = client.db(dbName_getData);
    const collection = db.collection(collectionName);

    const findResult = await collection.find({}).toArray();

    // client.close()
    return findResult[0]
}

export const fetchInitialGraphData = async (dbName, collectionId, fieldName, startDate, endDate, interval) => {
    
    // Use connect method to connect to the server
    await client.connect();

    // Construct the options
    const options = { sort: { timestamp: -1 },};  // limit: 120 }; 
    const query = {
        timestamp: {
          $gte: new Date(formatDate(startDate)),
          $lt: new Date(formatDate(endDate))
        },
        $expr: {
          $eq: [
            { $mod: [{ $toLong: '$$CURRENT.timestamp' }, interval] },
            0
          ]
        },
        [fieldName]: { $exists: true }
    };
    const projection = { _id: 0, [fieldName]: 1, "timestamp": 1 };  // Specify the field to include (1) and exclude (_id)
    const result = await client.db(dbName).collection(collectionId).find(query, options).project(projection).toArray();

    return result
}
