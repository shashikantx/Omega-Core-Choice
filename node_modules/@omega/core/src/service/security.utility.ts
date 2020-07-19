import {OrgStatus, Role, RoleEnumSet} from '../enums';
import {AclVo} from "../vo/auth";
import {CONSTANT} from "../const";


export class SecurityUtility {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public static userHighestRoleInSchool(schoolId: number, croles: Array<string>): Role {
    if (!croles) {
      return Role.NA;
    }
    let schoolIdRole: Array<string>;
    const sId: string = '' + schoolId;
    let role: Role;
    let roleStr;
    croles.forEach(crole => {
      schoolIdRole = crole.split(CONSTANT.SEPARATOR);
      if (sId === schoolIdRole[0]) {
        try {
          roleStr = '' + schoolIdRole[1];
          role = Role['NA']; //FIXME
        } catch (e) {
          role = Role.NA;
        }
        if (this.hasEitherOrgOrBrAccess(role)) {
          return role;
        }
      }
    });
    return Role.NA;
  }

  public static showOrgSetupLink(rootRole: Role, orgId: string, orgStatus: string): boolean {
    return (rootRole === Role.NA) || (rootRole === Role.RIDE_AF_DRIVER && !orgId) || this._affiliationApplicationInprogress(rootRole, orgStatus);
  }

  public static isOrgStatusIsInProgress(orgStatus: string): boolean {
    const inProgressStates = [OrgStatus[OrgStatus.RIDE_AF_LOOSE_ORG], OrgStatus[OrgStatus.RIDE_AF_NOT_APPROVED], OrgStatus[OrgStatus.RIDE_AF_IN_PROGRESS], OrgStatus[OrgStatus.RIDE_AF_REJECTED], OrgStatus[OrgStatus.POS_MC_REJECTED]];

    return (!orgStatus || inProgressStates.indexOf(orgStatus) !== -1);
  }

  private static _affiliationApplicationInprogress(role: Role, orgStatus: string): boolean {
    if (role !== Role.RIDE_AF_ADMIN) {
      return false;
    }

    return this.isOrgStatusIsInProgress(orgStatus);
  }

  /* ************************************ Role and Access Methods Start ************************************ */
  public static isUserSuperAdminStr(role: string): boolean {
    return Role[Role.RIDE_ADMIN] === role || Role[Role.POS_ADM] === role;
  }

  public static isUserSuperAdmin(role: Role): boolean {
    return Role.RIDE_ADMIN === role || Role.POS_ADM === role;
  }

  public static isUserOrgAdminStr(role: string): boolean {
    return Role[Role.RIDE_AF_ADMIN] === role || Role[Role.POS_MC_ADM] === role;
  }

  public static isUserOrgAdmin(role: Role): boolean {
    return Role.RIDE_AF_ADMIN === role || Role.POS_MC_ADM === role;
  }

  public static hasConsumerAccessOnly(role: Role): boolean {
    return RoleEnumSet.USER.indexOf(role) !== -1;
  }

  public static hasEitherOrgOrBrAccess(role: Role): boolean {
    // return (role in RoleEnumSet.ORG_BR);
    return false;//FIXME RoleEnumSet.ORG_BR.indexOf(role) > 0;
  }

  public static hasReadOnlyCapability(role: Role): boolean {
    return RoleEnumSet.READ_ONLY.indexOf(role) !== -1;
  }

  /* ************************************ Both Start ************************************ */
  public static hasRideOrPosSupportAccess(role: Role): boolean {
    return this.hasRideSupportAccess(role) ||  this.hasPosSupportAccess(role);
  }
  public static hasRideOrPosSupportOrOrgOrBrEmployeeAccess(role: Role): boolean {
    return this.hasPosSupportOrOrgOrBrEmployeeAccess(role) ||  this.hasRideSupportOrOrgOrBrEmployeeAccess(role);
  }

  /* ************************************ ITR Start ************************************ */
  public static hasItrSupportAccess(role: Role): boolean {
    return RoleEnumSet.ITR_SUPPORT.indexOf(role) !== -1;
  }
  /* ************************************ ITR End ************************************ */

  /* ************************************ Career Start ************************************ */
  public static hasCareerSupportAccess(role: Role): boolean {
    return RoleEnumSet.CAR_SUPPORT.indexOf(role) !== -1;
  }
  /* ************************************ Career End ************************************ */

  /* ************************************ Edu Start ************************************ */
  public static hasEduSupportAccess(role: Role): boolean {
    return RoleEnumSet.EDU_SUPPORT.indexOf(role) !== -1;
  }

  public static hasEduSupportOrOrgOrBrEmployeeAccess(role: Role): boolean {
    return RoleEnumSet.EDU_SUPPORT_ORG_BR.indexOf(role) !== -1;
  }
  /* ************************************ Edu End ************************************ */

