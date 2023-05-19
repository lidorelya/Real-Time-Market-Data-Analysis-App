import React from "react";

import AddTable from './AddTable'

//import {fieldSchema} from'../columnDef/fieldSchema'
import {columnDefsEQ} from'../columnDef/columnDefsEQ'


const rowEQIdField = 'SecurityID' // callback tells the grid to use the 'SecurityID' attribute for IDs, IDs should always be strings
const eqRecordType = ['VA', 'VB', 'VD', 'VE', 'VF', 'VG', 'VH', 'VI', 'VM']

const flushFieldNameNewEQ = 'LastSalePrice'
const flushFieldNameOldEQ = 'PrevPrice'

const tableName = 'Equity'

export function Equity(args) {

  return (
    
    // <div className="align-items-center mb-3" id={id}>
    //   {/* {AddTable(tableName,fieldSchema,columnDefsEQ,rowEQIdField,eqRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)} */}
    //   {AddTable(id,tableName,columnDefsEQ,rowEQIdField,eqRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    // </div>

    <>
      {AddTable(args["id"],tableName,args["keys"],columnDefsEQ,rowEQIdField,eqRecordType,flushFieldNameOldEQ,flushFieldNameNewEQ)}
    </>
    
  );
}