import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Input from "./Input";
import Weather from "./Weather";
import Forecast from "./Forecast";
import TempChart from "./TempChart";
import { ErrorInfo } from "./ErrorInfo";
import BarChart from "./BarChart";

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
    grid-area: Left;
    height: 100%;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [hourlyTemp, setHourlyTemp] = useState("");
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
        console.log(error);
        setIsError(true);
      }
    };
    fetchData();
  }, [query]);

  const getForecastData = async (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
      )
      .then((response) => {
        setForecastData(response.data.daily);
        setHourlyTemp(response.data.hourly);
        setIsError(false);
      })
      .catch((errors) => {
        setIsError(true);
      });
  };

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
      {!isError && data && forecastData.length ? (
        <WeatherContainer>
          <TempChart className="left-side" tempData={hourlyTemp} />
          <Weather data={data} />
          <Forecast data={forecastData} className="forecast" />
          <BarChart className="chart-bottom" forecastData={forecastData} />
        </WeatherContainer>
      ) : (
        <ErrorInfo />
      )}
    </div>
  );
};

export default Search;
