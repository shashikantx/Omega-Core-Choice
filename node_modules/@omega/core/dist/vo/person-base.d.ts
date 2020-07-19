import { AuditBase } from './audit-base';
export interface PersonBase extends AuditBase {
    orgId: string;
    addressId: number;
    title: string;
    nameFirst: string;
    nameMiddle: string;
    nameLast: string;
    doB: Date;
    poB: string;
    gender: string;
    religion: string;
    bloodGroup: string;
    uid: number;
    cell: string;
}
