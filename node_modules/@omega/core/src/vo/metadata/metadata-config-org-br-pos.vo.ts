export interface MetadataConfigOrgBrPosVo {
  tableCount: number;
  tableNameList: Array<string>;

  roomCount: number;
  roomNameList: Array<string>;

  printStatus: boolean;
  timeUtcOffset: number; // TODO remove deprecated
  zone: string; // moment timezone string of the store
}
