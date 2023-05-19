import '../App.css';
import 'ag-grid-enterprise';
import '../styles/ag-grid.css';
import '../styles/ag-theme-alpine-dark.css';
import '../styles.css';

import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import CustomTooltip from './customTooltip.jsx';
import { useSelector } from 'react-redux';

import io from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://localhost:3003');
const keysListAddress = 'http://localhost:5001/keys'

function nowTime() {
    function twoDigit(num){return num <= 9 ? '0' + num : num}
    const time = new Date()
    let hours = twoDigit(time.getHours())
    let minutes = twoDigit(time.getMinutes())
    let seconds = twoDigit(time.getSeconds())
    return hours + ":" + minutes + ":" + seconds
  }


function AddTable(id,tableName,keys,columnDefs,rowIdField,recordTypeArray,flushFieldNameOld,flushFieldNameNew) {
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const gridStyle = useMemo(() => ({ height: "calc(97% - 50px)", width: '100%'}), []);
  
  const colState  = useSelector((state) => state[tableName])
  const [resetStateCols, setResetStateCols] = useState();
  const [floatingFilterIndicator, setFloatingFilterIndicator] = useState(false);
  const [floatingFilterBtn, setFloatingFilterBtn] = useState(false);

  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const [, setRowDataUpdate] = useState();

  // eslint-disable-next-line
  const [gridApi, setGridApi] = useState(null);


  const [initialDataFlag, setInitialDataFlag] = useState(false)
  const [dataStream, setDataStream] = useState('initializing')
  const [keysList, setKeysList] = useState([])

 
  const keyTitleTableName = tableName === "Equity" ? 'Stocks' : ( tableName === "Index" ? 'Indices' : 'Derivatives');
  useEffect(() => {
      axios.get(`${keysListAddress}/${keyTitleTableName}`)
        .then(response => setKeysList(response.data))
        .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if(keys !== []) {
      if ( ! initialDataFlag) {
        const topicName = keyTitleTableName
        const groupId = `group-${uuidv4()}`;
        
        socket.emit("getInitialData", [topicName, groupId, keys]);
        socket.on(`receive_message_${groupId}`, (message) => {
          setRowData()
          translateRowData(message,recordTypeArray)
          setInitialDataFlag(true)
        });
      }
    }
  }, [keys]);

  useEffect(() => {
    if (initialDataFlag) {
      const topicName = keyTitleTableName
      const groupId = `group-${uuidv4()}`;
      socket.emit("send_message", [topicName, groupId, keys]);
      socket.on(`receive_message_${topicName}_${groupId}`, (message) => {
        let newRecord = JSON.parse(message)
        setDataStream(newRecord)
      });
    }
  }, [initialDataFlag]);


  useEffect(() => {
    const onResize = () => {
      if (gridApi) {
        gridApi.sizeColumnsToFit();
      }
    };
  
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [gridApi]);

  const floatingFilter = () => {
    if (floatingFilterIndicator === true) {
      setFloatingFilterIndicator(false)
      return false
    }else{
      setFloatingFilterIndicator(true)
      return true
    }
  };

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo( ()=> ({
    sortable: true,
    filter: true,
    flex: 0,
    floatingFilter: floatingFilter(),
    enablePivot: true,
    resizable: true,
    tooltipComponent: CustomTooltip,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    // eslint-disable-next-line
  }), [floatingFilterBtn]);

  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
        },
      ],
      //defaultToolPanel: 'filters',
      hiddenByDefault: false,
      setSideBarVisible: true,
    };
  }, []);
  
  // callback tells the grid to use the 'SecurityID' attribute for IDs, IDs should always be strings
  const getRowId = params => params.data[rowIdField];

  function translateRowData(data,recordTypeArray){
    var resRowArray = []
    if (typeof data !== 'undefined' && data.length !== 0){
      // the first index (i=0) is the Sequence Number
      for( var i=0 ; i<data.length ; i++ ){
        let res = data[i]

        var msg_record_type = res['RecordType']
        if (recordTypeArray.includes(msg_record_type)){
          resRowArray.push(res);
        }
      }

      if (resRowArray.length > 0){
        setRowData(resRowArray)
        
        if (colState !== undefined){
          if (colState.length > 0) {
            try {
              gridRef.current.columnApi.applyColumnState({
                state: colState,
                applyOrder: true,
              });
            } catch (error) {
              
            }
          };
        }
      }
    }
  }

  useEffect(() => {
    if (dataStream !== [] && dataStream !== 'undefined'){
      let data = dataStream.RecordDetails
      setRowDataUpdate(translateRowDataLive(data,recordTypeArray))
    }
  },[dataStream])

  function translateRowDataLive(data,recordTypeArray){
    if (typeof data !== 'undefined'){
      var msg_record_type = data['RecordType']
      if (recordTypeArray.includes(msg_record_type)){
        setTimeout(function (){
          updateDataInTable(data)
        },0)
      }
    }
  }

  function updateDataInTable(data) {
    const rowDataNew = data
    const rowDataNewIdValue = rowDataNew[rowIdField]

    // get the row node with specific ID. if not exist return 'undefined'
    const rowNodeId = gridRef.current.api.getRowNode(rowDataNewIdValue);
    // if the same security id
    if (typeof rowNodeId !== 'undefined'){
      const rowNode = gridRef.current.api.getDisplayedRowAtIndex(rowNodeId.rowIndex);
      
      if (isNaN(rowNode.data[flushFieldNameNew]) && rowNode.data[flushFieldNameNew] !== '' && rowNode.data[flushFieldNameNew] === 'undefined' && rowNode.data[flushFieldNameNew] === undefined){
        rowNode.setDataValue(flushFieldNameOld, '')
      }else{
        rowNode.setDataValue(flushFieldNameOld, rowNode.data[flushFieldNameNew])
      }
      rowNode.setDataValue('UpdateTime', nowTime());
      for( var col_ind=0 ; col_ind<columnDefs.length ; col_ind++ ){
        if (columnDefs[col_ind].field !== flushFieldNameOld && columnDefs[col_ind].field !== 'UpdateTime'){
          if (rowDataNew[columnDefs[col_ind].field] !== undefined) {
            if (rowDataNew[columnDefs[col_ind].field].replace(/\s/gm, '')){
              rowNode.setDataValue(columnDefs[col_ind].field, rowDataNew[columnDefs[col_ind].field]);
            }
          }
        }
      }

      if (isNaN(rowNode.data[flushFieldNameNew]) && rowNode.data[flushFieldNameNew] !== '' && rowNode.data[flushFieldNameNew] === 'undefined' && rowNode.data[flushFieldNameNew] === undefined){
        rowNode.setDataValue(flushFieldNameOld, '')
      }else{
        var PriceChange = ( Number(rowNode.data[flushFieldNameNew]) / Number(rowNode.data[flushFieldNameOld]) -1 ) * 100
        if (isNaN(PriceChange)){
          
        }
        else{
          rowNode.setDataValue('PriceChange', PriceChange.toString())
        }
      }

    } else{
      rowDataNew['UpdateTime'] = nowTime()
      rowDataNew[flushFieldNameOld] = ''
      gridRef.current.api.applyTransaction({add: [rowDataNew],}); //addIndex: undefined,
    }

    // the grid will update to reflect a change in sorting, filtering or grouping.
    gridRef.current.api.refreshClientSideRowModel('sort');
  };

  // in onGridReady, store the api for later use
  const onGridReady = (params) => {
    setGridApi(params.api);

    setResetStateCols(params.columnApi.getColumnState())

    const colStateLocalStorage = JSON.parse(localStorage.getItem(tableName))
    params.columnApi.applyColumnState({
      state: colStateLocalStorage,
      applyOrder: true,
    });

    const savedFilterModel = JSON.parse(localStorage.getItem(tableName+': savedFilterModel'))
    params.api.setFilterModel(savedFilterModel);
  }


  const popupParent = useMemo(() => {
      return document.body;
    }, []);

  const saveState = () => {}
  const loadState = () => {}
  const resetState = () => {}

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  
  return (
    <>
    {/* <div className="chart" style={{ height: '100%', position: 'relative' }}> */}
    {/* <div className="chart" style={{ height: '96%'}}> */}
      {/* <div className="ag-theme-alpine-dark" style={gridStyle}> */}
      <div className="ag-theme-alpine-dark" id={`AgGridReact-${id.id}`} style={gridStyle}>
{/*       <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          /> */}
      
        <div className="table-toolbar">
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          /> &nbsp;&nbsp;&nbsp;
          <button className="table-toolbar-buttons" onClick={saveState}>save</button> &nbsp;
          <button className="table-toolbar-buttons" onClick={loadState}>load</button> &nbsp;
          <button className="table-toolbar-buttons" onClick={resetState}>reset</button> &nbsp;
          <button className="table-toolbar-buttons" onClick={ ()=> setFloatingFilterBtn(!floatingFilterBtn) }>floating Filter</button> &nbsp;
        </div>
    
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          getRowId={getRowId}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          // sideBar={'columns'}
          sideBar={sideBar}
          rowSelection='multiple'
          suppressMultiRangeSelection={true}
          enableRangeSelection={true}
          animateRows={true}
          alwaysShowHorizontalScroll={true}
          alwaysShowVerticalScroll={true}
          suppressAggFuncInHeader={true}
          asyncTransactionWaitMillis={4000}
          rowGroupPanelShow='always'
          pivotPanelShow='always'
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          suppressRowHoverHighlight={true} // Set to true to not highlight rows by adding the ag-row-hover CSS class. Default: false
          columnHoverHighlight={true} // Set to true to highlight columns by adding the ag-column-hover CSS class. Default: false
          tooltipShowDelay={1000}
          tooltipMouseTrack={true}
          suppressMovable={true}
          suppressHorizontalScroll={false}
          suppressVerticalScroll={false}
          cacheOverflowSize={0}
          suppressScrollOnNewData={true} // the grid will not scroll to the top when new row data is provided
          suppressBrowserScrollbar={true}
          // cacheBlockSize={200} // How many rows for each block in the store, i.e. how many rows returned from the server at a time. Default: 100
          allowDragFromColumnsToolPanel={true}
          suppressMovableColumns={false}
          suppressDragLeaveHidesColumns={true}
          suppressColumnMoveAnimation={true}
          
          // rowDrag:
          //  * Does not work if Pagination is enabled
          //  * Does not work when sorting is applied
          //  * Does not work when filtering is applied
          //  * Does not work when row grouping or pivot is active
          // there are more.. https://www.ag-grid.com/react-data-grid/row-dragging/#suppress-row-drag
          rowDragManaged={true}
          rowDragMultiRow={true}
          rowDragEntireRow={true}

          // height in px
          rowHeight={25}
          headerHeight={25}
          groupHeaderHeight={25}
          floatingFiltersHeight={20}
          pivotHeaderHeight={25}
          pivotGroupHeaderHeight={25}

          // for charts
          /* enableCharts={true}
          enableRangeSelection={true}
          popupParent={popupParent} */
        >
        </AgGridReact>
      </div>
    {/* </div> */}
    </>
  );
  
}
  
export default AddTable;