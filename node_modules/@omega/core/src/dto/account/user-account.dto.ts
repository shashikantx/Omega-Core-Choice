import {OrgVo, UserVo} from '../../vo';

export interface UserAccountDto {
  acType: string; //StripeCustomerType OrgType
  org: OrgVo;
  user: UserVo;
}
