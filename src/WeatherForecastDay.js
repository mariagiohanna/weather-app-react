import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherForecastDay(props) {
  let date = new Date(props.forecast.time * 1000);
  return (
    <div className="WeatherForecastDay">
      <h5>
        <FormattedDate date={date} type={"Forecast"} />
      </h5>
      <WeatherIcon
        weatherdescription={props.forecast.condition.icon}
        size={50}
      />
      <div className="ForecastTemperature">
        <span className="MinForecast">
          {Math.round(props.forecast.temperature.minimum)} °C
        </span>
        <span className="MaxForecast">
          {Math.round(props.forecast.temperature.maximum)} °C
        </span>
      </div>
    </div>
  );
}
