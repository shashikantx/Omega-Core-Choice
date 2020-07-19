/**
 * Token -
 */
export interface Token {
    id: string;
    fcm: string;
    apns: string;
    active: boolean;
    os: string;
    modified: Date;
    created: Date;
    token: string;
}
