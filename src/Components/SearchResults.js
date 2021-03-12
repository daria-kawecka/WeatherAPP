import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Input from "./Input";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Chart_Left from "./Chart_Left";
import { ErrorInfo } from "./ErrorInfo";
import LineChart from "./LineChart";

const WeatherContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  gap: 10px 20px;
  justify-items: stretch;
  grid-template-areas:
    "Left Center Forecast"
    "Left Bottom Forecast";

  .left-side {
    background-color: white;
    grid-area: Left;
  }
  .chart-bottom {
    grid-area: Bottom;
    background-color: white;
  }
  .center {
    background-color: blue;
    grid-area: Center;
  }
  .forecast {
    grid-area: Forecast;
    justify-self: stretch;
    align-self: stretch;
  }
  .container {
    width: 100%;
  }
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

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios(weather_URL);
        setData(result.data);
        getForecastData(result.data.coord.lat, result.data.coord.lon);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [query]);

  const getForecastData = async (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${key}`
      )
      .then((response) => {
        setForecastData(response.data.daily);
        setIsError(false);
      })
      .catch((errors) => {
        setIsError(true);
        console.log(errors);
      });
  };
  // useEffect(async () => {
  //   setData(getWeatherData());
  //   await getForecastData();
  // }, [query]);

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
  // console.log(data);
  return (
    <div>
      <Input
        onChange={updateSearchTerm}
        onClick={getSearchData}
        onEnter={getWithEnter}
      ></Input>
      {!isError && data && forecastData.length ? (
        <WeatherContainer>
          <Chart_Left className="left-side" />
          <Weather data={data} />
          <Forecast data={forecastData} className="forecast" />
          <LineChart className="chart-bottom" forecastData={forecastData} />
        </WeatherContainer>
      ) : (
        <ErrorInfo />
      )}
    </div>
  );
};

export default Search;
