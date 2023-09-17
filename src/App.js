import "./App.css";
import Weather from "./Weather";
import GradientBackground from "./GradientBackground";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ padding: "2rem" }}>Weather App</h1>
        <Weather defaultCity="Asuncion" />
        <footer className="fixed-bottom">
          <p>
            Coded by Giohanna. Open-sourced on{" "}
            <a href="https://github.com/mariagiohanna/weather-app-react">
              GitHub
            </a>{" "}
            and hosted on Netlify
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
