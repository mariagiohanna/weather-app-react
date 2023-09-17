import React, { useState } from "react";
import WeatherForm from "./Weather";

const GradientBackground = () => {
  const [backgroundGradient, setBackgroundGradient] = useState(
    "linear-gradient(to right, #ff416c, #ff4b2b)"
  );

  const changeGradientBackground = (state) => {
    // Cambia el gradiente lineal al hacer clic en un botón
    if (state === "cloudy" || state === "rainy") {
      setBackgroundGradient(
        "linear-gradient(to bottom left,#fda403,#e8751a,#c51350,#8a1253)"
      );
    } else {
      setBackgroundGradient(
        "linear-gradient(to bottom right, #e7eaf6, #a2a8d3,#38598b,#113f67)"
      );
    }
  };

  return (
    <div
      style={{
        background: backgroundGradient,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WeatherForm />

      <button onClick={changeGradientBackground}>Cambiar fondo</button>
    </div>
  );
};

export default GradientBackground;
