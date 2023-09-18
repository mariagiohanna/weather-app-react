import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  const [forecast, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function search() {
    const key = "1a0183e48otc14e8f23dafc91d33dbab";
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (loaded) {
    return (
      <div
        className="WeatherForecast container"
        style={{ backgroundColor: props.forecastbackground }}
      >
        <div className="row">
          {forecast.slice(1, 6).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay forecast={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    search();
  }
}
