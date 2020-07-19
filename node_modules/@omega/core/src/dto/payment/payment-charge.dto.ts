import {TxCustVo, TxPaymentMethodVo} from "../../vo/payment";

/**
 * Charge to the existing source or new source not added to TxRef
 */
export interface PaymentChargeDto {

  txCust: TxCustVo;

  paymentMethod: TxPaymentMethodVo;
  associateSource: boolean

  /**
   * same like CardTokenHoldDto - URL_BASE.PAYMENT_SOURCE_HOLD
   */
  payNowWithNewPaymentMethod: boolean;
  /*
    acId: string; // UserId or OrgId
    gatewayCustType: string; //GatewayCustomerType -- IND ORG BR
    gatewayType: string; //GatewayType -- STRIPE PAYNT

    //stripe
    gatewayCustId: string;
    sourceId: string; //tok_visa //token from stripe element

    //paynt
    card: CardInfoDto;
    */

}