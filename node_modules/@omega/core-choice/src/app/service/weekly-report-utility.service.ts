'use strict';

import {OrderCalcService} from "./order-calc.service";
import {ReportOrderDto, TotalWeeklySalesDto, WeeklySalesDto, WeeklySalesReportDto} from "../dto/report";

export class WeeklyReportUtilityService extends OrderCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getWeeklySalesReport(list: Array<ReportOrderDto>): WeeklySalesReportDto {
    return this._getWeeklyReport(list);
  }

  /* ************************************ Private Methods ************************************ */
  private _getWeeklyReport(list: Array<ReportOrderDto>) {
    const report: WeeklySalesReportDto = <WeeklySalesReportDto>{};
    const weekItemMap: Map<number, Array<ReportOrderDto>> = this._getWeekItemMap(list);
    report.weeklySalesDtoList = this._setWeekSalesList(weekItemMap, report.weeklySalesDtoList);
    report.ttWeeklySalesDto = this._getTtWeekSales(report.ttWeeklySalesDto, report.weeklySalesDtoList);
    return report;
  }

  private getNumberOfWeek(dt: Date) { // FIXME Contains Bug
    let tdt: any = new Date(dt.valueOf());
    let dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    let firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
  }

  private _getWeekItemMap(list: Array<ReportOrderDto>): Map<number, Array<ReportOrderDto>> {
    const map: Map<number, Array<ReportOrderDto>> = new Map();
    list.forEach((order: ReportOrderDto) => {
      if (order.date) {
        order.date = new Date(order.date);
        const week = this.getNumberOfWeek(order.date);
        const itemList: Array<ReportOrderDto> = <Array<ReportOrderDto>>[];
        const listFromMap = map.get(week);
        if (listFromMap && listFromMap.length > 0) {
          itemList.push(...listFromMap)
        }

        itemList.push(order);
        map.set(week, itemList);
      }
    });
    return map;
  }

  private _setWeekSalesList(hourItemMap: Map<number, Array<ReportOrderDto>>, report: Array<WeeklySalesDto>) {
    const keyList = hourItemMap.keys();
    report = <Array<WeeklySalesDto>>[];
    for (let key of keyList) {
      const weeklySalesDto: WeeklySalesDto = <WeeklySalesDto>{};
      const orderItemList = hourItemMap.get(key);
      if (orderItemList && orderItemList.length > 0) {
        weeklySalesDto.sub = this.getReportOrderTotalByKey(orderItemList, 'subTotal');
        weeklySalesDto.tax = this.getReportOrderTotalByKey(orderItemList, 'tax');
        weeklySalesDto.discount = this.getReportOrderTotalByKey(orderItemList, 'discount');

        const credit = this.getReportOrderTotalByKey(orderItemList, 'totalCreditPaid');
        const cash = this.getReportOrderTotalByKey(orderItemList, 'totalCashPaid');
        const qr = this.getReportOrderTotalByKey(orderItemList, 'totalQrPaid');

        const cashRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCashRefund');
        const creditRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCreditRefund');
        const qrRefund = this.getReportOrderTotalByKey(orderItemList, 'totalQrRefund');

        weeklySalesDto.total = cash + credit + qr - cashRefund - creditRefund - qrRefund;
        weeklySalesDto.qty = orderItemList.length;
        weeklySalesDto.week = key;
        weeklySalesDto.startDate = this._getMinDate(orderItemList);
        weeklySalesDto.endDate = this._getMaxDate(orderItemList);
        report.push(weeklySalesDto);
      }
    }
    return report;
  }

  private _getMinDate(orderItemList: Array<ReportOrderDto>) {
    const order: ReportOrderDto = orderItemList.reduce((a, b) => {
      return a.date < b.date ? a : b;
    });
    return order.date;
  }

  private _getMaxDate(orderItemList: Array<ReportOrderDto>) {
    const order: ReportOrderDto = orderItemList.reduce((a, b) => {
      return a.date > b.date ? a : b;
    });
    return order.date;
  }

  private _getTtWeekSales(ttWeeklySalesDto: TotalWeeklySalesDto, list: Array<WeeklySalesDto>) {
    ttWeeklySalesDto = <TotalWeeklySalesDto>{};
    ttWeeklySalesDto.sub = 0;
    ttWeeklySalesDto.tax = 0;
    ttWeeklySalesDto.discount = 0;
    ttWeeklySalesDto.total = 0;
    ttWeeklySalesDto.qty = 0;
    if (list && list.length > 0) {
      list.forEach((row: WeeklySalesDto) => {
        ttWeeklySalesDto.sub = ttWeeklySalesDto.sub + row.sub;
        ttWeeklySalesDto.tax = ttWeeklySalesDto.tax + row.tax;
        ttWeeklySalesDto.discount = ttWeeklySalesDto.discount + row.discount;
        ttWeeklySalesDto.total = ttWeeklySalesDto.total + row.total;
        ttWeeklySalesDto.qty = ttWeeklySalesDto.qty + row.qty;
      });
    }
    return ttWeeklySalesDto;
  }
}

