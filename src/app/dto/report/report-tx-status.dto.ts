export interface ReportTxStatusDto {

  status: string;

  cash: number;
  credit: number;
  qr: number;

  cashRefund: number;
  creditRefund: number;
  qrRefund: number;

  pax: number;
  paynt: number;
  stripe: number;
  na: number;

  qrPaytm: number;
  qrPhonepe: number;
  qrGpay: number;
  qrOther: number;

  txResponse: any;
}
