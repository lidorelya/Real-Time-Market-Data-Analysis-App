import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import React from 'react';

export const DataContext = React.createContext();

//const reducerFn = (state = { InitialData: {}, LiveData: [], Equity: {}, Index: {}, Derivative: {}, AssetsList: {}, elementClicked: false } , action) => {
const reducerFn = (state = { InitialData: {}, LiveData: [], Equity: {}, Index: {}, Derivative: {}, AssetsList: {}, elementClicked: false , elementClickedNew: ''} , action) => {

    if (action.type === 'InitialData'){
        //return { InitialData: action.data }
        return { ...state, InitialData: action.data }
    }

    if (action.type === 'LiveData'){
        //return { ...state, LiveData: [ ...state.LiveData, {data: action.data, SequenceNumber: action.SequenceNumber} ] }
        //return { ...state, LiveData: action.data }
        return { ...state, LiveData: state.LiveData.concat(action.data) }
    }

    if (action.type === 'Equity'){
        return { ...state, Equity: action.data }
    }

    if (action.type === 'Index'){
        return { ...state, Index: action.data }
    }

    if (action.type === 'Derivative'){
        return { ...state, Derivative: action.data }
    }

    if (action.type === 'AssetsList'){
        return { ...state, AssetsList: action.data }
    }

    if (action.type === 'elementClicked'){
        return { ...state, elementClicked: action.data }
    }

/*     if (action.type === 'addElement'){
        let newElementName = action.data
        return { ...state, elementClicked: {...state.elementClicked, [newElementName]: true} }
    }

    if (action.type === 'elementClicked'){
        // return { ...state, elementClicked: action.data }
        let elementName = action.data[0]
        let elementValue = action.data[1]
        return { ...state, elementClicked: {...state.elementClicked, [elementName]: elementValue} }
    }

    if (action.type === 'elementClickedNew'){
        // return { ...state, elementClicked: action.data }
        let elementName = action.data
        //let elementValue = action.data[1]
        if (elementName in state.elementClicked){
            return { ...state, elementClicked: {...state.elementClicked, [elementName]: ![state.elementClicked.elementName]} }
        }else{
            return { ...state, elementClicked: {...state.elementClicked, [elementName]: true} }
        }
    } */

/*     if (action.type === 'elementClickedNew'){
        let elementName = action.data
        if (elementName in state.elementClickedNew){
            return { ...state, elementClickedNew: {...state.elementClickedNew, [elementName]: ![state.elementClickedNew.elementName]} }
        }else{
            return { ...state, elementClickedNew: {...state.elementClickedNew, [elementName]: true} }
        }
    } */

    if (action.type === 'elementClickedNew'){
        return { ...state, elementClickedNew: action.data }
    }

    return state
};

//const store = createStore(reducerFn, composeWithDevTools(applyMiddleware(logger)));
const store = createStore(reducerFn, composeWithDevTools(applyMiddleware()));

export default store;