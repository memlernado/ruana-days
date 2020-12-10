import LocationService from "./location";
const apiKey = process.env.REACT_APP_MY_API_KEY;
class WeatherService {
  async getCurrentWeather() {
    const position = await LocationService.getCurrentPosition();
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&appid=" +
        apiKey +
        "&units=metric"
    );
    const current = await response.json();
    return {
      temp: current.main.temp,
      cityName: current.name,
      feelsLike: current.main.feels_like,
      windSpeed: current.wind.speed,
      humidity: current.main.humidity,
      country: current.sys.country,
    };
  }

  async getThisWeekWeather() {
    const position = await LocationService.getCurrentPosition();
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&exclude=current,minutely,hourly,alerts&units=metric&appid=" +
        apiKey
    );
    const { daily } = await response.json();
    return {
      currentDay: [
        daily[0].temp,
        daily[0].feels_like,
        daily[0].wind_speed,
        daily[0].humidity,
      ],
      firstDay: [
        daily[1].temp,
        daily[1].feels_like,
        daily[1].wind_speed,
        daily[1].humidity,
      ],
      secondDay: [
        daily[2].temp,
        daily[2].feels_like,
        daily[2].wind_speed,
        daily[2].humidity,
      ],
      thirdDay: [
        daily[3].temp,
        daily[3].feels_like,
        daily[3].wind_speed,
        daily[3].humidity,
      ],
      fourthDay: [
        daily[4].temp,
        daily[4].feels_like,
        daily[4].wind_speed,
        daily[4].humidity,
      ],
      fifthDay: [
        daily[5].temp,
        daily[5].feels_like,
        daily[5].wind_speed,
        daily[5].humidity,
      ],
      sixthDay: [
        daily[6].temp,
        daily[6].feels_like,
        daily[6].wind_speed,
        daily[6].humidity,
      ],
      seventhDay: [
        daily[7].temp,
        daily[7].feels_like,
        daily[7].wind_speed,
        daily[7].humidity,
      ],
    };
  }
}
export default new WeatherService();
// this.l = {
//   temp:data.current.temp,
//   timeZone:data.timezone,
//   feels_like:data.current.feels_like,
//   wind_speed:data.current.wind_speed,}

//  }
