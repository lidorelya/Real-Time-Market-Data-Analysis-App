import React from "react";

import AddTable from './AddTable'

//import {fieldSchema} from'../columnDef/fieldSchema'
import {columnDefsDerivative} from'../columnDef/columnDefsDerivative'

const rowDerivativeIdField = 'SecurityID' // callback tells the grid to use the 'SecurityID' attribute for IDs, IDs should always be strings
const derivativeRecordType = ['FA', 'FB', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FN', 'FO']

const flushFieldNameNewEQ = 'LastSalePrice'
const flushFieldNameOldEQ = 'PrevPrice'

const tableName = 'Derivative'

export function Derivative(args) {
  return (
    //<div class="align-items-center my-5">
    // <div class="align-items-center mb-3">
    //   {AddTable(id,tableName,columnDefsDerivative,rowDerivativeIdField,derivativeRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    // </div>

    <>
      {AddTable(args["id"],tableName,args["keys"],columnDefsDerivative,rowDerivativeIdField,derivativeRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    </>
  );
}