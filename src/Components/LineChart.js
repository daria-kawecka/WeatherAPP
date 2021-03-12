import React, { useState, useEffect } from "react";

import unixConverter from "./date/UnixConverter";
import { Line } from "react-chartjs-2";

const LineChart = ({ forecastData }) => {
  const [tempForecast, setTempForecast] = useState([
    { day: [] },
    { night: [] },
  ]);
  const [tempForecastNight, setTempForecastNight] = useState([]);
  const [dateForecast, setDateForecast] = useState([]);

  const getTemperatures = async () => {
    setTempForecast({
      day: [
        forecastData.map((element) => {
          return Math.floor(element.temp.day);
        }),
      ],
      night: [
        forecastData.map((element) => {
          return Math.floor(element.temp.night);
        }),
      ],
    });
  };
  const getDate = async () => {
    setDateForecast(
      forecastData.map((element) => {
        return unixConverter(element.dt).slice(0, 7);
      })
    );
  };
  useEffect(() => {
    getTemperatures();
    getDate();
  }, [forecastData]);

  const data = {
    labels: dateForecast,
    datasets: [
      {
        label: "Day Temperature",
        data: tempForecast.day ? tempForecast.day[0] : "",
        fill: false,
        smooth: true,
        backgroundColor: "#ffd06e",
        borderColor: "rgba(255, 209, 110, 0.45)",
      },
      {
        label: "Night Temperature",
        data: tempForecast.night ? tempForecast.night[0] : "",
        fill: false,
        smooth: true,
        backgroundColor: "#222d40",
        borderColor: "rgba(34, 45, 64, 0.45)",
      },
    ],
  };

  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data["datasets"][tooltipItem.datasetIndex]["data"][
              tooltipItem.index
            ] + "ºC"
          );
        },
      },
      displayColors: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#e4e2e2",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#e4e2e2",
          },
        },
      ],
    },
    legend: {
      display: true,
      labels: {
        fontColor: "#e4e2e2",
      },
    },
    animation: {
      easing: "easeInCubic",
    },
  };

  return (
    <>
      <div className="Container">
        {tempForecast && dateForecast.length ? (
          <Line data={data} options={options} />
        ) : (
          ">Loading<"
        )}
      </div>
    </>
  );
};

export default LineChart;
