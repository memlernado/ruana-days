class LocationService {
  getCurrentPosition() {
    if ("geolocation" in navigator) {
      console.log("Available");
      const options = {
        enableHighAccuracy: true,
      };

      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      );
    } else {
      console.log("Not Available");
      return { coords: { latitude: -52.696361, longitude: -59.211873 } };
      //throw new Error("Error Code ");
    }
  }
}
export default new LocationService();
