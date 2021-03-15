import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 22px;
`;
const TempChart = ({ tempData }) => {
  const [tempHourly, setTempHourly] = useState([]);
  const [humidityHourly, setHumidityHourly] = useState([]);
  const [popHourly, setPopHourly] = useState([]);
  const [hours, setHours] = useState([]);

  const getHour = (timestamp) => {
    const newDate = new Date(timestamp * 1000);
    //create hour from date :
    let hour = newDate.getHours() + ":00";
    return hour;
  };

  const getData = () => {
    let tempHour = [];
    let temperatures = [];
    let pop = [];
    let humidity = [];
    Object.entries(tempData)
      .slice(23, 48)
      .map(
        (element) => (
          tempHour.push(getHour(element[1].dt)),
          temperatures.push(Math.floor(element[1].temp)),
          pop.push(element[1].pop),
          humidity.push(element[1].humidity)
        )
      );

    setHours(tempHour);
    setTempHourly(temperatures);
    setPopHourly(pop);
    setHumidityHourly(humidity);
  };

  useEffect(() => {
    getData();
  }, [tempData]);

  const data = {
    labels: hours,
    datasets: [
      {
        yAxisID: "A",
        label: "Apparent temperature",
        data: tempHourly ? tempHourly : " ",
        fill: false,
        smooth: true,
        backgroundColor: "#ffd06e",
        borderColor: "rgba(255, 209, 110, 0.45)",
      },
      {
        yAxisID: "B",
        label: "Probability of precipitation",
        data: popHourly ? popHourly : " ",
        fill: true,
        backgroundColor: "#ADE0FF",
        borderColor: "#ADE0FF",
        borderWidth: 5,
        pointRadius: 0,
      },
      {
        yAxisID: "C",
        label: "Humidity, %",
        data: humidityHourly ? humidityHourly : " ",
        fill: false,
        backgroundColor: "transparent",
        borderColor: "#222d40",
        borderWidth: 1,
        pointRadius: 0,
        borderDash: [10, 10],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            "Temperature: " +
            data["datasets"][tooltipItem.datasetIndex]["data"][
              tooltipItem.index
            ] +
            "ºC"
          );
        },
      },
      displayColors: false,
    },
    scaleBeginAtZero: true,
    scales: {
      yAxes: [
        {
          id: "A",
          type: "linear",
          position: "left",
          ticks: {
            userCallback: function (value) {
              return value + "°C";
            },
            fontColor: "#e4e2e2",
            suggestedMin: Math.min.apply(Math, tempHourly) + 0.5,
            suggestedMax: Math.max.apply(Math, tempHourly) + 0.5,
          },
        },

        {
          id: "B",
          type: "linear",
          position: "right",
          ticks: {
            max: 5,
            min: 0,
          },
          gridLines: {
            display: false,
          },
          display: false,
        },
        {
          id: "C",
          type: "linear",
          position: "right",
          ticks: {
            max: 100,
            suggestedMin: 20,
            fontColor: "#e4e2e2",
            stepSize: 10,
            userCallback: function (value) {
              return value + "%";
            },
          },
          gridLines: {
            display: false,
          },
          // display: false,
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#e4e2e2",
          },
          gridLines: {
            display: false,
            zeroLineColor: "#e4e2e2",
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
    <Container className="left-side">
      {hours.length && tempHourly ? (
        <Line data={data} options={options} />
      ) : (
        ">Loading<"
      )}
    </Container>
  );
};
export default TempChart;
