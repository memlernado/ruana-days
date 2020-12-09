import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
import LocationService from "./services/location";
function App() {
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    WeatherService.getCurrentWeather().then((current) => {
      setTemp(current.temp);
      setCityName(current.cityName);
      setCountry(current.country);
    });
  }, []);

  return (
    <div className="App">
      <h1>
        Temperatura en {cityName}:{temp}
      </h1>
      <h1>{console.log(LocationService.getCurrentPosition())}</h1>
    </div>
  );
}

export default App;
