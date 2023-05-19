
const numberValueParser = (params) => {
    const res = params.newValue
    //return Number(params.newValue);
    if(isNaN(Number(res))){return res}
    else{return Number(res)}
};

const cellStyle = (params) => {
    if (params.value > params.data.PrevIndexValue) {
        return {color: 'green',fontWeight: 'bold'};
    }
    if (params.value < params.data.PrevIndexValue) {
        return {color: 'red',fontWeight: 'bold'};
    }
    //return {color: 'red',fontWeight: 'bold'}
};
const cellStylePriceChange = (params) => {
    if (params.data.IndexValue > params.data.PrevIndexValue) {
        return {color: 'green',fontWeight: 'bold'};
    }
    if (params.data.IndexValue < params.data.PrevIndexValue) {
        return {color: 'red',fontWeight: 'bold'};
    }
    //return {color: 'red',fontWeight: 'bold'}
};

const numberCellFormatter = (params) => {
    const res = Math.floor(params.value)
        .toString()
        //.replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,');
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    if(isNaN(res)&&res!=='NaN'){return res}
    else{return params.value}
};
const numberCellPercentageFormatter = (params) => {
    const res = parseFloat(params.value).toFixed(2) + '%';
    if(isNaN(res)&&res!=='NaN'){return res}
    else{return params.value}
};

export const columnDefsIndex = [
{
    headerName: "UpdateTime",
    field: "UpdateTime"
},
{
    headerName: "IndexCode",
    field: "IndexCode"
},
{
    headerName: "IndexName",
    field: "IndexName"
},
{
    headerName: "IndexNameCode",
    field: "IndexNameCode"
},
{
    headerName: "IndexType",
    field: "IndexType"
},
{
    headerName: "Numerator",
    field: "Numerator"
},
{
    headerName: "IndexValue",
    field: "IndexValue",
    valueFormatter: numberCellFormatter,
    cellStyle: cellStyle,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "PrevIndexValue",
    field: "PrevIndexValue",
    valueFormatter: numberCellFormatter
},
{
    headerName: "PriceChange",
    field: "PriceChange",
    valueFormatter: numberCellPercentageFormatter,
    cellStyle: cellStylePriceChange,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "PercentageChangefromBaseIndex",
    field: "PercentageChangefromBaseIndex",
    valueParser: numberValueParser,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TimeIndexCalculated",
    field: "TimeIndexCalculated"
}

];