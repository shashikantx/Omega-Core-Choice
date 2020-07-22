import {UserVo} from '@omega/core';


export interface ReportOrderDto {
  id: string;

  registerId: string;

  no: string; // Order number
  date: Date; // Order date
  txDateLast: Date;

  status: string; // [hold, paid, void, delete]

  saleHour: string;

  //txCust: Array<TxCustVo>;

  //tt
  subTotal: number;
  tax: number; // total tax
  taxPercent: number;

  // GST
  igst: number;
  cgst: number;
  sgst: number;
  // US
  taxState: number;
  taxCounty: number;
  taxSpecial: number;
  taxCity: number;

  discount: number; // CreditMemo Amount
  serviceCharge: number; // service charge / service fee
  discountCash: number;
  totalDue: number;

  totalCashPaid: number; // Excluding Refund
  totalCreditPaid: number; // Excluding Refund
  totalQrPaid: number; // Excluding Refund

  totalQrPhonepe: number;
  totalQrGpay: number;
  totalQrPaytm: number;
  totalQrOther: number;

  totalCashRefund: number;
  totalCreditRefund: number;
  totalQrRefund: number;

  employee: UserVo; // employee
  tip: number; // if tx amount contain totalDue and tip in single tx
  netTip: number; // Total tip gained by employee, will be 0 in case of full refund

  txResponse: any;
}
