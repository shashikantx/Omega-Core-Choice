import { AddressVo } from "../address.vo";
export interface MerchantVo {
    merchantCategoryCode: string;
    merchantName: string;
    merchantAddress: AddressVo;
    merchantPhn: string;
    merchantEmail: string;
    merchantDob: string;
}
