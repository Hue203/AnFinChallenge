import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chart, setChart] = useState({
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      colors: ["gray"],
      xaxis: {
        name: "Dates",
        type: "datetime",
        title: {
          text: "Dates",
        },
        categories: [
          "2021-06-22",
          "2021-06-23",
          "2021-06-24",
          "2021-06-25",
          "2021-06-26",
          "2021-06-27",
          "2021-06-28",
          "2021-06-29",
          "2021-06-30",
          "2021-07-01",
          "2021-07-02",
          "2021-07-03",
        ],
        // labels: {
        //   formatter: function (value, timestamp, opts) {
        //     return opts.dateFormatter(new Date(timestamp), "dd MMM");
        //   },
        // },
      },
      yaxis: {
        min: 0,
        title: {
          text: "Price",
        },
      },

      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 0,
            fillColor: "blue",
            size: 5,
            strokeColor: "#FFF",
          },
          {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "blue",
            size: 5,
            strokeColor: "#FFF",
          },
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "blue",
            size: 5,
            strokeColor: "#FFF",
          },
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "blue",
            size: 5,
            strokeColor: "#FFF",
          },
          {
            seriesIndex: 0,
            dataPointIndex: 9,
            fillColor: "blue",
            strokeColor: "#FFF",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 1,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 5,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 10,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 5,
          },
        ],
        size: 0.001,
        fillColor: "grey",
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
    },

    series: [
      {
        name: "Price",
        data: [9, 5, 7, 2, 8, 10, 4, 3, 6, 9, 5, 7],
      },
    ],
  });

  return (
    <div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="line"
        width="700"
      />
    </div>
  );
};

export default LineChart;
