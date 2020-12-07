class WeatherService {
  async getCurrentWeather() {
    const apiKey = process.env.REACT_APP_MY_API_KEY;
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=52.1802854&lon=21.020612&appid=" +
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
