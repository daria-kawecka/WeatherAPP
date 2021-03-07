import React, { useEffect, useState } from "react";
import axios from "axios";

import { Input } from "./Input";
import Weather from "./Weather";

const Search = () => {
  const [query, setQuery] = useState("san francisco");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [isError, setIsError] = useState(false);

  //api options:
  const key = process.env.REACT_APP_KEY;
  const host = process.env.REACT_APP_HOST;
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: query,
      units: "metric",
      cnt: "10",
    },
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
    },
  };
  const getWeatherData = async () => {
    await axios
      .request(options)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
      });
  };
  useEffect(() => {
    getWeatherData();
  }, [options.params.q]);

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const getSearchData = (e) => {
    setQuery(searchTerm);
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
