import { AddressVo } from '../address.vo';
export interface OrgBrVo {
    id: string;
    orgId: string;
    name: string;
    type: string;
    address: AddressVo;
    ph: string;
    email: string;
    desc: string;
    status: string;
    del: boolean;
}
