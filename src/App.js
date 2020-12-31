import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherService from "./services/weather.js";
import LocationService from "./services/location";
import LocationLabel from "./components/locationLabel";
import Day from "./components/day";

function App() {
  const weekDays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [weekDay, setWeekDay] = useState();
  const [dailyWeekDay, setDailyWeekDay] = useState([]);
  const [month, setMonth] = useState();
  const [dailyMonth, setDailyMonth] = useState([]);
  const [day, setDay] = useState();
  const [dailyDay, setDailyDay] = useState([]);
  const [dayCurrentIcon, setDayCurrentIcon] = useState("");
  const [dailyIcon, setDailyIcon] = useState([]);
  const [temp, setTemp] = useState(0);
  const [dailyTemp, setDailyTemp] = useState([]);
  const [currentCoordinates, setCurrentCoordinates] = useState("");
  const [city, setCity] = useState("0");
  const [country, setCountry] = useState("");
  //const [places, setPlaces] = useState([0]);

  useEffect(() => {
    LocationService.getCurrentPosition().then((coords) => {
      setCurrentCoordinates(coords);
    });
  }, []);
  useEffect(() => {
    if (currentCoordinates) {
      WeatherService.getCurrentWeather(currentCoordinates).then((current) => {
        setTemp(current.temp);
        setWeekDay(current.numberDay);
        setDay(current.day);
        setMonth(current.month);
        setDayCurrentIcon(current.icon);
      });
    }
  }, [currentCoordinates]);
  useEffect(() => {
    if (currentCoordinates) {
      WeatherService.getThisWeekWeather(currentCoordinates).then((days) => {
        setDailyTemp(
          days.map((day) => {
            return day.temp;
          })
        );

        setDailyWeekDay(
          days.map((day) => {
            return day.numberDay;
          })
        );
        setDailyDay(
          days.map((day) => {
            return day.day;
          })
        );
        setDailyMonth(
          days.map((day) => {
            return day.month;
          })
        );
        setDailyIcon(
          days.map((day) => {
            return day.icon;
          })
        );
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
  // useEffect(() => {
  //   LocationService.getCoordinatesForSearch("polonia").then((places) => {
  //     setPlaces(places);
  //   });
  // }, []);

  return (
    <div className="App">
      <div className="cityLabel">
        <LocationLabel city={city} country={country} />
      </div>
      <div className="days">
        <div className="day">
          <Day
            //temp={temp}
            //ruana="ruana"
            icon={dayCurrentIcon}
            weekDay={weekDays[weekDay]}
            day={day}
            month={months[month]}
          />
        </div>

        {dailyDay.map((d, i) => {
          return (
            <div className="day">
              <Day
                //temp={dailyTemp}
                //ruana="ruana"
                icon={dailyIcon[i]}
                weekDay={weekDays[dailyWeekDay[i]]}
                day={dailyDay[i]}
                month={months[dailyMonth[i]]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
