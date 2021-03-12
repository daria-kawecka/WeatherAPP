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

  const getTemperatures = () => {
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
  const getDate = () => {
    setDateForecast(
      forecastData.map((element) => {
        return unixConverter(element.dt);
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
        data: tempForecast.day[0],
        fill: false,
        backgroundColor: "#ffd06e",
        borderColor: "rgba(255, 209, 110, 0.3)",
      },
      {
        label: "Night Temperature",
        data: tempForecast.night[0],
        fill: false,
        backgroundColor: "#222d40",
        borderColor: "rgba(34, 45, 64, 0.3)",
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

  console.log("halo", tempForecast);
  return (
    <>
      <div className="Container">
        {tempForecast.day[0].length && dateForecast.length ? (
          <Line data={data} options={options} />
        ) : (
          ">Loading<"
        )}
      </div>
    </>
  );
};

export default LineChart;
