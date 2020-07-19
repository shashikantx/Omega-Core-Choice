import {MetadataConfigOrgBrPosVo} from './metadata-config-org-br-pos.vo';
import {DashboardVo} from "../pos";

export interface MetadataOrgBrVo {
  id: string;
  modified: Date; // server time Store last modified
  modifiedCategory: Date; // server time Category last modified
  modifiedItem: Date; // server time Item last modified

  modifiedOfflineOrder: Date // server time Offline or in store Order last modified
  modifiedOnlineOrder: Date // server time Offline or in store Order last modified
  modifiedHardware: Date;

  configPos: MetadataConfigOrgBrPosVo;

  dashboard: {string: DashboardVo} // TODO replace with SaleSummaryVo and add in sub collection if require
}
