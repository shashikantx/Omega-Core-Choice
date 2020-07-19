"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityUtility = void 0;
var enums_1 = require("../enums");
var const_1 = require("../const");
var SecurityUtility = /** @class */ (function () {
    function SecurityUtility() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    SecurityUtility.userHighestRoleInSchool = function (schoolId, croles) {
        var _this = this;
        if (!croles) {
            return enums_1.Role.NA;
        }
        var schoolIdRole;
        var sId = '' + schoolId;
        var role;
        var roleStr;
        croles.forEach(function (crole) {
            schoolIdRole = crole.split(const_1.CONSTANT.SEPARATOR);
            if (sId === schoolIdRole[0]) {
                try {
                    roleStr = '' + schoolIdRole[1];
                    role = enums_1.Role['NA']; //FIXME
                }
                catch (e) {
                    role = enums_1.Role.NA;
                }
                if (_this.hasEitherOrgOrBrAccess(role)) {
                    return role;
                }
            }
        });
        return enums_1.Role.NA;
    };
    SecurityUtility.showOrgSetupLink = function (rootRole, orgId, orgStatus) {
        return (rootRole === enums_1.Role.NA) || (rootRole === enums_1.Role.RIDE_AF_DRIVER && !orgId) || this._affiliationApplicationInprogress(rootRole, orgStatus);
    };
    SecurityUtility.isOrgStatusIsInProgress = function (orgStatus) {
        var inProgressStates = [enums_1.OrgStatus[enums_1.OrgStatus.RIDE_AF_LOOSE_ORG], enums_1.OrgStatus[enums_1.OrgStatus.RIDE_AF_NOT_APPROVED], enums_1.OrgStatus[enums_1.OrgStatus.RIDE_AF_IN_PROGRESS], enums_1.OrgStatus[enums_1.OrgStatus.RIDE_AF_REJECTED], enums_1.OrgStatus[enums_1.OrgStatus.POS_MC_REJECTED]];
        return (!orgStatus || inProgressStates.indexOf(orgStatus) !== -1);
    };
    SecurityUtility._affiliationApplicationInprogress = function (role, orgStatus) {
        if (role !== enums_1.Role.RIDE_AF_ADMIN) {
            return false;
        }
        return this.isOrgStatusIsInProgress(orgStatus);
    };
    /* ************************************ Role and Access Methods Start ************************************ */
    SecurityUtility.isUserSuperAdminStr = function (role) {
        return enums_1.Role[enums_1.Role.RIDE_ADMIN] === role || enums_1.Role[enums_1.Role.POS_ADM] === role;
    };
    SecurityUtility.isUserSuperAdmin = function (role) {
        return enums_1.Role.RIDE_ADMIN === role || enums_1.Role.POS_ADM === role;
    };
    SecurityUtility.isUserOrgAdminStr = function (role) {
        return enums_1.Role[enums_1.Role.RIDE_AF_ADMIN] === role || enums_1.Role[enums_1.Role.POS_MC_ADM] === role;
    };
    SecurityUtility.isUserOrgAdmin = function (role) {
        return enums_1.Role.RIDE_AF_ADMIN === role || enums_1.Role.POS_MC_ADM === role;
    };
    SecurityUtility.hasConsumerAccessOnly = function (role) {
        return enums_1.RoleEnumSet.USER.indexOf(role) !== -1;
    };
    SecurityUtility.hasEitherOrgOrBrAccess = function (role) {
        // return (role in RoleEnumSet.ORG_BR);
        return false; //FIXME RoleEnumSet.ORG_BR.indexOf(role) > 0;
    };
    SecurityUtility.hasReadOnlyCapability = function (role) {
        return enums_1.RoleEnumSet.READ_ONLY.indexOf(role) !== -1;
    };
    /* ************************************ Both Start ************************************ */
    SecurityUtility.hasRideOrPosSupportAccess = function (role) {
        return this.hasRideSupportAccess(role) || this.hasPosSupportAccess(role);
    };
    SecurityUtility.hasRideOrPosSupportOrOrgOrBrEmployeeAccess = function (role) {
        return this.hasPosSupportOrOrgOrBrEmployeeAccess(role) || this.hasRideSupportOrOrgOrBrEmployeeAccess(role);
    };
    /* ************************************ ITR Start ************************************ */
    SecurityUtility.hasItrSupportAccess = function (role) {
        return enums_1.RoleEnumSet.ITR_SUPPORT.indexOf(role) !== -1;
    };
    /* ************************************ ITR End ************************************ */
    /* ************************************ Career Start ************************************ */
    SecurityUtility.hasCareerSupportAccess = function (role) {
        return enums_1.RoleEnumSet.CAR_SUPPORT.indexOf(role) !== -1;
    };
    /* ************************************ Career End ************************************ */
    /* ************************************ Edu Start ************************************ */
    SecurityUtility.hasEduSupportAccess = function (role) {
        return enums_1.RoleEnumSet.EDU_SUPPORT.indexOf(role) !== -1;
    };
    SecurityUtility.hasEduSupportOrOrgOrBrEmployeeAccess = function (role) {
        return enums_1.RoleEnumSet.EDU_SUPPORT_ORG_BR.indexOf(role) !== -1;
    };
    /* ************************************ Edu End ************************************ */
    /* ************************************ PoS Start ************************************ */
    SecurityUtility.hasPosSupportAccess = function (role) {
        return enums_1.RoleEnumSet.POS_SUPPORT.indexOf(role) !== -1;
    };
    SecurityUtility.hasPosSupportOrOrgOrBrEmployeeAccess = function (role) {
        return enums_1.RoleEnumSet.POS_SUPPORT_ORG_BR.indexOf(role) !== -1;
    };
    /* ************************************ POS End ************************************ */
    /* ************************************ RIDE Start ************************************ */
    SecurityUtility.hasRideSupportAccess = function (role) {
        return enums_1.RoleEnumSet.RIDE_SUPPORT.indexOf(role) !== -1;
    };
    SecurityUtility.hasRideSupportOrOrgOrBrEmployeeAccess = function (role) {
        // return RoleEnumSet.SUPPORT_ORG_BR.hasOwnProperty(role);
        return enums_1.RoleEnumSet.RIDE_SUPPORT_ORG_BR.indexOf(role) !== -1;
    };
    /* ************************************ RIDE End ************************************ */
    /* ************************************ Role and Access Methods End ************************************ */
    SecurityUtility.getAcl = function (crole) {
        return this._getAcl(crole);
    };
    SecurityUtility.anonymousAcl = function () {
        return this._anonymousAcl();
    };
    SecurityUtility.getAccessPersonIds = function (croles) {
        return this._getAccessPersonIds(croles);
    };
    SecurityUtility.getAccessSchoolIds = function (croles, onlyStaffAccess) {
        return this._getAccessSchoolIds(croles, onlyStaffAccess);
    };
    SecurityUtility.hasRole = function (authorizedRoles, userRoles) {
        if (!authorizedRoles) {
            authorizedRoles = [];
        }
        return userRoles && (!authorizedRoles.length || authorizedRoles.map(function (r) { return userRoles.indexOf(r.trim().toUpperCase()) >= 0; }).reduce(function (a, b) { return a || b; }));
    };
    /* ************************************ Private Methods ************************************ */
    SecurityUtility._getAclList = function (croles) {
        var _this = this;
        if (!croles) {
            return [];
        }
        var aclList = Array();
        var vo;
        croles.forEach(function (crole) {
            vo = _this._getAcl(crole);
            if (vo) {
                aclList.push(vo);
            }
        });
        return aclList;
    };
    SecurityUtility._getAcl = function (crole) {
        if (!crole) {
            return this._anonymousAcl();
        }
        var schoolIdRole;
        var role;
        var schoolId = 0;
        var studentPersonId = 0;
        schoolIdRole = crole.split(const_1.CONSTANT.SEPARATOR, 3);
        try {
            schoolId = parseInt(schoolIdRole[0]);
        }
        catch (e) {
        }
        var roleStr;
        try {
            roleStr = schoolIdRole[1];
            role = enums_1.Role['NA']; //FIXME Role[roleStr];
        }
        catch (e) {
            role = enums_1.Role.NA;
        }
        var vo = {};
        return vo;
    };
    SecurityUtility._getAccessPersonIds = function (croles) {
        if (!croles) {
            return [];
        }
        var accessPersonIds = [];
        var schoolIdRole;
        croles.forEach(function (crole) {
            schoolIdRole = crole.split(const_1.CONSTANT.SEPARATOR, 3);
            try {
                if (schoolIdRole.length >= 3) {
                    accessPersonIds.push(parseInt(schoolIdRole[2]));
                }
            }
            catch (e) {
            }
        });
        return accessPersonIds;
    };
    SecurityUtility._getAccessSchoolIds = function (croles, onlyStaffAccess) {
        var _this = this;
        if (!croles) {
            return [];
        }
        var role;
        var schoolId = 0;
        var accessSchoolIds = [];
        var schoolIdRole = [];
        croles.forEach(function (crole) {
            schoolIdRole = crole.split(const_1.CONSTANT.SEPARATOR, 3);
            try {
                schoolId = parseInt(schoolIdRole[0]);
            }
            catch (e) {
            }
            var roleStr;
            try {
                roleStr = schoolIdRole[1];
                role = enums_1.Role['NA']; //FIXME Role[roleStr];
            }
            catch (e) {
                role = enums_1.Role.NA;
            }
            if (!onlyStaffAccess || _this.hasEitherOrgOrBrAccess(role)) {
                accessSchoolIds.push(schoolId);
            }
        });
        return accessSchoolIds;
    };
    SecurityUtility._anonymousAcl = function () {
        var vo = {};
        vo.orgId = '0';
        vo.role = enums_1.Role[enums_1.Role.NA];
        vo.active = false;
        return vo;
    };
    return SecurityUtility;
}());
exports.SecurityUtility = SecurityUtility;
