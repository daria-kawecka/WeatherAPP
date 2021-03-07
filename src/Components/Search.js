import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "./Input";
import Weather from "./Weather";

const Search = () => {
  const [query, setQuery] = useState("san francisco");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [isError, setIsError] = useState(false);

  //api options:
  const key = process.env.REACT_APP_KEY;
  const host = process.env.REACT_APP_HOST;
  const weather_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`;
  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: query,
      units: "metric",
      cnt: "10",
    },
    headers: {
      APPID: key,
      "Access-Control-Allow-Origin": "*",
    },
  };
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
  }, [options.params.q]);

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
        <Weather data={data} />
      ) : (
        <p>Something went wrong...</p>
      )}
    </div>
  );
};

export default Search;
