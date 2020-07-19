export interface RideUserVo {
  // Limo specific field
  //driver
  dl: string; //Driving License Image
  foid: string; //FOID Card Image
  sr: string; // Gig Driver Star Rating Image
  rating: number;
  experienceDriver: string;
  dress: { string: boolean };
  lang: { string: boolean };
  veteran: boolean;
  guncard: boolean;
  backgroundCheck: boolean;
  bg: string;
  bgCheckFirm: boolean;
  faxNo: string;
  officeDesc: string;
}
