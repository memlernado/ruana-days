import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
function App() {
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  useEffect(() => {
    WeatherService.getCurrentWeather().then((current) => {
      setTemp(current.temp);
      setCityName(current.cityName);
    });
  }, []);

  return (
    <div className="App">
      <h1>
        Temperatura en {cityName}:{temp}{" "}
      </h1>
    </div>
  );
}

export default App;
