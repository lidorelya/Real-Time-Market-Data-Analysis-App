import React from "react";

import AddTable from './AddTable'

import {columnDefsIndex} from'../columnDef/columnDefsIndex'
//import { fieldSchema } from "../columnDef/fieldSchema";

const rowIndexIdField = 'IndexCode' // callback tells the grid to use the 'IndexCode' attribute for IDs, IDs should always be strings
const indexRecordType = ['VK']

const flushFieldNameNewIndex = 'IndexValue'
const flushFieldNameOldIndex = 'PrevIndexValue'

const tableName = 'Index'

export function IndexTable(args) {

  return (
    // <div class="align-items-center mb-3" id={id}>
    //   {AddTable(id,tableName,columnDefsIndex,rowIndexIdField,indexRecordType,flushFieldNameOldIndex,flushFieldNameNewIndex)}
    // </div>

    <>
      {AddTable(args["id"],tableName,args["keys"],columnDefsIndex,rowIndexIdField,indexRecordType,flushFieldNameOldIndex,flushFieldNameNewIndex)}
    </>
  );
}