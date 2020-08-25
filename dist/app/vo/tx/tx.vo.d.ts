export interface TxVo {
    cardHolderName: String;
    amount: number;
    authCode: String;
    brId: String;
    cardType: String;
    created: Date;
    deviceId: String;
    first4: String;
    gatewayResId: String;
    last4: String;
    orgId: String;
    refNum: String;
    resultCode: String;
    tenderType: String;
    transType: String;
    txBy: String;
    txMode: String;
    txProcessor: String;
    txRefId: String;
    txStatus: String;
}
