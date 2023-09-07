import "./App.css";
import WeatherForm from "./WeatherForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherForm />
        <p>
          Coded by Giohanna. OpenSource 👉
          <a href="https://github.com/mariagiohanna/weather-app-react">
            Tap here
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
