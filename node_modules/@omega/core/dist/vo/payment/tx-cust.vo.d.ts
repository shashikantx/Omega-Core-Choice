import { UserVo } from "../auth";
/**
 * TxCust >> [txId] >> tx detail
 */
export interface TxCustVo {
    id: string;
    orgId: string;
    brId: string;
    deviceId: string;
    registerId: string;
    amount: number;
    note: string;
    customer: UserVo;
    transType: string;
    txRefId: string;
    txType: string;
    txMode: string;
    txProcessor: string;
    txStatus: string;
    paymentIntentId: string;
    stripeAccount: string;
    gatewayResStripe: any;
    gatewayResPax: any;
    /**
     * txMode = ONLINE_CC - calc at server-side
     */
    gatewayResPaynt: any;
    gatewayRes: any;
    txBy: string;
    /**
     * ac = orgId-branchId-userId //master branch + user id
     * if want separate account for each branch then // child branch + user id
     *
     * ac = account issued by org
     */
    ac: string;
    date: Date;
    crtBy: UserVo;
    created: Date;
}
