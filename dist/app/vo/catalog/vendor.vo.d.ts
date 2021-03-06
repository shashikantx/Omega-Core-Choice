import { AddressVo } from '@omega/core';
export interface VendorVo {
    contactName: string;
    email: string;
    fax: string;
    bankName: string;
    accountNo: number;
    accountType: string;
    routingNo: string;
    bankAddress: AddressVo;
    paymentMethod: string;
    creditCardTokenId: string;
    billingAddress: AddressVo;
    shippingAddress: AddressVo;
    status: boolean;
    createdDate: Date;
    modifiedDate: Date;
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
