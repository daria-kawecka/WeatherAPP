import React from "react";
import unixConverter from "./date/UnixConverter";

import getIcon from "./functions/getIcon";
import DegToDir from "./functions/degToDir";

import ListGroup from "react-bootstrap/ListGroup";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { BsCompass } from "react-icons/bs";

const StyledListItem = styled(ListGroup.Item)`
  p {
    margin-bottom: 0.3rem;
  }
  .icon-main {
    font-size: 2.9rem;
  }
  .icons {
    font-size: 2rem;
    height: 90%;
  }
  .icon-compass {
    font-size: 1.2rem;
    height: 90%;
    margin-right: 5px;
  }
  .item__date {
    font-size: 0.7rem;
    text-align: left;
    margin-bottom: 1px;
  }
  .item__icon {
    width: 100%;
    margin-bottom: 0px;
  }
  .temperature {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--day {
      width: 10%;
      margin-bottom: 0.2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
`;

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
    <StyledListItem>
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
    </StyledListItem>
  );
};

export default ForecastElement;
