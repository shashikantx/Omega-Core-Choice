import {PercentFlatVo} from '../account';

export interface MetadataConfigPosVo {
//Modules
  // Transaction Options
  stdKeyboard: boolean;
  regKeyboard: boolean;
  menuKeyboard: boolean;
  menuAndRegKeyboard: boolean;

  // Payment Features
  includeTax: boolean;
  specialtyTax: boolean;
  cashBack: boolean;

  /*
  State Tax Rate: 6%
  County Tax Rate: 3% Additive(X)
  Special Tax:
  City Tax: Flat Tax $
   */
  taxState: PercentFlatVo;
  taxCounty: PercentFlatVo;
  taxCountyAdditive: boolean;
  taxSpecial: PercentFlatVo;
  taxCity: PercentFlatVo;

  // GST
  igst: number;
  cgst: number;
  sgst: number;

  // Industry Features
  allowTip: boolean;
  tabManagement: boolean;
  kitchenDisplay: boolean;
  foodService: boolean;
  tableDining: boolean;

  // Delivery/Online Ordering
  delivery: boolean;
  onlineOrdering: boolean;
  partyOrdering: boolean;
  driveThru: boolean;
  curbsidePickup: boolean;

  //Gift Card/Loyalty Program
  giftCardProgram: boolean;
  loyaltyProgram: boolean;

  //Invoicing/Accounting
  invoicing: boolean;
  estimating: boolean;
  recurringBilling: boolean;

  //Marketing
  email: boolean;
  socialMedia: boolean;
  coupon: boolean;

  //Transaction System
  allowParkedOrder: boolean;
  allowSplitTicket: boolean;
  allowCombinedTicket: boolean;
  allowSplitTender: boolean;

  //Retail Settings
  barCodeScanner: boolean;
  clientManagement: boolean;
  houseAccount: boolean;
  quickSale: boolean;

  //Stock Management
  purchaseOrder: boolean;
  stockManagement: boolean;
  cashDiscount: boolean;

  //Payment
  cash: boolean;
  credit: boolean;
  check: boolean;
  remotePay: boolean;
  cashierCheck: boolean;
  venmo: boolean;
  ach: boolean;
  cryptoCurrency: boolean;
  digitalWallet: boolean;
  applePay: boolean;
  samsungPay: boolean;
  googlePay: boolean;
  paysafeCard: boolean;
  dwolla: boolean;
  ebt: boolean;
  giftCard: boolean;
  invoice: boolean;
  xoom: boolean;
  otherPayMethod: boolean;

  //Gratuity/Tip Settings
  tipForCreditCard: boolean;
  tipForCheck: boolean;
  tipForCustomTender: boolean;
  tipSelectOnScreen: boolean;
  amountOption: boolean;
  percentageOption: boolean;
  mandatoryGratuity: boolean;
  tipSuggestion: boolean;
  employeeTipAmount: boolean;

  //Manual Payment Validation Rules
  requireAllField: boolean;

  //Refund Settings
  refundOnCash: boolean;
  refundOnCredit: boolean;
  refundOnGift: boolean;


  //Cash Discount Settings
  activateCashDiscount: boolean;
  serviceFee: PercentFlatVo;
  printDisclaimer: boolean;
  showDisclaimerOnScreen: boolean;
  serviceFeeOnCashBack: boolean;

  //policy
  homeScreenAfterSale: boolean;
  menuTimeOut: boolean;
  newSaleAfterClosingPrevious: boolean;
  promptInfoRequest: boolean;
  editLineItem: boolean;
  deleteLineItem: boolean;
  discountedLineItem: boolean;
  zeroDollarLineItem: boolean;
  calculateDiscountAmount: boolean;
  changeOrderName: boolean;
  noTaxButton: boolean;
  newCustomerButtonOnToolbar: boolean;
  refundButtonOnActionTab: boolean;
  removeParkButton: boolean;
  giftPrint: boolean;
  displayGiftCardLoad: boolean;

  //Receipts
  //Receipt content
  signatureLineOnReceipt: boolean;
  chargeDueOnReceipt: boolean;
  fullDetailReceiptFormat: boolean;
  refundOptOnOrderPad: boolean;
  printAllModifier: boolean;
  disableAutomaticPrinting: boolean;
  promptToPrintCustomerReceipt: boolean;
  promptToEmailReceipt: boolean;
  promptToSmsReceipt: boolean;
  printBarcodeOfOrder: boolean;
  largerFontOnKitchenReceipt: boolean;
  kitchenTicketReprintButton: boolean;

  //Features
  kot: boolean;
  preAuthorization: boolean;
  completion: boolean;
  forcedTransaction: boolean;
  refund: boolean;
  verification: boolean;
  tokenize: boolean;
  voidSale: boolean;
  voidPreAuthorization: boolean;
  voidForced: boolean;
  voidRefund: boolean;
  customColorSetting: boolean;
  customReceiptSetting: boolean;

  //Security
  avsForCardPresent: boolean;
  avsForCardNotPresent: boolean;
  zip: boolean;
  address: boolean;
  addressAndZip: boolean;
  addressAndForceZip: boolean;
  alwaysOn: boolean;
  manualEntryOnly: boolean;
  cardNotPresentOnly: boolean;
  cvvForManual: boolean;

}
