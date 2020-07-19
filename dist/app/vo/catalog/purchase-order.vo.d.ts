import { AddressVo } from '@omega/core';
export interface PurchaseOrderVo {
    id: string;
    orgId: string;
    brId: string;
    name: string;
    desc: string;
    address: AddressVo;
    modifiedBy: string;
    createdBy: string;
    modified: Date;
    created: Date;
}
