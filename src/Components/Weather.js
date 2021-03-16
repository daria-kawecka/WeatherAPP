import React from "react";

import WeatherCardStyled from "../shared/WeatherCardStyled";

import { days } from "./date/days";
import { months } from "./date/months";
import convert from "./date/TimeConverter";
import getIcon from "./functions/getIcon";
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
    <WeatherCardStyled className="weather">
      <Card>
        <Card.Body>
          <Card.Title>{TodayWeather.city}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {TodayWeather.date}
          </Card.Subtitle>
          <Card.Text>
            <IconContext.Provider
              value={{
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
                className: "icon-main",
              }}
            >
              {TodayWeather.icon}
            </IconContext.Provider>
            {TodayWeather.description}
          </Card.Text>
          <Card.Text style={{ display: "inline" }}>
            <IconContext.Provider value={{ className: "icons" }}>
              <FiSunrise />
            </IconContext.Provider>
            {TodayWeather.sunrise}
          </Card.Text>
          <Card.Text style={{ display: "inline" }}>
            <IconContext.Provider value={{ className: "icons" }}>
              <FiSunset />
            </IconContext.Provider>
            {TodayWeather.sunset}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <FaThermometerEmpty />
            </IconContext.Provider>
            Min temp: {TodayWeather.tempMin}
          </Card.Text>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <FaThermometerFull />
            </IconContext.Provider>
            Max temp: {TodayWeather.tempMax}
          </Card.Text>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <BsFillCloudFill />
            </IconContext.Provider>
            Clouds: {TodayWeather.clouds}%
          </Card.Text>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <WiHumidity />
            </IconContext.Provider>
            Humidity: {TodayWeather.humidity}%
          </Card.Text>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <WiBarometer />
              Pressure: {TodayWeather.pressure}hPa
            </IconContext.Provider>
          </Card.Text>
          <Card.Text>
            <IconContext.Provider value={{ className: "icons-aside" }}>
              <WiStrongWind />
            </IconContext.Provider>
            Wind: {TodayWeather.wind}m/s
          </Card.Text>
        </Card.Body>
      </Card>
    </WeatherCardStyled>
  );
};

export default Weather;
