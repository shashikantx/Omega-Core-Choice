import { OrgVo, UserVo } from '../../vo';
export interface UserAccountDto {
    acType: string;
    org: OrgVo;
    user: UserVo;
}
