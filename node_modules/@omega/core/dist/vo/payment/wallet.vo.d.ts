/**
 * TxCust >> [txId] >> tx detail
 * Wallet >> [acId] >> bal(balance), status(active/de-activated), last updated, recent activities[last 25 TxCust] etc.
 */
export interface WalletVo {
    id: string;
    orgId: string;
    brId: string;
    custId: string;
    bal: number;
    lastTx: Date;
    status: string;
}
