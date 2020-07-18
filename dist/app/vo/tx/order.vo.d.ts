import { AddressVo, OrgVo, RegisterVo, TxCustVo, TxPaymentMethodVo, UserVo } from '@parakh/core';
import { OrderItemVo } from './order-item.vo';
import { CreditMemoVo } from './credit-memo.vo';
import { DelayedChargesVo } from './delayed-charges.vo';
import { KotVo } from './kot.vo';
export interface OrderVo {
    id: string;
    orgId: string;
    brId: string;
    register: RegisterVo;
    no: string;
    date: Date;
    org: OrgVo;
    customer: UserVo;
    status: string;
    txStatus: string;
    lock: boolean;
    title: string;
    note: string;
    items: Array<OrderItemVo>;
    kotList: Array<KotVo>;
    txPaymentMethod: TxPaymentMethodVo;
    txCust: Array<TxCustVo>;
    txDateLast: Date;
    shippingAddress: AddressVo;
    type: string;
    mode: string;
    subTotal: number;
    tax: number;
    igst: number;
    cgst: number;
    sgst: number;
    taxState: number;
    taxCounty: number;
    taxSpecial: number;
    taxCity: number;
    discount: number;
    serviceCharge: number;
    discountCash: number;
    totalDue: number;
    totalCashPaid: number;
    couponCode: string;
    crtBy: UserVo;
    created: Date;
    roomNo: number;
    tableNo: number;
    tip: number;
    contactName: string;
    businessName: string;
    transactionDate: Date;
    dueDate: Date;
    estimate: string;
    expiry: Date;
    parentOrderId: string;
    startDate: Date;
    endDate: Date;
    frequency: string;
    customDates: Array<Date>;
    everyXDay: number;
    term: string;
    creditMemo: CreditMemoVo;
    delayed: DelayedChargesVo;
    invoiceGuid: string;
}
