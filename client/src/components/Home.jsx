import React from "react";

import AddTable from '../AddTable'

//import {fieldSchema} from'../columnDef/fieldSchema'
import {columnDefsEQ} from'../columnDef/columnDefsEQ'
import {columnDefsIndex} from'../columnDef/columnDefsIndex'
import {columnDefsDerivative} from'../columnDef/columnDefsDerivative'

const rowEQIdField = 'SecurityID' // callback tells the grid to use the 'SecurityID' attribute for IDs, IDs should always be strings
const eqRecordType = ['VA', 'VB', 'VD', 'VE', 'VF', 'VG', 'VH', 'VI', 'VM']
const flushFieldNameNewEQ = 'LastSalePrice'
const flushFieldNameOldEQ = 'PrevPrice'
const tableNameEquity = 'Equity'

const rowIndexIdField = 'IndexCode' // callback tells the grid to use the 'IndexCode' attribute for IDs, IDs should always be strings
const indexRecordType = ['VK']
const flushFieldNameNewIndex = 'IndexValue'
const flushFieldNameOldIndex = 'PrevIndexValue'
const tableNameIndex = 'Index'

const rowDerivativeIdField = 'SecurityID' // callback tells the grid to use the 'SecurityID' attribute for IDs, IDs should always be strings
const derivativeRecordType = ['FA', 'FB', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FN', 'FO']
const tableNameDerivative = 'Derivative'

export function Home() {
  return (

    // <div class="align-items-center my-5">
    //   {AddTable(tableNameEquity,columnDefsEQ,rowEQIdField,eqRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    //   {AddTable(tableNameIndex,columnDefsIndex,rowIndexIdField,indexRecordType,flushFieldNameOldIndex,flushFieldNameNewIndex)}
    //   {AddTable(tableNameDerivative,columnDefsDerivative,rowDerivativeIdField,derivativeRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    // </div>

    <>
      {AddTable(tableNameEquity,columnDefsEQ,rowEQIdField,eqRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
      {AddTable(tableNameIndex,columnDefsIndex,rowIndexIdField,indexRecordType,flushFieldNameOldIndex,flushFieldNameNewIndex)}
      {AddTable(tableNameDerivative,columnDefsDerivative,rowDerivativeIdField,derivativeRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    </>

  );
}