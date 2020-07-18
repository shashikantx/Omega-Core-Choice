export interface OrderSummaryReportDto {
  subTotal: number;
  tax: number;
  discount: number;
  serviceCharge: number; // service charge / service fee
  discountCash: number;
  totalDue: number;

  totalCashPaid: number;
  totalCreditPaid: number;
  totalQrPaid: number;

  totalQrPhonepe: number;
  totalQrGpay: number;
  totalQrPaytm: number;
  totalQrOther: number;
  
  totalRefund: number;
  cashRefund: number;
  creditRefund: number;
  qrRefund: number;

  tip: number; // if tx amount contain totalDue and tip in single tx
  netTip: number; // Total tip gained by employee, will be 0 in case of full refund

  orderCount: number;

  paidOut: number;
  paidIn: number;
}
