import React, { useState, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsBoost from 'highcharts/modules/boost';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsStockTools from 'highcharts/modules/stock-tools';

import { parse, subDays, subMonths, subWeeks, subYears } from 'date-fns';
import * as Realm from 'realm-web';

// User information
const userEmail = "elyalidor@gmail.com"
const userPassword = "LIDOR79"

const app = new Realm.App({ id: 'real-time-market-data-tloej' });
const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);

const selectedSecurityID = '9999999'; // SecurityID to display
const selectedSecurityName = 'USD/ILS'; // SecurityName to display

// Enable Highcharts modules
HighchartsBoost(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsStockTools(Highcharts);

// Define the initial chart options
const initialOptions = {
  chart: {
/*     events: {
      load: function () {
        // Set up custom GUI buttons
        const chart = this;
        const buttons = chart.stockTools.guiButtons;

        // Add a custom button to toggle data streaming
        buttons.push({
          text: 'Toggle Streaming',
          onclick: function () {
            const button = this;
            const series = chart.series[0];

            if (series.isStreaming()) {
              series.stopLiveStream();
              button.element.innerHTML = 'Toggle Streaming';
            } else {
              series.startLiveStream();
              button.element.innerHTML = 'Stop Streaming';
            }
          },
        });

        // Add a custom button to reset the zoom
        buttons.push({
          text: 'Reset Zoom',
          onclick: function () {
            chart.zoom();
          },
        });
      },
    }, */
  },
  title: {
    text: 'Real-time Stock Prices',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: 'Price',
    },
  },
  series: [
    {
      name: 'Stock Price',
      data: [],
      tooltip: {
        valueDecimals: 2,
      },
    },
  ],
};

const StockChartWithCustomGUI = (props) => {


  const [dataHist, setDataHist] = useState([]);
  const [user, setUser] = useState();
  const [isLoadUser,setIsLoadUser] = useState(true)
  const [isLoadliveData,setIsLoadliveData] = useState(true)
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
      async function userLogIn() {
      setUser(await app.logIn(credentials));
      setIsLoadUser(!isLoadUser)
      setIsLoadliveData(!isLoadliveData)
      }
      userLogIn();
  // I dont know why, but when i put empty dependency [], Date Range picking doesn't work
  }, );

  useEffect(() => {
    async function fetchData() {
        try {
            const dataLoaded = await user.functions.getHistDataByField(selectedSecurityID, "Close", "day", 1);
            const dataArrayTemp = dataLoaded.map((d) => {
                //const date = parse(d._id.time_to, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx', new Date());
                const dateString = d._id.time_to.toISOString()
                const shortDate = `${dateString.substring(5, 7)}/${dateString.substring(8, 10)}/${dateString.substring(0, 4)}`
                const date = new Date(shortDate)
                const price = Number(d.close.toFixed(2));
                return [date.getTime(), price];
            });
            setData(dataArrayTemp);
        } catch (error) {
            console.error(error);
        }
    }
      fetchData();
  }, [isLoadUser]);



  // Update the chart data whenever the 'data' state changes
  useEffect(() => {
    const chart = Highcharts.charts[0];
    if (chart) {
      chart.series[0].setData(data, true, true);
    }
  }, [data]);

  return (
    <HighchartsReact id={props.id} highcharts={Highcharts} constructorType={'stockChart'} options={options} />
  );
};

export default StockChartWithCustomGUI;