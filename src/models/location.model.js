class LocationModel {
  constructor({ city, country }) {
    this.city = city;
    this.country = country;
  }
  static create(m) {
    return new LocationModel(m);
  }
}
export default LocationModel;
