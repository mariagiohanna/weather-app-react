import React, { useState } from "react";
import axios from "axios";

export default function WeatherData(props) {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [description, setDescription] = useState(null);

  function showData(response) {
    setTemperature(response.data.temperature.current);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
    setDescription(response.data.condition.description);
  }
  if (temperature) {
    return (
      <ul>
        <li>
          The temperature in {props.city} is {Math.round(temperature)}°C
        </li>
        <li>The humidity is {humidity}%</li>
        <li>The wind speed is {wind} km/h</li>
        <li>
          <img src={icon} alt="" />
        </li>
        <li>{description}</li>
      </ul>
    );
  } else {
    let key = "1a0183e48otc14e8f23dafc91d33dbab";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}&units=metric`;
    axios.get(url).then(showData);
    return <h4>Loading data from {props.city}..</h4>;
  }
}
