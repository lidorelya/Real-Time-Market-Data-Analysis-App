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

    if (action.type === 'elementClickedNew'){
        return { ...state, elementClickedNew: action.data }
    }

    return state
};

//const store = createStore(reducerFn, composeWithDevTools(applyMiddleware(logger)));
const store = createStore(reducerFn, composeWithDevTools(applyMiddleware()));

export default store;