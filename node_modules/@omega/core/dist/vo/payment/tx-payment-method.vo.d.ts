import { CardInfoDto } from "../../dto/payment";
/**
 * Order/Invoice/Booking >> [txRefId] >> txPaymentMethod
 */
export interface TxPaymentMethodVo {
    acId: string;
    gatewayCustType: string;
    gatewayType: string;
    /**
     * Charge the card with existing saved payment method
     */
    gatewayCustId: string;
    sourceId: string;
    /**
     * Charge the card with new payment method
     */
    cardTokenStripe: any;
    paymentIntentId: string;
    stripeAccount: string;
    /**
     * for both new and old CardInfoDto needed but card number will be encrypted
     */
    card: CardInfoDto;
    /**
     * true - added to the existing payment method
     */
    savedSource: boolean;
    orgId: string;
}
