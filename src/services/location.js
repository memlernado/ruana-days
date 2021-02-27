import CoordinatesModel from "../models/coordinates.model";
import LocationModel from "../models/location.model";
import SearchResultModel from "../models/searchResult.model.js";
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
          () => {
            const defaultCoords = new CoordinatesModel(27.1127, 109.3497);
            resolve(defaultCoords);
          },
          options
        )
      );
    } else {
      return new Promise((resolve, reject) => {
        const defaultCoords = new CoordinatesModel(27.1127, 109.3497);
        resolve(defaultCoords);
      });
      // return { coords: { latitude: -51.6965291, longitude: -58.9916665 } };
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
          places.push(
            new SearchResultModel(
              option.display_name,
              new CoordinatesModel(option.lat, option.lon)
            )
          );
        }
      }
    }
    console.log(places);
    return places;
  }
}
export default new LocationService();
