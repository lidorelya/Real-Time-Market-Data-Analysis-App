import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as Realm from "realm-web";

// import io from 'socket.io-client';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const socket = io('http://localhost:3003');

// User information
const userEmail = "elyalidor@gmail.com"
const userPassword = "LIDOR79"
// const getDataFromStartId = 38880

const dbName = "MarketData";
const collectionName = "date_04012022";

const app = new Realm.App({ id: "real-time-market-data-tloej" });
// Log in using an anonymous method
//const credentials = Realm.Credentials.anonymous();

// Log in using an email and password
const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);


// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

export default function DataFetch() {
  const [isLoadliveData,setIsLoadliveData] = useState(true)
  const [user, setUser] = useState();
  const [isLoadUser,setIsLoadUser] = useState(true)
  // const [isLoadInitialData,setIsLoadInitialData] = useState(false)
  const [lastSequenceNumber,setLastSequenceNumber] = useState(0)
  // const [getDataFromId, setGetDataFromId] = useState(getDataFromStartId);

  // const [dataEQ, setDataEQ] = useState('initializing')
  // const [dataInd, setDataInd] = useState('initializing')
  // const [dataDer, setDataDer] = useState('initializing')

  // const [EQList, setEQList] = useState([])
  // const [IndList, setIndList] = useState([])
  // const [DerList, setDerList] = useState([])

  // useEffect(() => {
  //     axios.get('http://localhost:5001/keys/Stocks')
  //       .then(response => setEQList(response.data))
  //       .catch(error => console.error(error));
  //     axios.get('http://localhost:5001/keys/Indices')
  //       .then(response => setIndList(response.data))
  //       .catch(error => console.error(error));
  //     axios.get('http://localhost:5001/keys/Derivatives')
  //       .then(response => setDerList(response.data))
  //       .catch(error => console.error(error));

  // }, []);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function userLogIn() {
  //     setUser(await app.logIn(credentials))
  //     setIsLoadUser(!isLoadUser)
  //     setIsLoadliveData(!isLoadliveData)
  //   }
  //   userLogIn()
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // const dataLoaded = await user.functions.getAllData();
  //       const dataLoaded = await user.functions.getAllData(dbName, collectionName);
  //       dispatch({ type: 'InitialData' , data: dataLoaded})
  //       setLastSequenceNumber(Number(dataLoaded['0']['Last Sequence Number']))
  //       // setIsLoadInitialData(true)
  //       console.log("===> Done load InitialData");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData()
  // },[isLoadUser]);

  // NOT IN USE!!!!!!!!!!!!!!!!!!!
  // useEffect(() => {
  //   async function fetchData() {
  //     if(EQList !== []){
  //       try {
  //         const topicName = 'Stocks'
  //         const groupId = `group-${uuidv4()}`;
  //         // let evenIndicesEQList = EQList.filter((element, index) => index % 2 === 0);
  //         socket.emit("send_message", [topicName, groupId, EQList]);
  //         socket.on(`receive_message_${topicName}_${groupId}`, (message) => {
  //           setDataEQ(JSON.parse(message))
  //           dispatch({ type: 'LiveData' , data: JSON.parse(message)})
  //         });
  //         await delay(5000) //  sleep 5 seconds
  //         setIsLoadliveData(!isLoadliveData)
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   }
  //   fetchData()
  // },[isLoadInitialData]);

  return (<></>)
};
