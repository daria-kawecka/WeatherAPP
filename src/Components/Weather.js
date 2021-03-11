import React from "react";
import styled from "styled-components";

import { days } from "./date/days";
import { months } from "./date/months";
import convert from "./date/TimeConverter";
import getIcon from "./getIcon";
import Card from "react-bootstrap/Card";
//icons:
import { IconContext } from "react-icons";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiThermometer } from "react-icons/wi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

const MainCardStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  .card {
    width: 20rem;
    background-color: rgba(1, 24, 68, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    color: #e4e2e2;
  }

  .card-title {
    font-size: 2rem;
    border-bottom: 2px solid #e4e2e2;
  }
  .text-muted {
    font-size: 1.2rem;
    color: #c4c4c3 !important;
  }
  .card-text {
    font-size: 1.4rem;
  }
  .icons {
    font-size: 1.6rem;
  }
`;
const AsideCardStyles = styled.div`
  .card {
    height: 100%;
  }
  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }
  .card-text {
    font-size: 1.4rem;
  }
`;

const Weather = ({ data }) => {
  const currentDate = new Date();
  const date =
    months[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    ", " +
    days[currentDate.getDay()];

  const TodayWeather = {
    city: data.name,
    clouds: data.clouds.all,
    temp: Math.floor(data.main.temp) + "ºC",
    tempMin: Math.floor(data.main.temp_min) + "ºC",
    tempMax: Math.floor(data.main.temp_max) + "ºC",
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    description:
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1),
    icon: getIcon(data.weather[0].icon),
    wind: data.wind.speed,
    date,
    sunrise: convert(data.sys.sunrise, data.timezone),
    sunset: convert(data.sys.sunset, data.timezone),
  };
  return (
    <MainCardStyles>
      <Card style={{ marginRight: "10px" }}>
        <Card.Body>
          <Card.Title>{TodayWeather.city}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {TodayWeather.date}
          </Card.Subtitle>
          <Card.Text>
            <IconContext.Provider
              value={{
                style: { fontSize: "2.5rem" },
                className: "icons",
              }}
            >
              <WiThermometer />
              {TodayWeather.temp}
            </IconContext.Provider>
          </Card.Text>
          <Card.Text>
            <IconContext.Provider
              value={{
                style: { fontSize: "3rem" },
                className: "icons",
              }}
            >
              {TodayWeather.icon}
            </IconContext.Provider>
            {TodayWeather.description}
          </Card.Text>
          <Card.Text style={{ display: "inline", margin: "10px" }}>
            <IconContext.Provider value={{ className: "icons" }}>
              <FiSunrise />
            </IconContext.Provider>
            {TodayWeather.sunrise}
          </Card.Text>
          <Card.Text style={{ display: "inline", margin: "10px" }}>
            <IconContext.Provider value={{ className: "icons" }}>
              <FiSunset />
            </IconContext.Provider>
            {TodayWeather.sunset}
          </Card.Text>
        </Card.Body>
      </Card>
      <AsideCardStyles>
        <Card>
          <Card.Body>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <FaThermometerEmpty />
              </IconContext.Provider>
              Min temp: {TodayWeather.tempMin}
            </Card.Text>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <FaThermometerFull />
              </IconContext.Provider>
              Max temp: {TodayWeather.tempMax}
            </Card.Text>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <BsFillCloudFill />
              </IconContext.Provider>
              Clouds: {TodayWeather.clouds}%
            </Card.Text>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <WiHumidity />
              </IconContext.Provider>
              Humidity: {TodayWeather.humidity}%
            </Card.Text>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <WiBarometer />
                Pressure: {TodayWeather.pressure}hPa
              </IconContext.Provider>
            </Card.Text>
            <Card.Text>
              <IconContext.Provider
                value={{ style: { fontSize: "1.8rem", marginRight: "5px" } }}
              >
                <WiStrongWind />
              </IconContext.Provider>
              Wind: {TodayWeather.wind}m/s
            </Card.Text>
          </Card.Body>
        </Card>
      </AsideCardStyles>
    </MainCardStyles>
  );
};

export default Weather;
