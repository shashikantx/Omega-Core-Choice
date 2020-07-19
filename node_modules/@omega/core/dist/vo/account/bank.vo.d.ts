import { AddressVo } from "../address.vo";
export interface BankVo {
    bankName: string;
    accountNo: string;
    accountType: string;
    BankAddress: AddressVo;
}
