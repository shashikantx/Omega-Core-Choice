import {JwtFirebaseDto} from "./jwt-firebase-dto";

/**
 * JwtClaimDto
 */
export interface JwtClaimDto {

  /* ************************************ Instance Fields ************************************ */
  cuid: string;
  cusr: string;
  cdid: string;
  cdtp: string;
  cver: string;
  creg: string;
  cappId: string;
  cacl: any; // List<AclVo> //-OR- Map<String, List<String>> cacl; //acl/sec - access control list
  crol: string;
  //del start
  // crols: Array<string>;
  // corg: string; // Organization
  // cbr: string; // Branch -- cbr=master for master access
  // cbrc: string; // Branch Child
  // csta: string; // Status
  //del end

  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  phone_number: string;
  firebase: JwtFirebaseDto; // JwtFirebase

  iss: string;
  sub: string;
  aud: string;
  exp: Date;
  iat: Date;
  jti: string;
  nbf: Date;
  nonce: string;
  acr: string;
  amr: Array<string>;
  at_hash: string;
  auth_time: number;
  azp: string;
  cnf: string;
  c_hash: string;

}
