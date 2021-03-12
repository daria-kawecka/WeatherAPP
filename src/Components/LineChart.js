import React, { useState, useEffect } from "react";

import unixConverter from "./date/UnixConverter";
import { Line } from "react-chartjs-2";

const LineChart = ({ forecastData }) => {
  const [tempForecast, setTempForecast] = useState([]);
  const [dateForecast, setDateForecast] = useState([]);

  const getTemperatures = (time) => {
    setTempForecast(
      forecastData.map((element) => {
        return Math.floor(element.temp[time]);
      })
    );
  };
  const getDate = () => {
    setDateForecast(
      forecastData.map((element) => {
        return unixConverter(element.dt);
      })
    );
  };
  useEffect(() => {
    getTemperatures("day");
    getDate();
  }, [forecastData]);

  const data = {
    labels: dateForecast,
    datasets: [
      {
        label: "temperature",
        data: tempForecast,
        fill: false,
        backgroundColor: "rgb(15, 18, 161)",
        borderColor: "rgba(12, 61, 221, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  console.log("halo", dateForecast.length, forecastData);
  return (
    <>
      <div className="Container">
        {dateForecast.length ? <Line data={data} options={options} /> : ""}
      </div>
    </>
  );
};

export default LineChart;
