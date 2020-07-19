export interface SettingCoreVo {
  id: string;
  theme: string;
  lang: string;
  link: string;
  build: number;
  buildLatest: number;
  syncStatus: string;
  setup: string; // setup status  InitSetup.INIT, InitSetup.IN_PROGRESS, InitSetup.REQ_SENT, InitSetup.REJECT, InitSetup.DONE
  doneSetup: boolean;
  notification: boolean;
}
