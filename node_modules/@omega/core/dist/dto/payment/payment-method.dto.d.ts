/**
 * for UI - show list of saved source
 */
export interface PaymentMethodDto {
    id: string;
    gatewayCustId: string;
    object: string;
    tokId: string;
    name: string;
    first4: string;
    last4: string;
    cardType: string;
    expMonth: string;
    expYear: string;
    defaultSource: boolean;
    rawSource: any;
}
