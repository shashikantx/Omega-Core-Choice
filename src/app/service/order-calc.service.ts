'use strict';

import {OrderItemVo, OrderVo} from "../vo/tx";
import {MathUtility, TRANS_TYPE, TRANSACTION_STATUS} from "@omega/core";
import {ORDER_STATUS} from "../const";
import {ReportOrderDto} from "../dto/report";

export class OrderCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getOrderTotalByKey(list: Array<OrderVo>, key: string): number {
    return this._getOrderTotalByKey(list, key);
  }

  public getReportOrderTotalByKey(list: Array<ReportOrderDto>, key: string): number {
    return this._getReportOrderTotalByKey(list, key);
  }

  public getOrderItemTotalByKey(orderItemList: Array<OrderItemVo>, key: string) {
    return this._getOrderItemTotalByKey(orderItemList, key);
  }

  public getOrderTotalRefund(list: Array<OrderVo>) {
    return this._getOrderTotalRefund(list);
  }

  public getOrderFailedTxTotal(list: Array<OrderVo>) {
    return this._getOrderFailedTxTotal(list);
  }

  /* ************************************ Private Methods ************************************ */
  private _getOrderItemTotalByKey(orderItemList: Array<OrderItemVo>, key: string) {
    const listForSum: Array<number> = [];
    orderItemList.forEach((item: OrderItemVo | any) => {
      if (item[key]) {
        listForSum.push(item[key]);
      }
    });
    return MathUtility.round(MathUtility.sum(...listForSum), 2);
  }

  private _getOrderTotalRefund(list: Array<OrderVo>) {
    let refund = 0.00;
    if (list && list.length > 0) {
      list.forEach(order => {
        if (order && order.status != ORDER_STATUS.VOID) {
          if (order.txCust && order.txCust.length > 0) {
            order.txCust.forEach(tx => {
              if (tx.transType === TRANS_TYPE.RETURN && tx.txStatus === TRANSACTION_STATUS.SUCCESS) {
                refund += tx.amount;
              }
            });
          }
        }
      });
    }
    return refund;
  }

  private _getOrderFailedTxTotal(list: Array<OrderVo>) {
    let amount = 0.00;
    if (list && list.length > 0) {
      list.forEach(order => {
        if (order && order.status != ORDER_STATUS.VOID) {
          if (order.txCust && order.txCust.length > 0) {
            order.txCust.forEach(tx => {
              if (tx.txStatus != TRANSACTION_STATUS.SUCCESS && tx.transType != TRANS_TYPE.RETURN) {
                amount += tx.amount;
              }
            });
          }
        }
      });
    }
    return amount;
  }

  private _getOrderTotalByKey(list: Array<OrderVo>, key: string) {
    const listForSum: Array<number> = [];
    list.forEach((order: OrderVo | any) => {
      if (order[key] && order.status != ORDER_STATUS.VOID && order.txCust && order.txCust.length > 0) {
        listForSum.push(order[key]);
      }
    });
    return MathUtility.round(MathUtility.sum(...listForSum), 2);
  }

  private _getReportOrderTotalByKey(list: Array<ReportOrderDto>, key: string) {
    const listForSum: Array<number> = [];
    list.forEach((order: ReportOrderDto | any) => {
      if (order[key]) {
        listForSum.push(order[key]);
      }
    });
    return MathUtility.round(MathUtility.sum(...listForSum), 2);
  }

}
