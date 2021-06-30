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
        text: "Stock Movements",
        align: "left",
      },
      colors: ["gray"],
      xaxis: {
        type: "datetime",
        categories: [
          "2021-06-22",
          "2021-06-23",
          "2021-06-24",
          "2021-06-25",
          "2021-06-26",
          "2021-06-27",
          "2021-06-28",
        ],
      },
      yaxis: {
        min: 0,
      },

      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 1,
            size: 5,

            fillColor: "red",
            strokeColor: "#FFF",
          },
          {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 4,
          },
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "red",
            strokeColor: "#FFF",
            size: 4,
          },
        ],
        colors: ["#1A73E8"],
        size: 5,
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
        name: "Stock Movements",
        data: [10, 4, 3, 6, 9, 5, 7],
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
