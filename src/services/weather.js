import weatherModel from "../models/weather.models";
const apiKey = process.env.REACT_APP_MY_API_KEY;
class WeatherService {
  async getCurrentWeather(latlon) {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latlon.lat +
        "&lon=" +
        latlon.lon +
        "&exclude=daily,minutely,hourly,alerts&units=metric&appid=" +
        apiKey
    );
    const { current } = await response.json();
    const currentDay = weatherModel.create(current);
    return currentDay;
  }
  async getThisWeekWeather(latlon) {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latlon.lat +
        "&lon=" +
        latlon.lon +
        "&exclude=current,minutely,hourly,alerts&units=metric&appid=" +
        apiKey
    );
    const { daily } = await response.json();
    const days = daily.slice(1, -1).map((day) => {
      return weatherModel.create(day);
    });
    return days;
  }
}
export default new WeatherService();
