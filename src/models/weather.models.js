class WeatherModel {
  constructor({ dt, temp, feels_like, wind_speed, humidity, weather }) {
    this.dt = new Date(dt * 1000);
    this.numberDay = this.dt.getDay();
    this.day = this.dt.getDate();
    this.month = this.dt.getMonth();
    this.temp = temp;
    this.feels_like = feels_like;
    this.wind_speed = wind_speed;
    this.humidity = humidity;
    this.icon = weather[0].icon;
  }
  static create(m) {
    return new WeatherModel(m);
  }
}
export default WeatherModel;
