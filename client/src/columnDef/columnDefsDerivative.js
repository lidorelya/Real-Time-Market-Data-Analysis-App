
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

export const columnDefsDerivative = [
{
    headerName: "UpdateTime",
    field: "UpdateTime",
},
{
    headerName: "RecordType",
    field: "RecordType",
},
{
    headerName: "Price",
    field: "Price",
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
    headerName: "LastRecordIndicator",
    field: "LastRecordIndicator",
},
{
    headerName: "Numerator",
    field: "Numerator",
},
{
    headerName: "MarketID",
    field: "MarketID",
},
{
    headerName: "ContractNumber",
    field: "ContractNumber",
},
{
    headerName: "SymbolEnglish",
    field: "SymbolEnglish",
},
{
    headerName: "SymbolHebrew",
    field: "SymbolHebrew",
},
{
    headerName: "NameEnglish",
    field: "NameEnglish",
},
{
    headerName: "NameHebrew",
    field: "NameHebrew",
},
{
    headerName: "SectorName",
    field: "SectorName",
},
{
    headerName: "SubSectorName",
    field: "SubSectorName",
},
{
    headerName: "Sector",
    field: "Sector",
},
{
    headerName: "SubSector",
    field: "SubSector",
},
{
    headerName: "ContractType",
    field: "ContractType",
},
{
    headerName: "NewCntractAddedDuringTheDay",
    field: "NewCntractAddedDuringTheDay",
},
{
    headerName: "UnderlyingAssetCode",
    field: "UnderlyingAssetCode",
},
{
    headerName: "UnderlyingAssetType",
    field: "UnderlyingAssetType",
},
{
    headerName: "UnderlyingAsset",
    field: "UnderlyingAsset",
},
{
    headerName: "ISINCode",
    field: "ISINCode",
},
{
    headerName: "MinimumOrderSizeduringcontinuousstage",
    field: "MinimumOrderSizeduringcontinuousstage",
},
{
    headerName: "MaximumOrderSizeduringcontinuousstage",
    field: "MaximumOrderSizeduringcontinuousstage",
},
{
    headerName: "FloorPrice",
    field: "FloorPrice",
},
{
    headerName: "CeilingPrice",
    field: "CeilingPrice",
},
{
    headerName: "BasePrice",
    field: "BasePrice",
},
{
    headerName: "BasePriceTypeCode",
    field: "BasePriceTypeCode",
},
{
    headerName: "ContractStage",
    field: "ContractStage",
},
{
    headerName: "ExpirationDate",
    field: "ExpirationDate",
},
{
    headerName: "StrikePrice",
    field: "StrikePrice",
},
{
    headerName: "MultiplierForCalculatingVolume_IntTermsOfUnderlyingAsset",
    field: "MultiplierForCalculatingVolume_IntTermsOfUnderlyingAsset",
},
{
    headerName: "CodeForCalculatingVolume_IntTermsOfUnderlyingAsset",
    field: "CodeForCalculatingVolume_IntTermsOfUnderlyingAsset",
},
{
    headerName: "InitializationCode",
    field: "InitializationCode",
},
{
    headerName: "AdjustedContract",
    field: "AdjustedContract",
},
{
    headerName: "ExactExpirationDate",
    field: "ExactExpirationDate",
},
{
    headerName: "MarketStatus",
    field: "MarketStatus",
},
{
    headerName: "TradeSuspensionCode",
    field: "TradeSuspensionCode",
},
{
    headerName: "TradeSuspensionReason",
    field: "TradeSuspensionReason",
},
{
    headerName: "TradeSuspensionOpened",
    field: "TradeSuspensionOpened",
},
{
    headerName: "BidPrice1",
    field: "BidPrice1",
},
{
    headerName: "BidPrice2",
    field: "BidPrice2",
},
{
    headerName: "BidPrice3",
    field: "BidPrice3",
},
{
    headerName: "BidVolume1",
    field: "BidVolume1",
},
{
    headerName: "BidVolume2",
    field: "BidVolume2",
},
{
    headerName: "BidVolume3",
    field: "BidVolume3",
},
{
    headerName: "RetransmissionIndicator",
    field: "RetransmissionIndicator",
},
{
    headerName: "NumberofLevels",
    field: "NumberofLevels",
},
{
    headerName: "BidPrice4",
    field: "BidPrice4",
},
{
    headerName: "BidVolume4",
    field: "BidVolume4",
},
{
    headerName: "BidPrice5",
    field: "BidPrice5",
},
{
    headerName: "BidVolume5",
    field: "BidVolume5",
},
{
    headerName: "OfferPrice1",
    field: "OfferPrice1",
},
{
    headerName: "OfferPrice2",
    field: "OfferPrice2",
},
{
    headerName: "OfferPrice3",
    field: "OfferPrice3",
},
{
    headerName: "OfferVolume1",
    field: "OfferVolume1",
},
{
    headerName: "OfferVolume2",
    field: "OfferVolume2",
},
{
    headerName: "OfferVolume3",
    field: "OfferVolume3",
},
{
    headerName: "PriceCode",
    field: "PriceCode",
},
{
    headerName: "PriceTypeCode",
    field: "PriceTypeCode",
},
{
    headerName: "PercentageChange",
    field: "PercentageChange",
},
{
    headerName: "LastSalePrice",
    field: "LastSalePrice",
},
{
    headerName: "LastSaleTime",
    field: "LastSaleTime",
},
{
    headerName: "LastSaleVolume",
    field: "LastSaleVolume",
},
{
    headerName: "Volume",
    field: "Volume",
},
{
    headerName: "MonetaryVolume",
    field: "MonetaryVolume",
},
{
    headerName: "NumberofTrades",
    field: "NumberofTrades",
},
{
    headerName: "CoordinatedTradeIndicator",
    field: "CoordinatedTradeIndicator",
},
{
    headerName: "Volumeinthousandsunitsflag",
    field: "Volumeinthousandsunitsflag",
},
{
    headerName: "MonetaryvolumeinthousandsNISflag",
    field: "MonetaryvolumeinthousandsNISflag",
},
{
    headerName: "TodayHighestPrice",
    field: "TodayHighestPrice",
},
{
    headerName: "TodayLowestPrice",
    field: "TodayLowestPrice",
},
{
    headerName: "OpenPositions",
    field: "OpenPositions",
},
{
    headerName: "PositionChangePercentage",
    field: "PositionChangePercentage",
},
{
    headerName: "NextDayStatus",
    field: "NextDayStatus",
},

];