import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.weatherData.city}, {props.weatherData.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} type={"Info"} />
        </li>
        <li className="text-capitalize">{props.weatherData.description}</li>
      </ul>
      <div className="row mt-3 align-items-center">
        <div className="col-6">
          <div className="d-flex align-items-center justify-content-center">
            <WeatherIcon
              weatherdescription={props.weatherData.icon}
              size={150}
            />
            <WeatherTemperature celsius={props.weatherData.temperature} />
          </div>
        </div>
        <div className="col-6 WeatherData m-auto">
          <ul>
            <li>Feels like: {props.weatherData.feelsLike} °C</li>
            <li>Wind: {props.weatherData.wind} km/h</li>
            <li>Humidity: {props.weatherData.humidity} %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
