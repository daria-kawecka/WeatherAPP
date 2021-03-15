import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 22px;
`;
const TempChart = ({ tempData }) => {
  console.log(tempData);
  //apparent temp???
  const [tempHourly, setTempHourly] = useState([]);
  const [humidityHourly, setHumidityHourly] = useState([]);
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
    let humidity = [];
    Object.entries(tempData)
      .slice(23, 48)
      .map(
        (element) => (
          tempHour.push(getHour(element[1].dt)),
          console.log(element[1].pop),
          humidity.push(element[1].pop),
          temperatures.push(Math.floor(element[1].temp))
        )
      );

    setHours(tempHour);
    setTempHourly(temperatures);
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
        label: "Humidity, %",
        data: humidityHourly ? humidityHourly : " ",
        fill: true,
        backgroundColor: "#222d40",
        borderColor: "#222d40",
        borderWidth: 5,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    tooltips: {
      // callbacks: {
      //   label: function (tooltipItem, data) {
      //     return (
      //       data["datasets"][tooltipItem.datasetIndex]["data"][
      //         tooltipItem.index
      //       ] + "ºC"
      //     );
      //   },
      // },
      // displayColors: false,
    },
    scaleBeginAtZero: true,
    scales: {
      yAxes: [
        {
          id: "A",
          type: "linear",
          position: "left",
          display: false,
        },
        {
          id: "B",
          type: "linear",
          position: "right",
          ticks: {
            max: 3,
            min: 0,
          },
          display: false,
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
