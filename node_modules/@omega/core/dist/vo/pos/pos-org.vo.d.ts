export interface PosOrgVo {
    acquirer: string;
    acquirerBin: string;
    agentBankNumber: string;
    acquirerChainNumber: string;
    mcc: string;
    mid: string;
    acceptEbt: boolean;
    fns: string;
    acceptDebit: boolean;
    abaNumber: string;
    settlement: string;
    sharingGroup: string;
    autoSettlement: boolean;
    settlementTime: boolean;
    acceptVisa: boolean;
    acceptMastercard: boolean;
    acceptDiscover: boolean;
    acceptAmEx: boolean;
    amExMid: string;
    payntUserName: string;
    payntPassword: string;
    payntMerchantGuid: string;
    payntGuidDevice: string;
}
