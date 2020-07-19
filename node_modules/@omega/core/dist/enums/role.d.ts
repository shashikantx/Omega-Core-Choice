export declare enum Role {
    NA = 0,
    USER = 1,
    RIDE_AG_ADMIN = 2,
    RIDE_CO_ADMIN = 3,
    RIDE_AF_ADMIN = 4,
    RIDE_AG_EMP = 5,
    RIDE_AG_ADM = 6,
    RIDE_CO_EMP = 7,
    RIDE_CO_ADM = 8,
    RIDE_AF_EMP = 9,
    RIDE_AF_DRIVER = 10,
    RIDE_AF_ADM = 11,
    RIDE_ADMIN = 12,
    POS_MC_BR_EMP = 13,
    POS_MC_BR_MGR = 14,
    POS_MC_BR_ADM = 15,
    POS_MC_EMP = 16,
    POS_MC_MGR = 17,
    POS_MC_ADM = 18,
    POS_ADM = 19,
    CAR_EMP = 20,
    CAR_ADM = 21,
    ITR_EMP = 22,
    ITR_ADM = 23,
    HLT_HOS_EMP = 24,
    HLT_HOS_ADM = 25,
    HLT_ADM = 26,
    EDU_SCH_PRT = 27,
    EDU_SCH_STD = 28,
    EDU_SCH_EMP = 29,
    EDU_SCH_READ = 30,
    EDU_SCH_DRIVER = 31,
    EDU_SCH_TEACHER = 32,
    EDU_SCH_CASHIER = 33,
    EDU_SCH_FIN = 34,
    EDU_SCH_OPR = 35,
    EDU_SCH_ADM = 36,
    EDU_ADM = 37,
    SUPER_OPR = 38,
    SUPER_MGR = 39,
    SUPER_ADM = 40
}
export declare namespace Role {
    function getEduCustRole(): Array<string>;
    function getEduSchRole(): Array<string>;
    function getPosMcRole(): Array<string>;
    function getPosSupportRole(): Array<string>;
    function getRideOrgRole(orgType: string): Array<string>;
}
