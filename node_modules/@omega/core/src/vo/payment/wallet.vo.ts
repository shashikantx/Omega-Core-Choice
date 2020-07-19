/**
 * TxCust >> [txId] >> tx detail
 * Wallet >> [acId] >> bal(balance), status(active/de-activated), last updated, recent activities[last 25 TxCust] etc.
 */
export interface WalletVo {
  id: string; // ac no. - orgId-brId-userId

  orgId: string;
  brId: string;
  custId: string; // userId
  //customer: UserVo; // tx for

  bal: number; // account balance NOTE: updated from server side only
  lastTx: Date;

  status: string;

}
