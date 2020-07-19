import { AclVo, UserVo, OrgVo, OrgBrVo } from "../vo";
import { Role } from "../enums";
export declare class GlobalDataDto {
    appId: string;
    acl: AclVo;
    user: UserVo;
    org: OrgVo;
    branch: OrgBrVo;
    currencySign: string;
    constructor();
    setAppId(appId: string): void;
    setOrg(org: OrgVo): void;
    setBranch(branch: OrgBrVo): void;
    getAppId(): string;
    getUserId(): string;
    getOrgId(): string | any;
    getBranchId(): string | any;
    /**
     * @return Current Role
     */
    getAclRole(): Role;
}
