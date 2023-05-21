import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';
import { parse, subDays, subMonths, subWeeks, subYears } from 'date-fns';
import * as Realm from 'realm-web';
import '../styles.css'

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import he from 'date-fns/locale/he'; // Replace with your preferred locale
import ButtonList from './ButtonList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useSelector } from 'react-redux';

import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const socket = io('http://localhost:3003');
registerLocale('he', he);

// User information
const userEmail = "a123456@gmail.com"
const userPassword = "a123456"

const app = new Realm.App({ id: 'type-here-the-id' });
const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);

const selectedSecurityID = '99999999'; // SecurityID to display
const selectedSecurityName = 'USD/ILS'; // SecurityName to display

function LineChart(props) {
  const [dataHist, setDataHist] = useState([]);
  const [user, setUser] = useState();
  const [isLoadUser,setIsLoadUser] = useState(true)
  const [isLoadliveData,setIsLoadliveData] = useState(true)
  const [series, setSeries] = useState([{ name: selectedSecurityName, data: [] }]);
  const chartRef = useRef(null);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDateRange, endDateRange] = dateRange;
  const SelectedDateCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button className="selectedDateCustomInput" onClick={onClick} ref={ref}>
        <DateRangeIcon />
        &nbsp;&nbsp;
        {value !== '' ? value : "Date Range"}
      </button>
  ));


  const divRef = useRef(null);
  const elementClicked = useSelector((state) => state['elementClicked'])
  const elementClickedNew = useSelector((state) => state['elementClickedNew'])

  const [height, setHeight] = useState(340);
  useEffect(() => {
    if(props.id === elementClickedNew){
      const handleResize = () => {
        const div1 = document.getElementById(`chart-${props.id}`);
        const div1Height = div1.offsetHeight;
        setHeight(div1Height - 50 - 20); // minus "margin-bottom: 12px"
      };
      window.addEventListener('resize', handleResize);
      handleResize(); // to set initial height
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [elementClicked]);


  useEffect(() => {
    let startFlag = false
    async function userLogIn() {
      setUser(await app.logIn(credentials));
      setIsLoadUser(!isLoadUser)
      setIsLoadliveData(!isLoadliveData)
    }
    userLogIn();
 
  // I dont know why, but when i put empty dependency [], Date Range picking doesn't work
  },);

  const [fromDate, setFromDate] = useState(new Date('2010-01-01'));
  const [toDate, setToDate] = useState(new Date('2023-05-17'));

  // const [fromDate, setFromDate] = useState("2023-01-20T00:00:00.000Z");
  // const [toDate, setToDate] = useState("2023-02-20T00:00:00.000Z");
  // async function fetchData() {
  //   try {
  //       // const dataLoaded = await user.functions.getHistDataByField(selectedSecurityID, "Close", "day", 1);
  //       const dataLoaded = await user.functions.getHistDataByField(selectedSecurityID, "Close", fromDate, toDate, "day", 1);
  //       const dataArrayTemp = dataLoaded.map((d) => {
  //           //const date = parse(d._id.time_to, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx', new Date());
  //           const dateString = d._id.time_to.toISOString()
  //           const shortDate = `${dateString.substring(5, 7)}/${dateString.substring(8, 10)}/${dateString.substring(0, 4)}`
  //           const date = new Date(shortDate)
  //           const price = Number(d.close.toFixed(2));
  //           return [date.getTime(), price];
  //       });
  //       setDataHist(dataArrayTemp);
  //   } catch (error) {
  //       console.error(error);
  //   }
  // }

  async function fetchData() {
    const groupId = `group-${uuidv4()}`;
    
    const interval = 3600000*60; // in milliseconds  . interval = 3600000 : 1 hour in milliseconds,  interval = 1000 : 1 second in milliseconds

    socket.emit("getInitialGraphData", [groupId, selectedSecurityID, "Close", fromDate, toDate, interval]);
    socket.on(`receive_message_graph_data${groupId}`, (message) => {
      const dataArrayTemp = message.map(item => [Date.parse(item["timestamp"]), Number(item["Close"].toFixed(2)) ]);
      setDataHist(dataArrayTemp)
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

      // fetchData();
  }, [isLoadUser]);
  
  useEffect(() => {
    if (chartRef.current) {
      setSeries([{ name: selectedSecurityName, data: dataHist }]);
    }
  }, [dataHist]);
  
  const [state, setState] = useState({
    options: {
      chart: {
        id: `area-datetime-${props.id}`,
        type: 'area',
        //height: 350,
        zoom: { autoScaleYaxis: true },
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
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: '#999',
            label: {
              show: true,
              text: 'Support',
              style: {
                color: '#fff',
                background: '#00E396',
              },
            },
          },
        ],
        xaxis: [
          {
            x: series[0].data[0],
            borderColor: '#999',
            yAxisIndex: 0,
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        categories: [],
        labels: {
          style: {
            colors: '#ffffff',
          },
        },
      },
      yaxis: {
        // min: 0,
        // max: 20,
        // tickAmount: 5,
        forceNiceScale: true,
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            colors: '#ffffff',
          },
        },
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy | hh:mm:ss',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
    
    selection: 'one_month',
  });

  const updateData = useCallback((timeline) => {
    // const { min, max } = chartRef.current.chart.getAxisMinMax('yaxis');
    setState((prevState) => ({ ...prevState, selection: timeline }));
    let endDate = series[0].data.length > 0 ? new Date(Math.max(...series[0].data.map((o) => o[0]))) : new Date();
    let tempEndDate = 0
    switch (timeline) {
      case 'Today':
        //ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', series[0].data[0][0], series[0].data[series[0].data.length - 1][0]);
        let startDate = new Date().setHours(0, 0, 0, 0)
        let nowTime = new Date()
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', startDate, nowTime.getTime());
        break;
      case 'one_day':
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', subDays(endDate, 1).getTime(), endDate.getTime());
        break;
      case 'five_days':
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', subDays(endDate, 5).getTime(), endDate.getTime());
       /*  ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', subDays(endDate, 5).getTime(), endDate.getTime(),  {
          yaxis: {
            max: (chartRef.current.chart.data.w.config.yaxis['0'].max * 1.2 + 10).toFixed(),
          },
        }); */
        break;
      case 'one_week':
        tempEndDate = subWeeks(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'one_month':
        tempEndDate = subMonths(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'three_months':
        tempEndDate = subMonths(endDate, 3).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'six_months':
        tempEndDate = subMonths(endDate, 6).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'nine_months':
        tempEndDate = subMonths(endDate, 9).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'one_year':
        tempEndDate = subYears(endDate, 1).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'two_years':
        tempEndDate = subYears(endDate, 2).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'five_years':
        tempEndDate = subYears(endDate, 5).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'ten_years':
        tempEndDate = subYears(endDate, 10).getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDate.getTime());
        break;
      case 'max':
        setFromDate([])
        setToDate([])
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX');
        break;

      case 'date_range':
        tempEndDate = startDateRange.getTime()
        if(tempEndDate < new Date(fromDate).getTime()){
          setFromDate(tempEndDate)
        }
        ApexCharts.exec(`area-datetime-${props.id}`, 'zoomX', tempEndDate, endDateRange.getTime());
        break;
      default:
    }

/*     // update the yaxis options with the new min and max values
    setState({
      options: {
          ...state.options,
          yaxis: {
              ...state.options.yaxis,
              //min: (chartRef.current.chart.data.w.config.yaxis['0'].min * 0.8).toFixed(),
              //max: (chartRef.current.chart.data.w.config.yaxis['0'].max * 1.2).toFixed(),
          }
      }
    }) */

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

        <div id="chart-timeline" style={{ height: `${height}px` }}>
            <ReactApexChart id={props.id} ref={chartRef} options={state.options} series={series} type="area" height="100%" />
        </div>
    </div>
  );
}

export default LineChart;
