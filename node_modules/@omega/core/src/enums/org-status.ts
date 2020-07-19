export enum OrgStatus {
  //global
  ACTIVE,
  INACTIVE,

  //org specific status
  RIDE_AF_LOOSE_ORG,
  RIDE_AF_NOT_APPROVED,
  RIDE_AF_IN_PROGRESS, // (Application submit for review),
  RIDE_AF_APPROVED, // (by Admin) application status after submit(in-progress)
  RIDE_AF_REJECTED, // (by Admin) application status after submit(in-progress)
  RIDE_AF_LIVE, // (by Admin) org status changed from dead to live
  RIDE_AF_DEAD, // (by Admin) org status changed to dead (not fit to work with 1800Limo)
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

  POS_MC_IN_PROGRESS,
  POS_MC_APPROVED,
  POS_MC_REJECTED,
  POS_MC_PENDING
}