  /* ************************************ PoS Start ************************************ */
  public static hasPosSupportAccess(role: Role): boolean {
    return RoleEnumSet.POS_SUPPORT.indexOf(role) !== -1;
  }

  public static hasPosSupportOrOrgOrBrEmployeeAccess(role: Role): boolean {
    return RoleEnumSet.POS_SUPPORT_ORG_BR.indexOf(role) !== -1;
  }
  /* ************************************ POS End ************************************ */

  /* ************************************ RIDE Start ************************************ */
  public static hasRideSupportAccess(role: Role): boolean {
    return RoleEnumSet.RIDE_SUPPORT.indexOf(role) !== -1;
  }

  public static hasRideSupportOrOrgOrBrEmployeeAccess(role: Role): boolean {
    // return RoleEnumSet.SUPPORT_ORG_BR.hasOwnProperty(role);
    return RoleEnumSet.RIDE_SUPPORT_ORG_BR.indexOf(role) !== -1;
  }
  /* ************************************ RIDE End ************************************ */


  /* ************************************ Role and Access Methods End ************************************ */

  public static getAcl(crole: string): AclVo {
    return this._getAcl(crole);
  }

  public static anonymousAcl(): AclVo {
    return this._anonymousAcl();
  }

  public static getAccessPersonIds(croles: Array<string>): Array<number> {
    return this._getAccessPersonIds(croles);
  }

  public static getAccessSchoolIds(croles: Array<string>, onlyStaffAccess: boolean): Array<number> {
    return this._getAccessSchoolIds(croles, onlyStaffAccess);
  }


  public static hasRole(authorizedRoles: string[], userRoles: string[]): boolean {
    if (!authorizedRoles) {
      authorizedRoles = [];
    }

    return userRoles && (!authorizedRoles.length || authorizedRoles.map((r) => userRoles.indexOf(r.trim().toUpperCase()) >= 0).reduce((a, b) => a || b));
  }

  /* ************************************ Private Methods ************************************ */
  private static _getAclList(croles: Array<string>): Array<AclVo> {
    if (!croles) {
      return [];
    }
    const aclList = Array<AclVo>();
    let vo: AclVo;
    croles.forEach(crole => {
      vo = this._getAcl(crole);
      if (vo) {
        aclList.push(vo);
      }
    });
    return aclList;
  }

  private static _getAcl(crole: string): AclVo {
    if (!crole) {
      return this._anonymousAcl();
    }

    let schoolIdRole: Array<string>;
    let role: Role;
    let schoolId: number = 0;
    const studentPersonId: number = 0;

    schoolIdRole = crole.split(CONSTANT.SEPARATOR, 3);
    try {
      schoolId = parseInt(schoolIdRole[0]);
    } catch (e) {
    }
    let roleStr: string;
    try {
      roleStr = schoolIdRole[1];
      role = Role['NA']; //FIXME Role[roleStr];
    } catch (e) {
      role = Role.NA;
    }
    const vo: AclVo = <AclVo>{};
    return vo;
  }

  private static _getAccessPersonIds(croles: Array<string>): Array<number> {
    if (!croles) {
      return [];
    }
    const accessPersonIds: Array<number> = [];
    let schoolIdRole: Array<string>;
    croles.forEach(crole => {
      schoolIdRole = crole.split(CONSTANT.SEPARATOR, 3);
      try {
        if (schoolIdRole.length >= 3) {
          accessPersonIds.push(parseInt(schoolIdRole[2]));
        }
      } catch (e) {
      }
    });
    return accessPersonIds;
  }

  private static _getAccessSchoolIds(croles: Array<string>, onlyStaffAccess: boolean): Array<number> {
    if (!croles) {
      return [];
    }
    let role: Role;
    let schoolId = 0;
    const accessSchoolIds: Array<number> = [];
    let schoolIdRole: Array<string> = [];
    croles.forEach(crole => {
      schoolIdRole = crole.split(CONSTANT.SEPARATOR, 3);
      try {
        schoolId = parseInt(schoolIdRole[0]);
      } catch (e) {
      }

      let roleStr: string;
      try {
        roleStr = schoolIdRole[1];
        role = Role['NA']; //FIXME Role[roleStr];
      } catch (e) {
        role = Role.NA;
      }
      if (!onlyStaffAccess || this.hasEitherOrgOrBrAccess(role)) {
        accessSchoolIds.push(schoolId);
      }
    });
    return accessSchoolIds;
  }

  private static _anonymousAcl(): AclVo {
    const vo: AclVo = <AclVo>{};
    vo.orgId = '0';
    vo.role = Role[Role.NA];
    vo.active = false;
    return vo;
  }

}
