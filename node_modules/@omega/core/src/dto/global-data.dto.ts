import {AclVo, UserVo, OrgVo, OrgBrVo} from "../vo";
import {Role} from "../enums";

export class GlobalDataDto {

  /* ************************************ Instance Fields ************************************ */
  appId: string;
  acl: AclVo;
  user: UserVo;
  org: OrgVo;
  branch: OrgBrVo;
  public currencySign = "$"; //CONSTANT.CURRENCY_CHAR_DOLLAR ;//"$"; //CONSTANT.CURRENCY_CHAR_RUPEE

  /* ************************************ Constructor ************************************ */
  constructor() {
    this.appId = "";
    this.acl = <AclVo>{};
    this.user = <UserVo>{};
    this.org = <OrgVo>{};
    this.branch = <OrgBrVo>{};
  }

  /* ************************************ Public Methods ************************************ */
  public setAppId(appId: string) {
    this.appId = appId;
  }

  public setOrg(org: OrgVo) {
    this.org = org;
    this.branch = <OrgBrVo> {};
  }

  public setBranch(branch: OrgBrVo) {
    this.branch = branch;
  }

  public getAppId(): string {
    return this.appId;
  }

  public getUserId(): string {
    if (null != this.user) {
      return this.user.id;
    }
    return '0';
  }

  public getOrgId(): string | any {
    if (null != this.org) {
      return this.org.id;
    }
    return null;
  }

  public getBranchId(): string | any {
    if (null != this.branch) {
      return this.branch.id;
    }
    return null;
  }

  /*
  @Deprecate
  public getAclOrgId(): string {
    if (null != this.acl) {
      return this.acl.orgId;
    }
    return '0';
  }
*/
  /**
   * @return Current Role
   */
  public getAclRole(): Role {
    /*if (null != this.acl && null != this.acl.role) {
      return Role[this.acl.role as keyof typeof Role]//Role[this.acl.role];
    }*/
    return Role.NA;
  }


  /*
  @Deprecate
  public getAclOrgId(): string {
    if (null != this.acl) {
      return this.acl.orgId;
    }
    return '0';
  }
*/
  /**
   * @return Current Role
   */
  /*
  public getAclRole(): Role {
    if (null != this.acl && null != this.acl.role) {
      return Role[this.acl.role as keyof typeof Role]//Role[this.acl.role];
    }
    return Role.NA;
  }
  */
}
