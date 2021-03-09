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
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [isError, setIsError] = useState(false);

  //api options:
  const key = process.env.REACT_APP_KEY;
  const weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`;
  const forecast_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${key}`;

  const requestOne = axios.get(weather_URL);
  const requestTwo = axios.get(forecast_URL);

  const getWeatherData = async () => {
    await axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          setData(responses[0].data);
          setForecastData(responses[1].data);
          setIsError(false);
        })
      )
      .catch((errors) => {
        setIsError(true);
      });
  };
  useEffect(() => {
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
