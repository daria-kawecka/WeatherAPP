import React from "react";
import unixConverter from "./date/UnixConverter";

import ListItemStyled from "../shared/ListItemStyled";

import getIcon from "./functions/getIcon";
import DegToDir from "./functions/degToDir";

import { IconContext } from "react-icons";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { BsCompass } from "react-icons/bs";

const ForecastElement = ({ data }) => {
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
    <ListItemStyled>
      <p className="item__date">{ForecastData.date}</p>
      <p className="item__icon">
        <IconContext.Provider value={{ className: "icon-main" }}>
          {ForecastData.icon}
        </IconContext.Provider>
      </p>
      <div className="item__temperature temperature">
        <p className="temperature--day">{ForecastData.temp_day}</p>
        <p className="temperature--night">{ForecastData.temp_night}</p>
      </div>
      <p className="item__humidity">
        <IconContext.Provider value={{ className: "icons" }}>
          <WiHumidity />
        </IconContext.Provider>
        {ForecastData.humidity}
      </p>
      <p className="item__pressure">
        <IconContext.Provider value={{ className: "icons" }}>
          <WiBarometer />
        </IconContext.Provider>
        {ForecastData.pressure}
      </p>
      <p className="item__wind">
        <IconContext.Provider value={{ className: "icons" }}>
          <WiStrongWind />
        </IconContext.Provider>
        {ForecastData.wind}
      </p>
      <p className="item__windDir">
        <IconContext.Provider value={{ className: "icon-compass" }}>
          <BsCompass />
        </IconContext.Provider>
        {ForecastData.wind_dir}
      </p>
    </ListItemStyled>
  );
};

export default ForecastElement;
