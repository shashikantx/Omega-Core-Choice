/**
 * Token -
 */
export interface Token {

  /* ************************************ Instance Fields ************************************ */
  id: string;
  /* compound key = deviceId + ENV.SEPARATOR + appId (ionic app id) */
  fcm: string;
  apns: string;
  active: boolean;
  os: string;
  modified: Date;
  created: Date;

  token: string;

}
