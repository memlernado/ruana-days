import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
import LocationService from "./services/location";

function App() {
  const [dailyTemp, setDailyTemp] = useState();
  const [temp, setTemp] = useState(0);
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [city, setCity] = useState("0");
  const [country, setCountry] = useState("");
  const [places, setPlaces] = useState([0]);

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
  useEffect(() => {
    if (currentCoordinates) {
      LocationService.getLocationDetails(currentCoordinates).then(
        (locationDetails) => {
          setCity(locationDetails.city);
          setCountry(locationDetails.country);
        }
      );
    }
  }, [currentCoordinates]);
  useEffect(() => {
    LocationService.getCoordinatesForSearch("polonia").then((places) => {
      setPlaces(places);
    });
  }, []);

  return (
    <div className="App">
      <h1>
        {city}/{country}
      </h1>
      <h2>Temperatura Hoy: {temp}°</h2>
      <h2>Temperatura Mañana: {dailyTemp}°</h2>
      <h3>Prueba:{places[0].cityName}</h3>
    </div>
  );
}

export default App;
