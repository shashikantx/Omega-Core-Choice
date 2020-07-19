export interface GoogleIdTokenRequestDto {
  id: string,
  uid: string,
  displayName: string, // Kevendra Patidar
  givenName: string, // Kevendra
  familyName: string, // Patidar
  email: string,
  photoUrl: string,
  token: string // Google JWT
}
