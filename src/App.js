import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
import LocationService from "./services/location";
function App() {
  const [dailyTemp, setDailyTemp] = useState();
  const [temp, setTemp] = useState(0);
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  //const [date, setDate] = useState("");
  useEffect(() => {
    LocationService.getCurrentPosition().then((coords) => {
      setCurrentCoordinates(coords);
    });
  }, []);
  useEffect(() => {
    if (currentCoordinates) {
      WeatherService.getCurrentWeather(currentCoordinates).then((current) => {
        setTemp(current.temp);
      });
    }
  }, [currentCoordinates]);
  useEffect(() => {
    if (currentCoordinates) {
      WeatherService.getThisWeekWeather(currentCoordinates).then((day) => {
        setDailyTemp(day[1][0].temp.day);
        //setDate(new Date(day[1][0].dt));
      });
    }
  }, [currentCoordinates]);

  return (
    <div className="App">
      <h2>
        Temperatura Hoy {temp}
        Temperatura Manana{dailyTemp}
      </h2>
    </div>
  );
}

export default App;
