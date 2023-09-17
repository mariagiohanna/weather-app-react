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
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit mb-auto">
          °C |{" "}
          <a href="#" onClick={convert2Fa}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahren = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahren)}</span>
        <span className="unit mb-auto">
          °F |{" "}
          <a href="#" onClick={convert2C}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
