'use strict';

import {OrderItemVo, OrderVo} from "../vo/tx";
import {MathUtility, TxCustVo} from "@omega/core";

export class InvoiceCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public calcInvoiceAmount(invoice: OrderVo): OrderVo {
    invoice.subTotal = this._getSubTotal(invoice.items);
    invoice.tax = this._getTotalTax(invoice.items);
    invoice.totalDue = this._getpayableAmount(invoice);
    /*invoice.creditMemo.amount = MathUtility.number(invoice.creditMemo.amount);
    invoice.delayed.amount = MathUtility.number(invoice.delayed.amount);*/
    return invoice;
  }

  public getTotalPaid(list: Array<TxCustVo>) {
    return this._getTotalPaid(list);
  }

  /* ************************************ Private Methods ************************************ */

  private _getSubTotal(items: Array<OrderItemVo>) {
    let sum: number = 0;
    items.forEach((item: OrderItemVo) => {
      sum = sum + MathUtility.number(item.amount);
    });
    return sum;
  }

  private _getpayableAmount(invoice: OrderVo) {
    let payableAmm = MathUtility.number(invoice.subTotal) + MathUtility.round(MathUtility.number(invoice.tax), 2);
    return payableAmm;
  }

  private _getTotalPaid(receipt: Array<TxCustVo>) {
    let sum: number = 0;
    if (receipt && receipt.length > 0) {
      receipt.forEach((item: TxCustVo) => {
        sum = sum + MathUtility.number(item.amount);
      });
      return sum;
    }
  }

  private _getTotalTax(items: Array<OrderItemVo>) {
    let sum: number = 0;
    items.forEach((item: OrderItemVo) => {
      sum = sum + MathUtility.number(item.item.tax);
    });
    return sum;
  }
}
