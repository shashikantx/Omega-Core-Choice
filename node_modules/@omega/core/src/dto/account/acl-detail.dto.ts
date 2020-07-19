import {AclVo} from '../../vo/auth';
import {OrgBrVo, OrgVo} from '../../vo/account';

export interface AclDetailDto extends AclVo {
  org: OrgVo;
  br: OrgBrVo;
}
