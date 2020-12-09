import LocationService from "./location";
class WeatherService {
  async getCurrentWeather() {
    const apiKey = process.env.REACT_APP_MY_API_KEY;
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
}
export default new WeatherService();
// this.l = {
//   temp:data.current.temp,
//   timeZone:data.timezone,
//   feels_like:data.current.feels_like,
//   wind_speed:data.current.wind_speed,}

//  }
