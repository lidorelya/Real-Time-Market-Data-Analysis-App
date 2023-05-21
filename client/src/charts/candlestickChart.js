import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts'
import { parse, subDays, subMonths, subWeeks, subYears } from 'date-fns';
import * as Realm from 'realm-web';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import he from 'date-fns/locale/he'; // Replace with your preferred locale
import ButtonList from './ButtonList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
registerLocale('he', he);

//const selectedSecurityID = '1' // SecurityID to display

// User information
const userEmail = "a123456@gmail.com"
const userPassword = "a123456"

const app = new Realm.App({ id: 'type-here-the-id' });
const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);

const selectedSecurityID = '9999999'; // SecurityID to display
const selectedSecurityName = 'USD/ILS'; // SecurityName to display

function sliceArray(arr,startIndex,endIndex){
  var outArr = []
  for ( var i=startIndex ; i<endIndex ; i++ ){
    outArr.push(arr[i])
  }
  return outArr
}

function CandlestickChart(props) {

  const [dataHist, setDataHist] = useState([]);
  const [series, setSeries] = useState([{ name: selectedSecurityName, data: [] }]);

  const [user, setUser] = useState();
  const [isLoadUser,setIsLoadUser] = useState(true)
  const [isLoadliveData,setIsLoadliveData] = useState(true)
  //const [series, setSeries] = useState([{ name: selectedSecurityName, data: [] }]);

  const divRef = useRef(null);
  const chartRef = useRef(null);
  const elementClicked = useSelector((state) => state['elementClicked'])
  const elementClickedNew = useSelector((state) => state['elementClickedNew'])

  const [height, setHeight] = useState(340);
  useEffect(() => {
    if(props.id === elementClickedNew){
      const handleResize = () => {
        const div1 = document.getElementById(`chart-${props.id}`);
        const div1Height = div1.offsetHeight;
        setHeight(div1Height - 50 - 30); // minus "margin-bottom: 12px"
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // to set initial height
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [elementClicked]);


  const [dateRange, setDateRange] = useState([null, null]);
  const [startDateRange, endDateRange] = dateRange;
  const SelectedDateCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className="selectedDateCustomInput" onClick={onClick} ref={ref}>
        <DateRangeIcon />
        &nbsp;&nbsp;
        {value !== '' ? value : "Date Range"}
      </button>
  ));

useEffect(() => {
    async function userLogIn() {
    setUser(await app.logIn(credentials));
    setIsLoadUser(!isLoadUser)
    setIsLoadliveData(!isLoadliveData)
    }
    userLogIn();
  // I dont know why, but when i put empty dependency [], Date Range picking doesn't work
}, );

const [fromDate, setFromDate] = useState("2023-01-20T00:00:00.000Z");
const [toDate, setToDate] = useState("2023-02-20T00:00:00.000Z");
async function fetchData() {
  try {
    // const dataLoaded = await user.functions.getHistDataByMultyFields(selectedSecurityID, ["Open", "High", "Low", "Close"], "day", 1);
    const dataLoaded = await user.functions.getHistDataByMultyFields(selectedSecurityID, ["Open", "High", "Low", "Close"], fromDate, toDate ,"day", 1);
    
    const dataArrayTemp = dataLoaded.map((d) => {
      //const date = parse(d._id.time_to, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx', new Date());
      const dateString = d._id.time_to.toISOString()
      const shortDate = `${dateString.substring(5, 7)}/${dateString.substring(8, 10)}/${dateString.substring(0, 4)}`
      const date = new Date(shortDate)

      let open = Number(Number(d.Open).toFixed(2))
      let high = Number(Number(d.High).toFixed(2))
      let low = Number(Number(d.Low).toFixed(2))
      let close = Number(Number(d.close).toFixed(2))

      return  {x: date.getTime(), y: [open,high,low,close]} ;
    });
    setDataHist(dataArrayTemp);
  } catch (error) {
      console.error(error);
  }
}

// historical daily prices
useEffect(() => {
    fetchData();
}, [isLoadUser]);

useEffect(() => {
  if (chartRef.current) {
    setSeries([{ name: selectedSecurityName, data: dataHist }]);
    // setSeries([{ name: selectedSecurityName, data: dataHist.length>40 ? sliceArray(dataHist,0,40) : dataHist }]);
  }
}, [dataHist]);

  const [state,setState] = useState({
    options: {
      chart: {
        type: 'candlestick',
        id: `candlestick-${props.id}`,
        zoom: { autoScaleYaxis: true },
        //height: 350
      },
      title: {
        text: selectedSecurityName,
        align: 'center',
        style: {
          color: '#fff',
          background: '#00E396',  
          fontSize: 18
        },
      },
      xaxis: {
        type: 'datetime',
        // categories: [],
        // forceNiceScale: true,
        // tickPositions: [],
        // tickPlacement: 'on',
        floating: false,
        labels: {
          formatter: function(val) {
            // return dayjs(val).format('MMM DD HH:mm')
            return dayjs(val).format('MMM DD YY')
          },
          style: {
            colors: '#ffffff',
          },
        },
      },
      yaxis: {
        floating: false,
        tickAmount: 20,
        tooltip: {
          enabled: true
        },
        // forceNiceScale: true,
        labels: {
          floating: false,
          style: {
            colors: '#ffffff',
          },
        },
      },
      stroke: {
        width: [2, 1]
      },
    },
  });

/*   useEffect(() => {
    if(series['0'].data.length > 0){
      setState({
          options: {
              ...state.options,
              xaxis: {
                  ...state.options.xaxis,
                  categories: series[0].data.length>0 ? series[0].data.map(o => new Date(o.x).toDateString()) : []
              }
          }
      })
    }
  },[state]) */

  const updateData = useCallback((timeline) => {
    setState((prevState) => ({ ...prevState, selection: timeline }));
    // let endDate = series[0].data.length > 0 ? new Date(Math.max(...series[0].data.map((o) => o[0]))) : new Date();
    let endDate = series[0].data.length > 0 ? new Date(Math.max(...series[0].data.map((o) => o.x))) : new Date();
    let tempEndDate = 0
    switch (timeline) {
      case 'Today':
        // let startDate = new Date().setHours(0, 0, 0, 0)
        tempEndDate = new Date().setHours(0, 0, 0, 0)
        let nowTime = new Date()
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, nowTime.getTime());
        break;
      case 'one_day':
        tempEndDate = subDays(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'five_days':
        tempEndDate = subDays(endDate, 5).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'one_week':
        tempEndDate = subWeeks(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'one_month':
        tempEndDate = subMonths(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'three_months':
        tempEndDate = subMonths(endDate, 3).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'six_months':
        tempEndDate = subMonths(endDate, 6).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'nine_months':
        tempEndDate = subMonths(endDate, 9).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'one_year':
        tempEndDate = subYears(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'two_years':
        tempEndDate = subYears(endDate, 2).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'five_years':
        tempEndDate = subYears(endDate, 5).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'ten_years':
        tempEndDate = subYears(endDate, 10).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'max':
        setFromDate([])
        setToDate([])
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX');
        break;

      case 'date_range':
        tempEndDate = startDateRange.getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`candlestick-${props.id}`, 'zoomX', tempEndDate, endDateRange.getTime());
        break;
      default:
    }

    // exclude `max` and `date_range`
    let minVal = Math.min(...series[0].data.filter(res => res.x>=tempEndDate && res.x<=endDate.getTime()).map((o) => Math.min(...o.y)))
    let maxVal = Math.max(...series[0].data.filter(res => res.x>=tempEndDate && res.x<=endDate.getTime()).map((o) => Math.max(...o.y)))
    setState({
      options: {
          ...state.options,
          yaxis: {
              ...state.options.yaxis,
              min: minVal*0.99,
              max: maxVal*1.01,
          }
      }})
  }, [series]);
  
  const buttonData = [
    { label: 'Today', selection:"Today",        id: "Today"        },
    { label: '1D',    selection:"one_day",      id: "one_day"      },
    { label: '5D',    selection:"five_days",    id: "five_days"    },
    { label: '1W',    selection:"one_week",     id: "one_week"     },
    { label: '1M',    selection:"one_month",    id: "one_month"    },
    { label: '3M',    selection:"three_months", id: "three_months" },
    { label: '6M',    selection:"six_months",   id: "six_months"   },
    { label: '9M',    selection:"nine_months",  id: "nine_months"  },
    { label: '1Y',    selection:"one_year",     id: "one_year"     },
    { label: '2Y',    selection:"two_years",    id: "two_years"    },
    { label: '5Y',    selection:"five_years",   id: "five_years"   },
    { label: '10Y',   selection:"ten_years",    id: "ten_years"    },
    { label: 'Max',   selection:"max",          id: "max"          },
  ];

  return (      
    <div id={`chart-${props.id}`} className="chart" style={{ height: '95%', position: 'relative' }}>
      <div className="toolbar" ref={divRef} id={props.id} style={{ height: '40px' }}>
        <DatePicker
          customInput={<SelectedDateCustomInput />}
          selectsRange={true}
          startDate={startDateRange}
          endDate={endDateRange}
          onChange={(update) => {
            setDateRange(update);
            //updateData('date_range');
          }}
          //isClearable={true}
          locale="he"
          selectsStart
          withPortal // open popup dataPick window
          portalId='#root' // open the popup dataPick on the root class(id)
        />
        
        &nbsp;
        <button className='applyDateRangeButton' onClick={() => updateData('date_range')}>
          <b>Apply</b>
        </button>

        &nbsp;&nbsp;
        <ButtonList data={buttonData} onButtonClick={updateData} />

      </div>

      <div id="chart-candlestick" style={{ height: `${height}px` }}>
        <ReactApexChart id={props.id} ref={chartRef} options={state.options} series={series} type="candlestick" height="100%" />
      </div>
    </div>
  );
}

export default CandlestickChart;
