export interface MetadataUserVo {
  theme: string;
  lang: string;
  link: string;
  build: number;
  buildLatest: number;
  syncStatus: string;
  doneSetup: boolean;
  notification: boolean;
  activeRole: string;
  activeOrgId: string;
  activeBrId: string;

  //EDU
  activeGrdId: string; //  active Class/Grade ClsId
  activeStdId: string; //  active Student
  routeId: string;
  vehicleId: string;
}
