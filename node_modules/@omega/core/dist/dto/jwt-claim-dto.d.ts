import { JwtFirebaseDto } from "./jwt-firebase-dto";
/**
 * JwtClaimDto
 */
export interface JwtClaimDto {
    cuid: string;
    cusr: string;
    cdid: string;
    cdtp: string;
    cver: string;
    creg: string;
    cappId: string;
    cacl: any;
    crol: string;
    email: string;
    email_verified: boolean;
    name: string;
    picture: string;
    phone_number: string;
    firebase: JwtFirebaseDto;
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
