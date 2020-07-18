export interface ReceiptVo {
  date: Date; // date on receipt
  paymentMethod: string;
  accName: string;
  amountReceive: number;
  status: string;
  no: string; // Auto generated
  desc: string;
}