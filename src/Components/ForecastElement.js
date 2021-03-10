import React from "react";
import unixConverter from "./date/UnixConverter";
import getIcon from "./getIcon";
import ListGroup from "react-bootstrap/ListGroup";
import Forecast from "./Forecast";
const ForecastElement = ({ data }) => {
  console.log(data);
  const ForecastData = {
    date: unixConverter(data.dt),
    icon: getIcon(data.weather[0].icon),
    temp_day: Math.floor(data.temp.day),
    temp_night: Math.floor(data.temp.night),
    pressure: data.pressure + "hPa",
    humidity: data.humidity + "%",
    wind: data.wind_speed + "m/s",
    wind_dir: data.wind_deg,
  };
  return (
    <ListGroup.Item>
      <p>{ForecastData.date}</p>
      <p>{ForecastData.icon}</p>
      <p>
        {ForecastData.temp_day}/{ForecastData.temp_night}
      </p>
    </ListGroup.Item>
  );
};

export default ForecastElement;
