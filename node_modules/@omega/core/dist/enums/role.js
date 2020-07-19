"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var org_type_1 = require("./org-type");
var Role;
(function (Role) {
    /* ************************************ Individual ************************************ */
    //Individual
    Role[Role["NA"] = 0] = "NA";
    Role[Role["USER"] = 1] = "USER";
    /* ************************************ Ride hailing services ************************************ */
    // Deprecated
    Role[Role["RIDE_AG_ADMIN"] = 2] = "RIDE_AG_ADMIN";
    Role[Role["RIDE_CO_ADMIN"] = 3] = "RIDE_CO_ADMIN";
    Role[Role["RIDE_AF_ADMIN"] = 4] = "RIDE_AF_ADMIN";
    //Agent
    Role[Role["RIDE_AG_EMP"] = 5] = "RIDE_AG_EMP";
    Role[Role["RIDE_AG_ADM"] = 6] = "RIDE_AG_ADM";
    //Corporate
    Role[Role["RIDE_CO_EMP"] = 7] = "RIDE_CO_EMP";
    Role[Role["RIDE_CO_ADM"] = 8] = "RIDE_CO_ADM";
    // Organization / Enterprise / Merchant / Business
    Role[Role["RIDE_AF_EMP"] = 9] = "RIDE_AF_EMP";
    Role[Role["RIDE_AF_DRIVER"] = 10] = "RIDE_AF_DRIVER";
    Role[Role["RIDE_AF_ADM"] = 11] = "RIDE_AF_ADM";
    // Super Admin
    Role[Role["RIDE_ADMIN"] = 12] = "RIDE_ADMIN";
    /* ************************************ Point of Sale ************************************ */
    //Branch
    Role[Role["POS_MC_BR_EMP"] = 13] = "POS_MC_BR_EMP";
    Role[Role["POS_MC_BR_MGR"] = 14] = "POS_MC_BR_MGR";
    Role[Role["POS_MC_BR_ADM"] = 15] = "POS_MC_BR_ADM";
    // Organization / Enterprise / Merchant / Business
    Role[Role["POS_MC_EMP"] = 16] = "POS_MC_EMP";
    Role[Role["POS_MC_MGR"] = 17] = "POS_MC_MGR";
    Role[Role["POS_MC_ADM"] = 18] = "POS_MC_ADM";
    // DD - Support
    Role[Role["POS_ADM"] = 19] = "POS_ADM";
    /* ************************************ Career ************************************ */
    Role[Role["CAR_EMP"] = 20] = "CAR_EMP";
    Role[Role["CAR_ADM"] = 21] = "CAR_ADM";
    /* ************************************ ITR ************************************ */
    Role[Role["ITR_EMP"] = 22] = "ITR_EMP";
    // DD - Support
    Role[Role["ITR_ADM"] = 23] = "ITR_ADM";
    /* ************************************ Health ************************************ */
    Role[Role["HLT_HOS_EMP"] = 24] = "HLT_HOS_EMP";
    Role[Role["HLT_HOS_ADM"] = 25] = "HLT_HOS_ADM";
    // DD - Support
    Role[Role["HLT_ADM"] = 26] = "HLT_ADM";
    /* ************************************ Edu ************************************ */
    Role[Role["EDU_SCH_PRT"] = 27] = "EDU_SCH_PRT";
    Role[Role["EDU_SCH_STD"] = 28] = "EDU_SCH_STD";
    Role[Role["EDU_SCH_EMP"] = 29] = "EDU_SCH_EMP";
    Role[Role["EDU_SCH_READ"] = 30] = "EDU_SCH_READ";
    Role[Role["EDU_SCH_DRIVER"] = 31] = "EDU_SCH_DRIVER";
    Role[Role["EDU_SCH_TEACHER"] = 32] = "EDU_SCH_TEACHER";
    Role[Role["EDU_SCH_CASHIER"] = 33] = "EDU_SCH_CASHIER";
    Role[Role["EDU_SCH_FIN"] = 34] = "EDU_SCH_FIN";
    Role[Role["EDU_SCH_OPR"] = 35] = "EDU_SCH_OPR";
    Role[Role["EDU_SCH_ADM"] = 36] = "EDU_SCH_ADM";
    // DD - Support
    Role[Role["EDU_ADM"] = 37] = "EDU_ADM";
    /* ************************************ Main Support Team ************************************ */
    Role[Role["SUPER_OPR"] = 38] = "SUPER_OPR";
    Role[Role["SUPER_MGR"] = 39] = "SUPER_MGR";
    Role[Role["SUPER_ADM"] = 40] = "SUPER_ADM";
})(Role = exports.Role || (exports.Role = {}));
(function (Role) {
    /*
      export function getAllRole(): Array<string> {
        return [
          Role[Role.NA],
          Role[Role.USER],
          Role[Role.POS_MC_BR_EMP],
          Role[Role.POS_MC_BR_MGR],
          Role[Role.POS_MC_BR_ADM],
          Role[Role.POS_MC_EMP],
          Role[Role.POS_MC_MGR],
          Role[Role.POS_MC_ADM],
          Role[Role.POS_ADM],
        ];
      }
    */
    function getEduCustRole() {
        return [
            Role[Role.EDU_SCH_PRT],
            Role[Role.EDU_SCH_STD]
        ];
    }
    Role.getEduCustRole = getEduCustRole;
    function getEduSchRole() {
        return [
            Role[Role.EDU_SCH_EMP],
            Role[Role.EDU_SCH_READ],
            Role[Role.EDU_SCH_DRIVER],
            Role[Role.EDU_SCH_TEACHER],
            Role[Role.EDU_SCH_CASHIER],
            Role[Role.EDU_SCH_FIN],
            Role[Role.EDU_SCH_OPR],
            Role[Role.EDU_SCH_ADM]
        ];
    }
    Role.getEduSchRole = getEduSchRole;
    function getPosMcRole() {
        return [
            Role[Role.POS_MC_BR_EMP],
            Role[Role.POS_MC_BR_MGR],
            Role[Role.POS_MC_BR_ADM],
            Role[Role.POS_MC_EMP],
            Role[Role.POS_MC_MGR],
            Role[Role.POS_MC_ADM],
        ];
    }
    Role.getPosMcRole = getPosMcRole;
    function getPosSupportRole() {
        return [
            Role[Role.POS_ADM]
        ];
    }
    Role.getPosSupportRole = getPosSupportRole;
    function getRideOrgRole(orgType) {
        var roles = [];
        switch (orgType) {
            case org_type_1.OrgType[org_type_1.OrgType.RIDE_AFFILIATE]:
                roles = [
                    Role[Role.RIDE_AF_DRIVER],
                    Role[Role.RIDE_AF_EMP]
                ];
                break;
            case org_type_1.OrgType[org_type_1.OrgType.RIDE_CORPORATE]:
                roles = [
                    Role[Role.RIDE_CO_ADMIN],
                    Role[Role.RIDE_CO_EMP]
                ];
                break;
            case org_type_1.OrgType[org_type_1.OrgType.RIDE_AGENT]:
                roles = [
                    Role[Role.RIDE_AG_ADMIN],
                    Role[Role.RIDE_AG_EMP]
                ];
                break;
        }
        return roles;
    }
    Role.getRideOrgRole = getRideOrgRole;
})(Role = exports.Role || (exports.Role = {}));
