import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [background, setBackground] = useState("");
  const [headerColor, setHeaderColor] = useState("");
  const [forecastbackground, setforecastbackground] = useState("#F59D42");
  const [weatherData, setweatherData] = useState({ ready: false });
  const [searchbuttoncolor, setsearchbuttoncolor] = useState("btn-light");

  function ShowData(response) {
    let icon = response.data.condition.icon;
    console.log(icon);
    let newBackground = "";
    let newHeaderColor = "";
    let newforecastbackground = "";
    let opacity = 0.8;

    if (icon.includes("clear-sky")) {
      newBackground = `linear-gradient(to bottom left, rgba(253, 160, 3, ${opacity}), rgba(197, 19, 80, ${opacity}))`;
      newHeaderColor = "black";
      newforecastbackground = "#F59D42";
      setsearchbuttoncolor("btn-dark");
    } else if (
      icon.includes("shower-rain") ||
      icon.includes("rain") ||
      icon.includes("thunderstorm") ||
      icon.includes("scattered-clouds") ||
      icon.includes("broken-clouds")
    ) {
      newBackground = `linear-gradient(to bottom right, rgba(231, 234, 246, ${opacity}), rgba(17, 63, 103, ${opacity}))`;
      newHeaderColor = "black";
      newforecastbackground = "white";
      setsearchbuttoncolor("btn-light");
    } else if (icon.includes("snow") || icon.includes("mist")) {
      newBackground = `linear-gradient(to bottom right, rgba(231, 234, 246, ${opacity}), rgba(17, 63, 103, ${opacity}))`;
      newforecastbackground = "#F59D42";
      newHeaderColor = "white";
      setsearchbuttoncolor("btn-light");
    } else {
      newBackground = `linear-gradient(to bottom left, rgba(253, 160, 3, ${opacity}), rgba(197, 19, 80, ${opacity}))`;
      newHeaderColor = "black";
      newforecastbackground = "#F59D42";
      setsearchbuttoncolor("btn-dark");
    }

    setBackground(newBackground);
    setHeaderColor(newHeaderColor);
    setforecastbackground(newforecastbackground);

    setweatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city,
      country: response.data.country,
      ready: true,
    });
  }
  function search() {
    const key = "1a0183e48otc14e8f23dafc91d33dbab";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(ShowData);
    return <h4>Loading data from {props.defaultCity}..</h4>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  const weatherStyle = {
    backgroundImage: background,
    color: headerColor,
  };

  if (weatherData.ready) {
    return (
      <div className="Weather" style={weatherStyle}>
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
              <input
                type="submit"
                value="Search"
                className={"btn " + searchbuttoncolor}
              />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
        <WeatherForecast
          city={weatherData.city}
          forecastbackground={forecastbackground}
        />
      </div>
    );
  } else {
    search();
  }
}
