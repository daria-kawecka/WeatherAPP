import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Input from "./Input";
import Weather from "./Weather";
import Forecast from "./Forecast";
import { ErrorInfo } from "./ErrorInfo";

const WeatherContainer = styled.div`
  width: 50vw;
  height: 50vh;
  position: relative;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 20%);
`;

const Search = () => {
  const [query, setQuery] = useState("san francisco");
  const [coords, setCoord] = useState({ lat: "33.4418", lon: "94.0377" });
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [isError, setIsError] = useState(false);

  //api options:
  const key = process.env.REACT_APP_KEY;
  const weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`;
  const forecast_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&units=metric&appid=${key}`;

  const requestOne = axios.get(weather_URL);
  const requestTwo = axios.get(forecast_URL);

  const getWeatherData = async () => {
    await axios
      .get(weather_URL)
      .then((response) => {
        setData(response.data);
        setCoord({
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        });

        setIsError(false);
      })
      .catch((errors) => {
        setIsError(true);
      });
    await getForecastData();
  };

  const getForecastData = async () => {
    console.log("wywołanie");
    await axios
      .get(forecast_URL)
      .then((response) => {
        setForecastData(response.data.daily);
        setIsError(false);
      })
      .catch((errors) => {
        setIsError(true);
      });
  };
  useEffect(async () => {
    getWeatherData();
  }, [query]);

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const getSearchData = (e) => {
    if (searchTerm) {
      setQuery(searchTerm);
    }
  };
  const getWithEnter = (e) => {
    if (e.key === "Enter") {
      getSearchData();
    }
  };

  return (
    <div>
      <Input
        onChange={updateSearchTerm}
        onClick={getSearchData}
        onEnter={getWithEnter}
      ></Input>
      {!isError && data ? (
        <WeatherContainer>
          <Weather data={data} />
          <Forecast data={forecastData} />
        </WeatherContainer>
      ) : (
        <ErrorInfo />
      )}
    </div>
  );
};

export default Search;
