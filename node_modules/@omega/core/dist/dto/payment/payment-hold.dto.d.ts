import { TxPaymentMethodVo } from "../../vo/payment";
/**
 * Save card source for future payment
 */
export interface PaymentHoldDto {
    /**
     * store payment object detail to Order/Invoice/Booking >> [txRefId] >> txPaymentMethod
     */
    paymentMethod: TxPaymentMethodVo;
    /**
     * store card source for future payment
     *
     * if associateSource = true and paymentMethod.savedSource = false
     *
     * Note - same as URL_BASE.PAYMENT_SOURCE_SAVE
     *      User/Org >> Token/Source (stripe_token/stripe_source -or- paynt_source)
     *
     */
    associateSource: boolean;
    txRefId: string;
    txType: string;
}
