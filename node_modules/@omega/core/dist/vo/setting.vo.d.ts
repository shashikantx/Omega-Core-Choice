import { SettingCoreVo } from './setting-core.vo';
import { OrgBrVo, OrgVo } from './account';
import { AclDetailDto } from '../dto/account/acl-detail.dto';
export interface SettingVo extends SettingCoreVo {
    activeRole: string;
    activeOrg: OrgVo;
    activeBranch: OrgBrVo;
    activeAcl: AclDetailDto;
}
