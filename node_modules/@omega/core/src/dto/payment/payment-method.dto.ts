/**
 * for UI - show list of saved source
 */
export interface PaymentMethodDto {
  id: string; //sourceId card_xxxx
  gatewayCustId: string;
  object: string; //object type - card, ach/bank etc.
  tokId:string;

  // fName: string; //CardHolderName
  // lName: string;
  name: string; //CardHolderName

  first4: string;
  last4: string;
  cardType: string; // brand
  // expirationDate: string; //YYYY-MM
  expMonth: string;
  expYear: string;

  defaultSource: boolean;

  rawSource: any;

}