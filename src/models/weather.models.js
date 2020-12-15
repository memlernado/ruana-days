class WeatherModel {
  constructor({ dt, temp, feels_like, wind_speed, humidity }) {
    this.dt = dt * 1000;
    this.temp = temp;
    this.feels_like = feels_like;
    this.wind_speed = wind_speed;
    this.humidity = humidity;
  }
  static create(m) {
    return new WeatherModel(m);
  }
}
export default WeatherModel;
