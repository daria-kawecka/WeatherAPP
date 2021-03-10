import React from "react";

import unixConverter from "./date/UnixConverter";
import getIcon from "./getIcon";
import DegToDir from "./degToDir";

import ListGroup from "react-bootstrap/ListGroup";

const ForecastElement = ({ data }) => {
  DegToDir(data.wind_deg);
  const ForecastData = {
    date: unixConverter(data.dt),
    icon: getIcon(data.weather[0].icon),
    temp_day: Math.floor(data.temp.day) + "ºC",
    temp_night: Math.floor(data.temp.night) + "ºC",
    pressure: data.pressure + "hPa",
    humidity: data.humidity + "%",
    wind: data.wind_speed + "m/s",
    wind_dir: DegToDir(data.wind_deg),
  };
  return (
    <ListGroup.Item>
      <p className="item__date">{ForecastData.date}</p>
      <p className="item__icon">{ForecastData.icon}</p>
      <p className="item__temperature">
        {ForecastData.temp_day}/{ForecastData.temp_night}
      </p>
      <p className="item__icon">{ForecastData.pressure}</p>
      <p className="item__humidity">{ForecastData.humidity}</p>
      <p className="item__wind">{ForecastData.wind}</p>
      <p className="item__windDir">{ForecastData.wind_dir}</p>
    </ListGroup.Item>
  );
};

export default ForecastElement;
