import React, { useEffect, useState } from "react";
import axios from "axios";

import ResultContainerStyled from "../shared/ResultContainerStyled";

import Input from "./Input";
import Weather from "./Weather";
import Forecast from "./Forecast";
import TempChart from "./charts/TempChart";
import { ErrorInfo } from "./ErrorInfo";
import BarChart from "./charts/BarChart";

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
        <ResultContainerStyled>
          <TempChart className="lineChart" tempData={hourlyTemp} />
          <Weather className="weather" data={data} />
          <Forecast
            className="forecast"
            data={forecastData}
            className="forecast"
          />
          <BarChart className="barChart" forecastData={forecastData} />
        </ResultContainerStyled>
      ) : (
        <ErrorInfo />
      )}
    </div>
  );
};

export default Search;
