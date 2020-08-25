import {AddressVo, OrgVo, RegisterVo, TxCustVo, TxPaymentMethodVo, UserVo} from '@omega/core';

import {OrderItemVo} from './order-item.vo';
import {CreditMemoVo} from './credit-memo.vo';
import {DelayedChargesVo} from './delayed-charges.vo';
import {KotVo} from './kot.vo';
import { TxVo } from './tx.vo';

export interface OrderVo {
  //new fields
  deviceId: string;
  tx:Array<TxVo>; 
   //new fields
  id: string;

  orgId: string;
  brId: string;
  register: RegisterVo;

  no: string; // Order number
  date: Date; // Order date -OR- Invoice Bill generation date

  org: OrgVo;
  customer: UserVo;

  status: string; // ORDER_STATUS
  txStatus: string; // ORDER_STATUS_TX -
  lock: boolean; // send for payment

  title: string;
  note: string; // Invoice detail/description/remarks/note

  items: Array<OrderItemVo>;
  kotList: Array<KotVo>;

  //source get charged
  txPaymentMethod: TxPaymentMethodVo;
  txCust: Array<TxCustVo>;
  txDateLast: Date; // Date of the last successful transaction date of order

  shippingAddress: AddressVo;
  type: string; //ORDER_TYPE - ORDER INVOICE ESTIMATE BILLING
  mode: string; //ORDER_MODE - ONLINE OFFLINE TODO need more type

  //tt
  subTotal: number;
  tax: number; // total tax
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
  totalCashPaid: number;

  couponCode: string;

  //Audit
  crtBy: UserVo; // employee
  created: Date; // record created

  // extra field in order
  roomNo: number;
  tableNo: number;
  tip: number; // if tx amount contain totalDue and tip in single tx

  // extra field in Invoice
  //order fields
  contactName: string;
  businessName: string;
  // invoice
  transactionDate: Date; // Bill Date  //TODO need to remove @see order.date
  dueDate: Date;

  // extra fields in Estimate
  estimate: string;
  expiry: Date;

  // Recurring
  //parentOrder: OrderVo;
  parentOrderId: string;

  startDate: Date;
  endDate: Date;
  frequency: string; // interval [annually, bi-annually, monthly, weekly, custom
  customDates: Array<Date>; // custom interval
  everyXDay: number;
  term: string; //payment Due term INVOICE_TERM

  creditMemo: CreditMemoVo;
  delayed: DelayedChargesVo;

  invoiceGuid: string; // For creating paynt invoice
  // Audit trail
}
