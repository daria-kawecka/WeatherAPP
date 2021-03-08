import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Input from "./Input";
import Weather from "./Weather";
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
  const [isError, setIsError] = useState(false);

  //api options:
  const key = process.env.REACT_APP_KEY;
  const weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`;

  const getWeatherData = async () => {
    await axios
      .get(weather_URL)
      .then((response) => {
        setData(response.data);
        setIsError(false);
      })
      .catch((error) => {
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
    console.log(e);
    if (searchTerm) {
      setQuery(searchTerm);
    } else
      setQuery((prevState) => {
        return prevState;
      });
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
        </WeatherContainer>
      ) : (
        <ErrorInfo />
      )}
    </div>
  );
};

export default Search;
