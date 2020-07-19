/**
 * Device
 */
export interface Device {

  /* ************************************ Instance Fields ************************************ */
  id: number;// = '0'; // must be string device.uuid deviceId like 52548590-9962-4277-9C37-95C8A8A27B7C or c6da166c0838ef8e
  uid: number; // server generated Id //need to store in SQLite | use - VAL.claim.uid
  type: string;// = 'PH';
  os: string;// = MobilePlatform[MobilePlatform.ANDROID];
  osVer: string;
  appId: string; // fixed size like ionic provide to each app settings.get('app_id') -OR- me.parakh.edu
  build: number; // verCode appBuild: 18; VersionCode(Android) Build(iOS) //version number of the current app running
  version: string; // verName appVersion: 0.0.1; VersionName(Android) Version(iOS) //build identifier of the app

}
