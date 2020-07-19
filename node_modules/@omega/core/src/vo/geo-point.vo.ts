export class GeoPointVo {
  public _lat: number;
  public _long: number;

  constructor(latitude: number, longitude: number) {
    this._lat = latitude;
    this._long = longitude;
  }
}
