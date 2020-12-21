class LocationModel {
  constructor({ city, country }) {
    this.city = city;
    this.country = country;
  }
  static create(data) {
    return new LocationModel(data);
  }
}
export default LocationModel;
