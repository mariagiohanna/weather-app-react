import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState({ ready: false });

  function showData(response) {
    console.log(response.data);
    setweatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city,
      ready: true,
    });
  }
  function search() {
    const key = "1a0183e48otc14e8f23dafc91d33dbab";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(showData);
    return <h4>Loading data from {props.defaultCity}..</h4>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 d-flex">
              <input
                type="search"
                placeholder="Type a city name"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
