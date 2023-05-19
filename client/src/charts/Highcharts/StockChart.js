import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import io from "socket.io-client";

const StockChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 600,
    },
    title: {
      text: "Stock Chart with Custom GUI",
    },
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],
    tooltip: {
      split: true,
    },
    series: [
      {
        type: "candlestick",
        name: "AAPL Stock Price",
        data: [],
        id: "aapl",
      },
      {
        type: "column",
        name: "Volume",
        data: [],
        yAxis: 1,
        id: "volume",
      },
    ],
  });

  useEffect(() => {
    const socket = io("https://ws.finnhub.io");
    socket.on("connect", () => {
      socket.emit("subscribe", {
        symbol: "AAPL",
      });
    });
    socket.on("trade", (tradeData) => {
      const { s, p, t } = tradeData.data[0];
      const newData = [
        t,
        p,
        p * 1.1,
        p * 0.9,
        p * 1.05,
        Math.floor(Math.random() * 10000),
      ];
      const chart = Highcharts.charts[0];
      const series = chart.get("aapl");
      const volumeSeries = chart.get("volume");
      const lastData = series.data[series.data.length - 1];
      const lastVolumeData = volumeSeries.data[volumeSeries.data.length - 1];
      const shift = series.data.length > 60;
      series.addPoint(newData, true, shift);
      volumeSeries.addPoint([t, Math.floor(Math.random() * 10000)], true, shift);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default StockChart;
