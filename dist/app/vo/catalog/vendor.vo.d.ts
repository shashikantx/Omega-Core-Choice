import { AddressVo } from '@omega/core';
export interface VendorVo {
    id: string;
    orgId: string;
    brId: string;
    name: string;
    desc: string;
    ph: string;
    namePri: string;
    cellPri: string;
    address: AddressVo;
    currency: string;
    billingTerm: string;
}
