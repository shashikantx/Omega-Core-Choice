export interface OrderSummaryReportDto {
    subTotal: number;
    tax: number;
    discount: number;
    serviceCharge: number;
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
    tip: number;
    netTip: number;
    orderCount: number;
    paidOut: number;
    paidIn: number;
}
