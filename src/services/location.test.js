import LocationService from "./location";
import CoordinatesModel from "../models/coordinates.model";

const getCurrentPositionMock = jest.fn();

global.navigator.geolocation = { getCurrentPosition: getCurrentPositionMock };

describe("getCurrentPosition should work", () => {
  test("It should return Warsaw coordinates if geolocation suceeds", async () => {
    getCurrentPositionMock.mockImplementationOnce((success) =>
      Promise.resolve(
        success({
          coords: { latitude: 52.229675, longitude: 21.01223 },
        })
      )
    );
    const result = await LocationService.getCurrentPosition();
    const expected = new CoordinatesModel(52.229675, 21.01223);
    expect(getCurrentPositionMock).toBeCalledTimes(1);
    expect(result).toBeInstanceOf(CoordinatesModel);
    expect(result.lat).toBe(expected.lat);
    expect(result.lon).toBe(expected.lon);
  });

  test("It should return default coordinates if geolocation errors", async () => {
    getCurrentPositionMock.mockImplementationOnce((success, error) =>
      Promise.resolve(error())
    );
    const result = await LocationService.getCurrentPosition();
    const expected = new CoordinatesModel(27.1127, 109.3497);

    expect(getCurrentPositionMock).toBeCalledTimes(1);
    expect(result).toBeInstanceOf(CoordinatesModel);
    expect(result.lat).toBe(expected.lat);
    expect(result.lon).toBe(expected.lon);
  });
  test("It should return default coordinates if geolocation is not available in navigator", async () => {
    delete global.navigator.geolocation;
    const result = await LocationService.getCurrentPosition();
    const expected = new CoordinatesModel(27.1127, 109.3497);

    expect(result).toBeInstanceOf(CoordinatesModel);
    expect(result.lat).toBe(expected.lat);
    expect(result.lon).toBe(expected.lon);
  });
});
