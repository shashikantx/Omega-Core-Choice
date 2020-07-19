import {CardInfoDto} from "../../dto/payment";

/**
 * Order/Invoice/Booking >> [txRefId] >> txPaymentMethod
 */
export interface TxPaymentMethodVo {

  acId: string; // UserId or OrgId
  gatewayCustType: string; //CUSTOMER_TYPE -- IND ORG BR
  gatewayType: string; //TRANSACTION_PROCESSOR -- STRIPE PAYNT

  /**
   * Charge the card with existing saved payment method
   */
  //stripe
  gatewayCustId: string;
  sourceId: string; //src_xxx //token from stripe element
  /**
   * Charge the card with new payment method
   */
  cardTokenStripe: any; //online card payment - tok_visa token from stripe element

  paymentIntentId: string; // offline card payment - pi_xxxx
  stripeAccount: string; // Stripe express account id - org.stripeAccount
  //paynt
  /**
   * for both new and old CardInfoDto needed but card number will be encrypted
   */
  card: CardInfoDto;

  /**
   * true - added to the existing payment method
   */
  savedSource: boolean

  /* ************************************ calc at server-side ************************************ */
  orgId: string;


}
