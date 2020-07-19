import {UserVo} from "../auth";

/**
 * TxCust >> [txId] >> tx detail
 */
export interface TxCustVo {
  id: string;

  orgId: string;
  brId: string;

  deviceId: string;
  registerId: string;

  amount: number; // amount receive (+) -OR- debited (-)
  note: string; // transaction detail - description - remarks - note

  customer: UserVo; // tx for

  transType: string; // "UNKNOWN", "AUTH", "SALE", "RETURN", "VOID", "POSTAUTH", "FORCEAUTH", "CAPTURE", "REPEATSALE", "CAPTUREALL", "ADJUST", "INQUIRY", "ACTIVATE", "DEACTIVATE", "RELOAD", "VOID SALE", "VOID RETURN", "VOID AUTH", "VOID POSTAUTH", "VOID FORCEAUTH", "VOID WITHDRAWAL", "REVERSAL", "WITHDRAWAL", "ISSUE", "CASHOUT", "REPLACE", "MERGE", "REPORTLOST", "REDEEM", "STATUS_CHECK", "SETUP", "INIT", "VERIFY", "REACTIVATE", "FORCED ISSUE", "FORCED ADD", "UNLOAD", "RENEW", "TOKENIZE", "GETCONVERTDETAIL", "CONVERT", "INCREMENTALAUTH", "BALANCEWITHLOCK", "REDEMPTIONWITHUNLOCK", "REWARDS", "REENTER"
  txRefId: string; // invoiceId -OR- orderId -OR- bookingId

  txType:  string; // TransactionType - INVOICE / ORDER / BOOKING / BOOKING_REFUND etc..
  txMode: string; // TransactionMode - paymentMethod ONLINE_CC, OFFLINE_CC, CH - CASH, CQ - CHEQUE
  txProcessor: string; // TRANSACTION_PROCESSOR - PAX, PAYNT, STRIPE,
  txStatus: string; // TransactionStatus - SUCCESS, FAIL, TIME_OUT

  paymentIntentId: string; // Stripe pi_xxxxxxxx
  stripeAccount: string; // Stripe express account id - org.stripeAccount

  /* ************************************ gateway response Raw ************************************ */
  gatewayResStripe: any; // TransactionMode.STRIPE
  gatewayResPax: any; // TransactionMode.PAX //Note: this will be response from the terminal
  /**
   * txMode = ONLINE_CC - calc at server-side
   */
  gatewayResPaynt: any; // TransactionMode.PAYNT

  /* ************************************ gateway response Processed ************************************ */
  gatewayRes: any;

  /* ************************************ calc at server-side ************************************ */
  txBy: string; // TransactionBy - EMP / CUST / custTx: boolean; //customer generated Tx or self service
  /**
   * ac = orgId-branchId-userId //master branch + user id
   * if want separate account for each branch then // child branch + user id
   *
   * ac = account issued by org
   */
  ac: string;
  date: Date; // txDate

  //Audit
  crtBy: UserVo; // paidBy either same user or employee or friend
  created: Date; // record created

}
