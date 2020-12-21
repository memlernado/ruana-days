import CoordinatesModel from "../models/coordinates.model";
import LocationModel from "../models/location.model";
import CityModel from "../models/city.model";
const apiKey = process.env.REACT_APP_MY_API_KEY_LOCATION;
class LocationService {
  getCurrentPosition() {
    if ("geolocation" in navigator) {
      console.log("Available");
      const options = {
        enableHighAccuracy: true,
      };

      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coordinates = new CoordinatesModel(
              position.coords.latitude,
              position.coords.longitude
            );
            

            resolve(coordinates);
          },
          reject,
          options
        )
      );
    } else {
      console.log("Not Available");
      return { coords: { latitude: -52.696361, longitude: -59.211873 } };
      //throw new Error("Error Code ");
    }
  }
  async getLocationDetails(latlon) {
    const response = await fetch(
      "https://us1.locationiq.com/v1/reverse.php?key=" +
        apiKey +
        "&lat=" +
        latlon.lat +
        "&lon=" +
        latlon.lon +
        "&format=json"
    );
    const { address } = await response.json();
    const locationDetails = LocationModel.create(address);
    return locationDetails;
  }
  async getCoordinatesForSearch(searchString) {
    const response = await fetch(
      "https://us1.locationiq.com/v1/search.php?key=" +
        apiKey +
        "&q=" +
        searchString +
        "&format=json"
    );
    const options = await response.json();
    let places = [];
    if (options.length > 1) {
      for (let option of options) {
        if (option.class === "place") {
          places.push(new CityModel(option.display_name, CoordinatesModel));
        }
      }
    }
    return places;
  }
}
export default new LocationService();
