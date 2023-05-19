
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function NewlineText(props) {
  const text = props.text;
  return <div className="div-footer">{text}</div>;
}
function Text(props) {
  const changeColor = ( (parseFloat(props.text.change) >= 0) ? "green" : "red");
  return (
    <div className="div-footer">
      <h8 class="m-0">{props.text.assetName}{props.text.price} | <span style={{color: changeColor}}>{props.text.change}</span> <i class={props.text.changeDirection}></i></h8>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

function initialUpdateData(assetIdUserInput,initialData,translationField){
  var textArray = []
  if ( (initialData !== undefined) && (initialData.length > 0)  ){
    for ( var i=0 ; i<assetIdUserInput.length ; i++ ){
      var tempData = initialData.filter( (obj) => obj._id === assetIdUserInput[i].SecurityID)[0]
      var num = Object.keys(tempData)[0] === '_id' ? 1 : 0

      let assetName = tempData[Object.keys(tempData)[num]][translationField.assetName[assetIdUserInput[i].SecurityType]]
      let price = tempData[Object.keys(tempData)[num]][translationField.price[assetIdUserInput[i].SecurityType]]

      // close price from last trading day
      let lastPrice = '345'

      let change = (parseFloat(price) / parseFloat(lastPrice) - 1).toFixed(2)
      let changeDirection = ( (parseFloat(change) >= 0) ? "arrow-up" : "arrow-down");
      var tempObj = { assetName: assetName, price: price,  change: change+"%",  changeDirection: changeDirection, lastPrice: lastPrice }
      textArray.push(tempObj)
    }
  }
  return textArray
}
function liveUpdateData(assetIdUserInput,LiveData,previoustextArray,translationField){
  var textArray = []
  if ( (LiveData !== undefined) && (LiveData.length > 0) ){
    for ( var i=0 ; i<assetIdUserInput.length ; i++ ){
      var tempData = LiveData.filter( (obj) => Number(obj.data.SecurityID) === assetIdUserInput[i].SecurityID)
      tempData = tempData[tempData.length-1]
      if (tempData !== undefined){
        try {
          //var tempData = LiveData.filter( (obj) => obj._id === assetIdUserInput[i].SecurityID)[0]
          //var num = Object.keys(tempData)[0] === '_id' ? 1 : 0
    
          let assetName = previoustextArray[i].assetName 
          let price = ( tempData[Object.keys(tempData)[0]][translationField.price[assetIdUserInput[i].SecurityType]] ?? previoustextArray[i].price  ) // if undefined or null get prev price
          //let previousPrice = previoustextArray[i].price // string
          let previousPrice = previoustextArray[i].lastPrice // string
          let change = ( (price===previousPrice) ? (previoustextArray[i].change.slice(0, -1) ) : (parseFloat(price) / parseFloat(previousPrice) - 1).toFixed(2) )
          let changeDirection = ( (parseFloat(change) >= 0) ? "arrow-up" : "arrow-down");
          var tempObj = { assetName: assetName, price: price,  change: change+"%",  changeDirection: changeDirection, lastPrice: previousPrice }
          textArray.push(tempObj)
          
        } catch (error) {
          textArray.push(previoustextArray[i])
        }
      }
      else{
        textArray.push(previoustextArray[i])
      }
    }
  }
  return textArray
}

export function Footer() {
  const [initiaMount, setInitiaMount] = useState(true)
  const [textArray, setTextArray] = useState([])

  const initialData = useSelector((state) => state['InitialData'])
  const LiveData = useSelector((state) => state['LiveData'])

  // security id's to display on screen - should be user input

  const assetIdUserInput = [
    { SecurityID: 1140102, SecurityType: "Other"},
    { SecurityID: 2, SecurityType: "Index"},
    { SecurityID: 3, SecurityType: "Index"},
    { SecurityID: 4, SecurityType: "Index"},
    { SecurityID: 5, SecurityType: "Index"},
    { SecurityID: 7, SecurityType: "Index"},
    { SecurityID: 8, SecurityType: "Index"},
    { SecurityID: 9, SecurityType: "Index"},
  ]

  const translationField = {
    assetName: {
      Index: "IndexName",
      Other: "NameHebrew"
    },
    price: {
      Index: "IndexValue",
      Other: "Price"
    },
  }

  if(initiaMount){
    if (initialData !== undefined){
      setTextArray(initialUpdateData(assetIdUserInput,initialData,translationField))
      setInitiaMount(false)
    }
  }

  useEffect(() => {
    setTextArray(liveUpdateData(assetIdUserInput,LiveData,textArray,translationField))
  }, [LiveData]);


  return (
    <div>
      <footer class="py-1 bg-dark fixed-bottom">
        <div className="div-footer">
              {
                textArray.map((res)=>{
                  return <Text text={{ assetName: <NewlineText text={`${res.assetName}\n`} />, price: res.price, change: res.change, changeDirection: res.changeDirection }} />
                })
              }
        </div>
      </footer>
    </div>
  );
}

