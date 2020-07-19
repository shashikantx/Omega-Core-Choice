"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgStatus = void 0;
var OrgStatus;
(function (OrgStatus) {
    //global
    OrgStatus[OrgStatus["ACTIVE"] = 0] = "ACTIVE";
    OrgStatus[OrgStatus["INACTIVE"] = 1] = "INACTIVE";
    //org specific status
    OrgStatus[OrgStatus["RIDE_AF_LOOSE_ORG"] = 2] = "RIDE_AF_LOOSE_ORG";
    OrgStatus[OrgStatus["RIDE_AF_NOT_APPROVED"] = 3] = "RIDE_AF_NOT_APPROVED";
    OrgStatus[OrgStatus["RIDE_AF_IN_PROGRESS"] = 4] = "RIDE_AF_IN_PROGRESS";
    OrgStatus[OrgStatus["RIDE_AF_APPROVED"] = 5] = "RIDE_AF_APPROVED";
    OrgStatus[OrgStatus["RIDE_AF_REJECTED"] = 6] = "RIDE_AF_REJECTED";
    OrgStatus[OrgStatus["RIDE_AF_LIVE"] = 7] = "RIDE_AF_LIVE";
    OrgStatus[OrgStatus["RIDE_AF_DEAD"] = 8] = "RIDE_AF_DEAD";
    // RIDE_AF_ACTIVE, // (by org) org is active in business
    // RIDE_AF_INACTIVE, // (by org) org put himself hold to continue business
    // RIDE_CORP_ACTIVE, // (by org/Admin) org is active in business
    // RIDE_CORP_INACTIVE, // (by org/Admin) org put himself hold to continue business
    //
    // RIDE_AGENT_ACTIVE, // (by org/Admin) org is active in business
    // RIDE_AGENT_INACTIVE, // (by org/Admin) org put himself hold to continue business
    //
    // POS_MC_ACTIVE,
    // POS_MC_INACTIVE,
    // POS_VEN_ACTIVE,
    // POS_VEN_INACTIVE,
    // POS_MFR_ACTIVE,
    // POS_MFR_INACTIVE,
    OrgStatus[OrgStatus["POS_MC_IN_PROGRESS"] = 9] = "POS_MC_IN_PROGRESS";
    OrgStatus[OrgStatus["POS_MC_APPROVED"] = 10] = "POS_MC_APPROVED";
    OrgStatus[OrgStatus["POS_MC_REJECTED"] = 11] = "POS_MC_REJECTED";
    OrgStatus[OrgStatus["POS_MC_PENDING"] = 12] = "POS_MC_PENDING";
})(OrgStatus = exports.OrgStatus || (exports.OrgStatus = {}));
