import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import axios from "axios";
const Search = () => {
  const [query, setQuery] = useState("san francisco");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
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
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const getSearchData = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    console.log("zmieniono");
  };
  useEffect(async () => {
    await axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log(data);
  }, [query]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Localization"
          onChange={updateSearchTerm}
        ></input>
        <button onClick={getSearchData}>Search...</button>
      </form>
      {data ? <Weather data={data}></Weather> : ""}
    </div>
  );
};

export default Search;
