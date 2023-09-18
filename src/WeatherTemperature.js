import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convert2Fa(event) {
    event.preventDefault();
    setUnit("fahren");
  }
  function convert2C(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit mb-auto">
          °C |{" "}
          <button onClick={convert2Fa} className="DegreesConverter">
            °F
          </button>
        </span>
      </div>
    );
  } else {
    let fahren = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahren)}</span>
        <span className="unit mb-auto">
          °F |{" "}
          <button onClick={convert2C} className="DegreesConverter">
            °C
          </button>
        </span>
      </div>
    );
  }
}
