"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEnumSet = void 0;
var role_1 = require("./role");
var RoleEnumSet = /** @class */ (function () {
    function RoleEnumSet() {
    }
    RoleEnumSet.READ_ONLY = []; //TODO EnumSet.range(ROLE_SUPERVISOR, ROLE_SCHOOL_READONLY);
    RoleEnumSet.USER = [role_1.Role.NA, role_1.Role.USER];
    // RIDE
    RoleEnumSet.RIDE_ORG = [role_1.Role.RIDE_AF_DRIVER, role_1.Role.RIDE_AF_ADMIN, role_1.Role.RIDE_AG_EMP, role_1.Role.RIDE_AG_ADMIN, role_1.Role.RIDE_CO_EMP, role_1.Role.RIDE_CO_ADMIN]; //Role.RIDE_AF_EMP,
    RoleEnumSet.RIDE_SUPPORT = [role_1.Role.RIDE_ADMIN];
    RoleEnumSet.RIDE_SUPPORT_ORG_BR = __spreadArrays(RoleEnumSet.RIDE_SUPPORT, RoleEnumSet.RIDE_ORG);
    // POS
    RoleEnumSet.POS_BR = [role_1.Role.POS_MC_BR_EMP, role_1.Role.POS_MC_BR_MGR, role_1.Role.POS_MC_BR_ADM];
    RoleEnumSet.POS_ORG = [role_1.Role.POS_MC_EMP, role_1.Role.POS_MC_MGR, role_1.Role.POS_MC_ADM];
    RoleEnumSet.POS_SUPPORT = [role_1.Role.POS_ADM];
    RoleEnumSet.POS_SUPPORT_ORG_BR = __spreadArrays(RoleEnumSet.POS_SUPPORT, RoleEnumSet.POS_ORG, RoleEnumSet.POS_BR);
    // EDU
    RoleEnumSet.EDU_ORG = [role_1.Role.EDU_SCH_EMP, role_1.Role.EDU_SCH_ADM]; //FIXME
    RoleEnumSet.EDU_SUPPORT = [role_1.Role.EDU_ADM];
    RoleEnumSet.EDU_SUPPORT_ORG_BR = __spreadArrays(RoleEnumSet.EDU_SUPPORT, RoleEnumSet.EDU_ORG);
    // Health
    RoleEnumSet.HLT_ORG = [role_1.Role.HLT_HOS_EMP, role_1.Role.HLT_HOS_ADM]; //FIXME
    RoleEnumSet.HLT_SUPPORT = [role_1.Role.HLT_ADM];
    RoleEnumSet.HLT_SUPPORT_ORG_BR = __spreadArrays(RoleEnumSet.HLT_SUPPORT, RoleEnumSet.HLT_ORG);
    // Career
    RoleEnumSet.CAR_SUPPORT = [role_1.Role.CAR_ADM];
    // ITR
    RoleEnumSet.ITR_SUPPORT = [role_1.Role.ITR_ADM];
    return RoleEnumSet;
}());
exports.RoleEnumSet = RoleEnumSet;
