import {OrgType} from "./org-type";

export enum Role {

  /* ************************************ Individual ************************************ */
  //Individual
  NA,// ('not assign'),
  USER, //consumer / client

  /* ************************************ Ride hailing services ************************************ */
  // Deprecated
  RIDE_AG_ADMIN,
  RIDE_CO_ADMIN,
  RIDE_AF_ADMIN,

  //Agent
  RIDE_AG_EMP, //merchant Employee/Staff
  RIDE_AG_ADM,

  //Corporate
  RIDE_CO_EMP, //merchant Employee/Staff
  RIDE_CO_ADM,

  // Organization / Enterprise / Merchant / Business
  RIDE_AF_EMP, //merchant Employee/Staff
  RIDE_AF_DRIVER, //Driver
  RIDE_AF_ADM,

  // Super Admin
  RIDE_ADMIN,// echoice.shop Admin

  /* ************************************ Point of Sale ************************************ */
  //Branch
  POS_MC_BR_EMP, //Merchant Employee/Staff
  POS_MC_BR_MGR, //MGR - MANAGER
  POS_MC_BR_ADM,//ADM - POS_ADM

  // Organization / Enterprise / Merchant / Business
  POS_MC_EMP, //Merchant Employee/Staff
  POS_MC_MGR,
  POS_MC_ADM,
  // DD - Support
  POS_ADM,// echoice.shop Admin


  /* ************************************ Career ************************************ */
  CAR_EMP, // career emp
  CAR_ADM, // Super Admin Career

  /* ************************************ ITR ************************************ */
  ITR_EMP, // itr emp
  // DD - Support
  ITR_ADM, // Super Admin ITR

  /* ************************************ Health ************************************ */
  HLT_HOS_EMP, // Health emp
  HLT_HOS_ADM, // Health clinic and hospital
  // DD - Support
  HLT_ADM, // Super Admin Health

  /* ************************************ Edu ************************************ */
  EDU_SCH_PRT, // parent
  EDU_SCH_STD, // student
  EDU_SCH_EMP,  // staff - Office Clerks, Secretary
  EDU_SCH_READ, // READONLY - School readonly
  EDU_SCH_DRIVER, // bus driver
  EDU_SCH_TEACHER, // teacher
  EDU_SCH_CASHIER,  // CASHIER,
  EDU_SCH_FIN, // FINANCE ACCOUNT  ACCOUNTANT
  EDU_SCH_OPR, // OPERATOR
  EDU_SCH_ADM, // all school level access
  // DD - Support
  EDU_ADM,  // Super Admin EDU

  /* ************************************ Main Support Team ************************************ */
  SUPER_OPR, // OPERATOR
  SUPER_MGR, // MANAGER
  SUPER_ADM
}

export namespace Role {
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

  export function getEduCustRole(): Array<string> {
    return [
      Role[Role.EDU_SCH_PRT],
      Role[Role.EDU_SCH_STD]
    ];
  }

  export function getEduSchRole(): Array<string> {
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

  export function getPosMcRole(): Array<string> {
    return [
      Role[Role.POS_MC_BR_EMP],
      Role[Role.POS_MC_BR_MGR],
      Role[Role.POS_MC_BR_ADM],
      Role[Role.POS_MC_EMP],
      Role[Role.POS_MC_MGR],
      Role[Role.POS_MC_ADM],
    ];
  }

  export function getPosSupportRole(): Array<string> {
    return [
      Role[Role.POS_ADM]
    ];
  }

  export function getRideOrgRole(orgType: string): Array<string> {
    let roles: Array<string> = [];
    switch (orgType) {
      case OrgType[OrgType.RIDE_AFFILIATE]:
        roles = [
          Role[Role.RIDE_AF_DRIVER],
          Role[Role.RIDE_AF_EMP]
        ];
        break;
      case OrgType[OrgType.RIDE_CORPORATE]:
        roles = [
          Role[Role.RIDE_CO_ADMIN],
          Role[Role.RIDE_CO_EMP]
        ];
        break;
      case OrgType[OrgType.RIDE_AGENT]:
        roles = [
          Role[Role.RIDE_AG_ADMIN],
          Role[Role.RIDE_AG_EMP]
        ];
        break;
    }
    return roles;
  }
}
