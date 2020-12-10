import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
//import LocationService from "./services/location";
function App() {
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [firstDay, setFirstDay] = useState([]);
  const [secondDay, setSecondDay] = useState([]);
  const [thirdDay, setThirdDay] = useState([]);
  const [fourthDay, setFourthDay] = useState([]);
  const [fifthDay, setFifthDay] = useState([]);
  const [sixthDay, setSixthDay] = useState([]);
  const [seventhDay, setSeventhDay] = useState([]);

  useEffect(() => {
    WeatherService.getCurrentWeather().then((current) => {
      setTemp(current.temp);
      setCityName(current.cityName);
      setCountry(current.country);
    });
  }, []);
  useEffect(() => {
    WeatherService.getThisWeekWeather().then((daily) => {
      setFirstDay(daily.firstDay);
      setSecondDay(daily.secondDay);
      setThirdDay(daily.thirdDay);
      setFourthDay(daily.fourthDay);
      setFifthDay(daily.fifthDay);
      setSixthDay(daily.sixthDay);
      setSeventhDay(daily.seventhDay);
    });
  });
  return (
    <div className="App">
      <h1>
        Temperatura en {cityName}:{temp}
        {country}
        {console.log(firstDay)}
      </h1>
    </div>
  );
}

export default App;
