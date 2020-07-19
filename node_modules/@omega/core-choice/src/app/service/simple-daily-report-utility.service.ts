'use strict';

import {OrderItemVo, OrderVo} from "../vo/tx";
import {CategorySalesDto, DailySalesReportDto, ReportOrderDto, TenderSalesDto, TotalCategorySalesDto, TotalSalesDto, TotalTenderSalesDto} from "../dto/report";
import {MathUtility, TRANS_TYPE, TRANSACTION_MODE, TRANSACTION_STATUS, TxCustVo} from "@parakh/core";
import {CategoryVo} from "../vo/catalog";
import {OrderCalcService} from "./order-calc.service";

export class SimpleDailyReportUtilityService extends OrderCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getReportFromOrderList(list: Array<OrderVo>, categoryList: Array<CategoryVo>, reportOrderList: Array<ReportOrderDto>): DailySalesReportDto {
    const report: DailySalesReportDto = <DailySalesReportDto>{};
    report.totalSale = this._getTotalSalesReport(reportOrderList);
    report.salesByTender = this._getSalesByTender(reportOrderList);
    report.ttSalesByTender = this._getTtSalesByTender(report.ttSalesByTender, report.salesByTender);


    report.salesByCardType = this._getSalesByCardType(list);
    report.ttSalesByTender = this._getTtSalesByTender(report.ttSalesByTender, report.salesByTender);

