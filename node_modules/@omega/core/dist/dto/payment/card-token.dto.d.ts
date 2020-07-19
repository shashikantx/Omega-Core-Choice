import { CardInfoDto } from "./card-info.dto";
/**
 * Save card source or charge the card
 */
export interface CardTokenDto {
    acId: string;
    gatewayCustType: string;
    gatewayType: string;
    gatewayCustId: string;
    cardTokenStripe: any;
    cardInfo: CardInfoDto;
    orgId: string;
}
