import React, { useState } from "react";
import WeatherData from "./WeatherData";

export default function WeatherForm(props) {
  const [city, setCity] = useState(null);
  const [searching, setSearching] = useState(false);
  function Search4City(event) {
    event.preventDefault();
    setSearching(true);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (city && searching) {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Type a city name"
            onChange={updateCity}
          />
          <input type="button" value="Search" onClick={Search4City} />
        </form>
        <WeatherData city={city} />
      </div>
    );
  } else {
    return (
      <form>
        <input
          type="text"
          placeholder="Type a city name"
          onChange={updateCity}
        />
        <input type="button" value="Search" onClick={Search4City} />
      </form>
    );
  }
}
