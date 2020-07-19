import { MetadataConfigOrgBrPosVo } from './metadata-config-org-br-pos.vo';
import { DashboardVo } from "../pos";
export interface MetadataOrgBrVo {
    id: string;
    modified: Date;
    modifiedCategory: Date;
    modifiedItem: Date;
    modifiedOfflineOrder: Date;
    modifiedOnlineOrder: Date;
    modifiedHardware: Date;
    configPos: MetadataConfigOrgBrPosVo;
    dashboard: {
        string: DashboardVo;
    };
}
