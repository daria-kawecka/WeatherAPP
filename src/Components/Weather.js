import React, { useState, useEffect } from "react";

const Weather = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nocvember",
    "December",
  ];
  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  }`;
  const sunset = new Date(data.sys.sunset * 1000)
    .toLocaleTimeString()
    .slice(0, 5);
  const sunrise = new Date(data.sys.sunrise * 1000)
    .toLocaleTimeString()
    .slice(0, 5);

  const TodayWeather = {
    city: data.name,
    clouds: data.clouds.all,
    feeling: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: data.weather[0].description,
    icon: data.weather[0].icon,
    wind: data.wind.speed,
    date,
    sunrise,
    sunset,
  };
  return (
    <div>
      <p>Tutej pogoda</p>
    </div>
  );
};

export default Weather;