    // report.pendingParkSale = this._getPendingParkSale(list); // TODO Complete when added
    report.salesByCategory = this._getSalesByCategory(list, categoryList);
    report.ttCategorySalesVo = this._getTtSalesByCategory(report.ttCategorySalesVo, report.salesByCategory);
    return report;
  }

  /* ************************************ Private Methods ************************************ */
  private _getTotalSalesReport(reportOrderList: Array<ReportOrderDto>) {
    const totalSale: TotalSalesDto = <TotalSalesDto>{};
    if (reportOrderList && reportOrderList.length > 0) {
      totalSale.orderCount = reportOrderList.length;
      totalSale.subtotal = this.getReportOrderTotalByKey(reportOrderList, 'subTotal');
      totalSale.tax = this.getReportOrderTotalByKey(reportOrderList, 'tax');
      totalSale.serviceCharge = this.getReportOrderTotalByKey(reportOrderList, 'serviceCharge');
      totalSale.discountCash = this.getReportOrderTotalByKey(reportOrderList, 'discountCash');
      totalSale.tip = this.getReportOrderTotalByKey(reportOrderList, 'tip');
      totalSale.discount = this.getReportOrderTotalByKey(reportOrderList, 'discount');

      const cashRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalCashRefund');
      const creditRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditRefund');
      const qrRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalQrRefund');
      totalSale.refund = cashRefund + creditRefund + qrRefund;

      const cashPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalCashPaid');
      const creditPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditPaid');
      const qrPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalQrPaid');

      totalSale.total = cashPaid + creditPaid + qrPaid - totalSale.refund;
      totalSale.percentDiscount = MathUtility.round(MathUtility.percent(totalSale.discount, totalSale.subtotal), 2);
    }
    return totalSale;
  };

  private _getSalesByCardType(list: Array<OrderVo>): Array<TenderSalesDto> {
    const cardList: Array<TenderSalesDto> = <Array<TenderSalesDto>>[];
    const cardTypeTxMap = this._getCardTypeTxMap(list);
    this._setTenderList(cardList, cardTypeTxMap);
    return cardList;
  }

  private _getTtSalesByTender(ttSalesByTender: TotalTenderSalesDto, salesByTender: Array<TenderSalesDto>) {
    ttSalesByTender = <TotalTenderSalesDto>{};
    ttSalesByTender.paid = 0;
    ttSalesByTender.refund = 0;
    ttSalesByTender.tip = 0;
    ttSalesByTender.net = 0;
    if (salesByTender && salesByTender.length > 0) {
      salesByTender.forEach((tenderVo: TenderSalesDto) => {
        ttSalesByTender.paid = ttSalesByTender.paid + tenderVo.paid;
        ttSalesByTender.refund = ttSalesByTender.refund + tenderVo.refund;
        ttSalesByTender.tip = ttSalesByTender.tip + tenderVo.tip;
        ttSalesByTender.net = ttSalesByTender.net + tenderVo.net;
      });
    }
    return ttSalesByTender;
  }

  private _getSalesByCategory(list: Array<OrderVo>, categoryList: Array<CategoryVo>): Array<CategorySalesDto> {
    const categorySalesList: Array<CategorySalesDto> = <Array<CategorySalesDto>>[];
    const catIdItemMap: Map<string, Array<OrderItemVo>> = this._getCatIdItemMap(list);
    this._setSalesByCategory(categorySalesList, catIdItemMap, categoryList);
    return categorySalesList;
  }

  private _getTtSalesByCategory(ttCategorySalesVo: TotalCategorySalesDto, salesByCategory: Array<CategorySalesDto>) {
    ttCategorySalesVo = <TotalCategorySalesDto>{};
    ttCategorySalesVo.qty = 0;
    ttCategorySalesVo.sale = 0;
    ttCategorySalesVo.discount = 0;
    ttCategorySalesVo.net = 0;
    if (salesByCategory && salesByCategory.length > 0) {
      salesByCategory.forEach((tenderVo: CategorySalesDto) => {
        ttCategorySalesVo.qty = ttCategorySalesVo.qty + tenderVo.qty;
        ttCategorySalesVo.discount = ttCategorySalesVo.discount + tenderVo.discount;
        ttCategorySalesVo.sale = ttCategorySalesVo.sale + tenderVo.sale;
        ttCategorySalesVo.net = ttCategorySalesVo.net + tenderVo.net;
      });
    }
    return ttCategorySalesVo;
  }

  private _getCardTypeTxMap(list: Array<OrderVo>): Map<string, Array<TxCustVo>> {
    const map: Map<string, Array<TxCustVo>> = new Map();
    list.forEach((order: OrderVo) => {
      if (order.txCust && order.txCust.length > 0) {
        order.txCust.forEach((tx: TxCustVo) => {
          if (tx && (tx.gatewayResPax || tx.gatewayResPaynt)) {
            let key = '';

            if (tx.gatewayResPaynt && tx.gatewayResPaynt.card && tx.gatewayResPaynt.card.cardType) {
              key = tx.gatewayResPaynt.card.cardType
            }

            if (tx.gatewayResPax && tx.gatewayResPax.CardType) {
              key = tx.gatewayResPax.CardType
            }

            key = key.toLowerCase();

            let txList: Array<TxCustVo> = <Array<TxCustVo>>[];
            const listFromMap = map.get(key);
            if (listFromMap && listFromMap.length > 0) {
              txList.push(...listFromMap);
            }
            if (tx) {
              txList.push(tx);
            }
            if (txList && txList.length > 0) {
              map.set(key, txList);
            }
          }
        });
      }
    });
    return map;
  }

  private _setTenderList(tenderList: Array<TenderSalesDto>, tenderTypeTxMap: Map<string, Array<TxCustVo>>) {
    const keyList = tenderTypeTxMap.keys();
    for (let key of keyList) {
      const tenderVo: TenderSalesDto = <TenderSalesDto>{};
      const txList = tenderTypeTxMap.get(key);
      if (txList && txList.length > 0) {
        tenderVo.type = key;
        tenderVo.count = txList.length;
        tenderVo.paid = this._getTotalTender(txList, 'amount', TRANS_TYPE.SALE); // TODO FIXME Remove tip amount added while paying order
        tenderVo.refund = this._getTotalTender(txList, 'amount', TRANS_TYPE.RETURN);
        tenderVo.tip = this._getTotalTender(txList, 'amount', TRANS_TYPE.ADJUST);
      }
      tenderVo.net = tenderVo.paid + tenderVo.tip - tenderVo.refund;
      tenderList.push(tenderVo);
    }
  }

  private _getCatIdItemMap(list: Array<OrderVo>): Map<string, Array<OrderItemVo>> {
    const map: Map<string, Array<OrderItemVo>> = new Map();
    list.forEach((order: OrderVo) => {
      order.items.forEach((item: OrderItemVo | any) => {
        if (item && item.item && item.item.category && item.status != 'RETURN') {
          const keys = Object.keys(item.item.category);
          if (keys && keys.length > 0) {
            keys.forEach((key) => {
              if (item.item.category[key] && item.item.category[key].active) {
                const catItemList: Array<OrderItemVo> = <Array<OrderItemVo>>[];
                const listFromMap = map.get(key);
                if (listFromMap && listFromMap.length > 0) {
                  catItemList.push(...listFromMap)
                }

                catItemList.push(item);
                map.set(key, catItemList);
              }
            });
          }
        }
      });
    });
    return map;
  }

  private _setSalesByCategory(categorySalesList: Array<CategorySalesDto>, catIdItemMap: Map<string, Array<OrderItemVo>>, categoryList: Array<CategoryVo>) {
    const keyList = catIdItemMap.keys();
    for (let key of keyList) {
      const categorySalesVo: CategorySalesDto = <CategorySalesDto>{};
      categorySalesVo.category = <CategoryVo>{};
      const orderItemList = catIdItemMap.get(key);
      if (orderItemList && orderItemList.length > 0) {
        categorySalesVo.qty = this._getTotalSalesByCat(orderItemList, 'qty');
        categorySalesVo.sale = this._getTotalSalesByCat(orderItemList, 'amount');
        categorySalesVo.discount = 0.00; // TODO Remove Hardcoding
        categorySalesVo.net = categorySalesVo.sale - categorySalesVo.discount;
        categorySalesVo.category = this._setCategory(categoryList, key);
      }
      categorySalesList.push(categorySalesVo);
    }
  }

  private _getTotalTender(list: Array<TxCustVo>, key: string, transType: string): number {
    const listForSum: Array<number> = [];
    list.forEach((tx: TxCustVo | any) => {
      if (tx.transType === transType) {
        if (tx[key]) {
          if (tx.txStatus == TRANSACTION_STATUS.SUCCESS) {
            listForSum.push(tx[key]);
          }
        }
      }
    });
    return MathUtility.sum(...listForSum);
  }

  private _getTotalSalesByCat(orderItemList: Array<OrderItemVo>, key: string) {
    const listForSum: Array<number> = [];
    orderItemList.forEach((item: OrderItemVo | any) => {
      if (item[key]) {
        listForSum.push(item[key]);
      }
    });
    return MathUtility.round(MathUtility.sum(...listForSum), 2);
  }

  private _setCategory(categoryList: Array<CategoryVo>, id: string) {
    let category: CategoryVo | undefined = categoryList.find(cat => cat.id === id);
    if (!category) {
      category = <CategoryVo>{}
    }
    return category;
  }

  private _getSalesByTender(reportOrderList: Array<ReportOrderDto>): Array<TenderSalesDto> {
    const ret = [] as Array<TenderSalesDto>;
    // TODO Implement for all other txMode dynamically
    ret.push(this._getTenderSalesDto(TRANSACTION_MODE.CASH, reportOrderList));
    ret.push(this._getTenderSalesDto(TRANSACTION_MODE.OFFLINE_CC, reportOrderList));
    ret.push(this._getTenderSalesDto(TRANSACTION_MODE.UPI, reportOrderList));

    return ret;
  }

  private _getTenderSalesDto(txMode: string, reportOrderList: Array<ReportOrderDto>): TenderSalesDto {
    // TODO Implement for all other txMode dynamically
    const dto = {} as TenderSalesDto;
    if (txMode == TRANSACTION_MODE.CASH) {
      dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalCashPaid');
      dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalCashRefund');
      dto.tip = 0.00; // TODO When tip added for cash
    } else if (txMode == TRANSACTION_MODE.OFFLINE_CC) {
      dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditPaid');
      dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditRefund');
      dto.tip = this.getReportOrderTotalByKey(reportOrderList, 'tip');
    } else if (txMode == TRANSACTION_MODE.UPI) {
      dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalQrPaid');
      dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalQrRefund');
      dto.tip = 0.00;
    }
    dto.type = txMode;
    dto.net = dto.paid - dto.refund;
    return dto;
  }
}