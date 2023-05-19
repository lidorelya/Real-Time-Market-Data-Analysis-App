
const numberValueParser = (params) => {
    const res = params.newValue
    //return Number(params.newValue);
    if(isNaN(Number(res))){return res}
    else{return Number(res)}
};

const cellStyle = (params) => {
    if (params.value > params.data.PrevPrice) {
        return {color: 'green',fontWeight: 'bold'};
    }
    if (params.value < params.data.PrevPrice) {
        return {color: 'red',fontWeight: 'bold'};
    }
    //return {color: 'red',fontWeight: 'bold'}
};
const cellStylePriceChange = (params) => {
    if (params.data.LastSalePrice > params.data.PrevPrice) {
        return {color: 'green',fontWeight: 'bold'}
    }if (params.data.LastSalePrice < params.data.PrevPrice){
        return {color: 'red',fontWeight: 'bold'}
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

/* const numberCellFormatter = (params) => {
    return Math.floor(params.value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,');
}; */

export const columnDefsEQ = [
{
    headerName: "UpdateTime",
    field: "UpdateTime"
},
{
    headerName: "SecurityID",
    field: "SecurityID",
    rowDrag: true,
    // rowDrag: params => !params.node.group
},
{
    headerName: "Price",
    field: "Price",
    valueFormatter: numberCellFormatter,
    cellStyle: cellStyle,
    cellRenderer:'agAnimateShowChangeCellRenderer',
    tooltipField: 'SecurityID',
},
{
    headerName: "LastSalePrice",
    field: "LastSalePrice",
    valueFormatter: numberCellFormatter,
    cellStyle: cellStyle,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "PrevPrice",
    field: "PrevPrice",
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
    headerName: "PercentageChange",
    field: "PercentageChange",
    //valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "ISINCode",
    field: "ISINCode",
    tooltipField: 'SecurityID',
},
{
    headerName: "NameHebrew",
    field: "NameHebrew"
},
{
    headerName: "NameEnglish",
    field: "NameEnglish"
},
{
    headerName: "SymbolHebrew",
    field: "SymbolHebrew"
},
{
    headerName: "SymbolEnglish",
    field: "SymbolEnglish"
},
{
    headerName: "SecurityTypeName",
    field: "SecurityTypeName"
},
{
    headerName: "SecurityType",
    field: "SecurityType"
},
{
    headerName: "IndexName",
    field: "IndexName"
},
{
    headerName: "IndexCode",
    field: "IndexCode"
},
/* {
    headerName: "Price",
    field: "Price",
    valueFormatter: numberCellFormatter,
    cellStyle: params => {
        if (params.value >= 24) {
            //mark field cells as red
            return {backgroundColor: 'green'};
        }
        return {backgroundColor: 'red'}},
    cellRenderer:'agAnimateShowChangeCellRenderer'
}, */
{
    headerName: "Yield",
    field: "Yield",
    valueParser: numberValueParser,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "MarketID",
    field: "MarketID"
},
{
    headerName: "TotalMonetaryVolume",
    field: "TotalMonetaryVolume"
},
{
    headerName: "Volume",
    field: "Volume",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "PercentageChangefromBaseIndex",
    field: "PercentageChangefromBaseIndex"
},
{
    headerName: "CeilingPriceOpeningStage",
    field: "CeilingPriceOpeningStage"
},
{
    headerName: "TradingStage",
    field: "TradingStage"
},
{
    headerName: "OfferPrice1",
    field: "OfferPrice1",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TimeIndexCalculated",
    field: "TimeIndexCalculated"
},
{
    headerName: "SubSectorName",
    field: "SubSectorName"
},
{
    headerName: "SubSector",
    field: "SubSector"
},
{
    headerName: "LastSaleVolume",
    field: "LastSaleVolume"
},
{
    headerName: "NumberofTrades",
    field: "NumberofTrades",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "ExCode",
    field: "ExCode"
},
{
    headerName: "MessageTextHebrew",
    field: "MessageTextHebrew"
},
{
    headerName: "TradeSuspensionReason",
    field: "TradeSuspensionReason"
},
{
    headerName: "FloorPriceContinuousStage",
    field: "FloorPriceContinuousStage"
},
{
    headerName: "RecordType",
    field: "RecordType"
},
{
    headerName: "VolumeatMarketPrice",
    field: "VolumeatMarketPrice"
},
{
    headerName: "PriceCode",
    field: "PriceCode"
},
{
    headerName: "TotalMonetaryVolumeGainers",
    field: "TotalMonetaryVolumeGainers"
},
{
    headerName: "VolumeatMarketPriceCode",
    field: "VolumeatMarketPriceCode"
},
{
    headerName: "OfferPrice2",
    field: "OfferPrice2",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TA125Index",
    field: "TA125Index"
},
{
    headerName: "CeilingPriceContinuousStage",
    field: "CeilingPriceContinuousStage"
},
{
    headerName: "SectorName",
    field: "SectorName"
},
{
    headerName: "Sector",
    field: "Sector"
},
{
    headerName: "MonetaryvolumeinthousandsNISflag",
    field: "MonetaryvolumeinthousandsNISflag"
},
{
    headerName: "FloorPriceOpeningStage",
    field: "FloorPriceOpeningStage",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "TotalNumberofTrades",
    field: "TotalNumberofTrades",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "Minimumordersizeduringpreopen",
    field: "Minimumordersizeduringpreopen",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "Minimumordersizeduringpreclose",
    field: "Minimumordersizeduringpreclose",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "CompanyID",
    field: "CompanyID"
},
{
    headerName: "Numerator",
    field: "Numerator"
},
{
    headerName: "BidVolume5",
    field: "BidVolume5",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "BasePrice",
    field: "BasePrice",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "BidPrice2",
    field: "BidPrice2",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "Volumeinthousandsunitsflag",
    field: "Volumeinthousandsunitsflag"
},
{
    headerName: "NewSecurityIndicator",
    field: "NewSecurityIndicator"
},
{
    headerName: "IndexValue",
    field: "IndexValue",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "CoordinatedTradeIndicator",
    field: "CoordinatedTradeIndicator"
},
{
    headerName: "NumberofSecuritiesGainers",
    field: "NumberofSecuritiesGainers"
},
{
    headerName: "MaintenanceLowLiquidityIndicator",
    field: "MaintenanceLowLiquidityIndicator"
},
{
    headerName: "NumberofLevels",
    field: "NumberofLevels"
},
{
    headerName: "TotalMonetaryVolumeLosers",
    field: "TotalMonetaryVolumeLosers"
},
{
    headerName: "RetransmissionIndicator",
    field: "RetransmissionIndicator"
},
{
    headerName: "BidVolume4",
    field: "BidVolume4",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TradeSuspensionOpened",
    field: "TradeSuspensionOpened"
},
{
    headerName: "DualRegisteredCode",
    field: "DualRegisteredCode"
},
{
    headerName: "BidVolume1",
    field: "BidVolume1",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "LastSaleTime",
    field: "LastSaleTime"
},
{
    headerName: "MessageNumber",
    field: "MessageNumber"
},
{
    headerName: "MessageTextEnglish",
    field: "MessageTextEnglish"
},
{
    headerName: "TodayLowestPrice",
    field: "TodayLowestPrice"
},
{
    headerName: "MinimumOrderSizeduringcontinuousstage",
    field: "MinimumOrderSizeduringcontinuousstage"
},
{
    headerName: "NumberofSecuritiesUnchanged",
    field: "NumberofSecuritiesUnchanged"
},
{
    headerName: "TA35Index",
    field: "TA35Index"
},
{
    headerName: "BidPrice5",
    field: "BidPrice5",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "SecuritySubType",
    field: "SecuritySubType"
},
{
    headerName: "TotalVolume",
    field: "TotalVolume",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "BidPrice4",
    field: "BidPrice4",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "MarketStatus",
    field: "MarketStatus"
},
{
    headerName: "InitializationCode",
    field: "InitializationCode"
},
{
    headerName: "BidPrice3",
    field: "BidPrice3",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "AccruedInterest",
    field: "AccruedInterest"
},
{
    headerName: "ExDescription",
    field: "ExDescription"
},
{
    headerName: "BidVolume2",
    field: "BidVolume2",
    valueFormatter: numberCellFormatter,
},
{
    headerName: "BaseYield",
    field: "BaseYield",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "SystemTime",
    field: "SystemTime"
},
{
    headerName: "MonetaryVolume",
    field: "MonetaryVolume",
    valueFormatter: numberCellFormatter
},
{
    headerName: "OfferVolume1",
    field: "OfferVolume1",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TodayHighestPrice",
    field: "TodayHighestPrice",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "MaturityDate",
    field: "MaturityDate"
},
{
    headerName: "CurrencyCode",
    field: "CurrencyCode"
},
{
    headerName: "SecurityStatusCode",
    field: "SecurityStatusCode"
},
{
    headerName: "TotalMonetaryVolumeUnchanged",
    field: "TotalMonetaryVolumeUnchanged",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "BidPrice1",
    field: "BidPrice1",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "TradeSuspensionCode",
    field: "TradeSuspensionCode"
},
{
    headerName: "OfferPrice3",
    field: "OfferPrice3",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "MarketMakeronSecurity",
    field: "MarketMakeronSecurity"
},
{
    headerName: "NumberofSecuritiesLosers",
    field: "NumberofSecuritiesLosers"
},
{
    headerName: "OfferVolume2",
    field: "OfferVolume2",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "LastRecordIndicator",
    field: "LastRecordIndicator"
},
{
    headerName: "BidVolume3",
    field: "BidVolume3",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
},
{
    headerName: "IndexType",
    field: "IndexType"
},
{
    headerName: "ExceptionalOrderSize",
    field: "ExceptionalOrderSize"
},
{
    headerName: "OfferVolume3",
    field: "OfferVolume3",
    valueFormatter: numberCellFormatter,
    cellRenderer:'agAnimateShowChangeCellRenderer'
}
];