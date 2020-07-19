import {Role} from './role';

export class RoleEnumSet {

  public static READ_ONLY: Array<Role> = []; //TODO EnumSet.range(ROLE_SUPERVISOR, ROLE_SCHOOL_READONLY);

  public static USER: Array<Role> = [Role.NA, Role.USER];

  // RIDE
  public static RIDE_ORG: Array<Role> = [Role.RIDE_AF_DRIVER, Role.RIDE_AF_ADMIN, Role.RIDE_AG_EMP, Role.RIDE_AG_ADMIN, Role.RIDE_CO_EMP, Role.RIDE_CO_ADMIN]; //Role.RIDE_AF_EMP,
  public static RIDE_SUPPORT: Array<Role> = [Role.RIDE_ADMIN];
  public static RIDE_SUPPORT_ORG_BR: Array<Role> = [...RoleEnumSet.RIDE_SUPPORT, ...RoleEnumSet.RIDE_ORG];

  // POS
  public static POS_BR: Array<Role> = [Role.POS_MC_BR_EMP, Role.POS_MC_BR_MGR, Role.POS_MC_BR_ADM];
  public static POS_ORG: Array<Role> = [Role.POS_MC_EMP, Role.POS_MC_MGR, Role.POS_MC_ADM];
  public static POS_SUPPORT: Array<Role> = [Role.POS_ADM];
  public static POS_SUPPORT_ORG_BR: Array<Role> = [...RoleEnumSet.POS_SUPPORT, ...RoleEnumSet.POS_ORG, ...RoleEnumSet.POS_BR];

  // EDU
  public static EDU_ORG: Array<Role> = [Role.EDU_SCH_EMP, Role.EDU_SCH_ADM]; //FIXME
  public static EDU_SUPPORT: Array<Role> = [Role.EDU_ADM];
  public static EDU_SUPPORT_ORG_BR: Array<Role> = [...RoleEnumSet.EDU_SUPPORT, ...RoleEnumSet.EDU_ORG];

  // Health
  public static HLT_ORG: Array<Role> = [Role.HLT_HOS_EMP, Role.HLT_HOS_ADM]; //FIXME
  public static HLT_SUPPORT: Array<Role> = [Role.HLT_ADM];
  public static HLT_SUPPORT_ORG_BR: Array<Role> = [...RoleEnumSet.HLT_SUPPORT, ...RoleEnumSet.HLT_ORG];

  // Career
  public static CAR_SUPPORT: Array<Role> = [Role.CAR_ADM];

  // ITR
  public static ITR_SUPPORT: Array<Role> = [Role.ITR_ADM];


}

