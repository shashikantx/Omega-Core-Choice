/**
 * JwtFirebaseDto
 */
export interface JwtFirebaseDto {

  /* ************************************ Instance Fields ************************************ */
  identities: Map<string, Array<string>>;
  sign_in_provider: string;

}
