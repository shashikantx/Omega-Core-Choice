import {CardInfoDto} from "./card-info.dto";

/**
 * Save card source or charge the card
 */
export interface CardTokenDto {

  acId: string; // UserId or OrgId
  gatewayCustType: string; // GatewayCustomerType - IND, ORG, BR
  gatewayType: string; // GatewayType - environment.gatewayType = STRIPE, PAYNT, PAYTM
  // associateSource: boolean; //associateCard if true store card source for future payment

  //stripe
  gatewayCustId: string; // stripe customer Id
  cardTokenStripe: any; // token from stripe element

  //paynt
  cardInfo: CardInfoDto; // raw card Id
  orgId: string; // OrgId - require to get paynt credential

}