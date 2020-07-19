/**
 * JwtFirebaseDto
 */
export interface JwtFirebaseDto {
    identities: Map<string, Array<string>>;
    sign_in_provider: string;
}
