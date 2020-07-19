'use strict';

import {OrderCalcService} from "./order-calc.service";
import {HourlySalesDto, ReportOrderDto} from "../dto/report";

export class HourlyReportUtilityService extends OrderCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getHourlyReport(list: Array<ReportOrderDto>): Array<HourlySalesDto> {
    let report: Array<HourlySalesDto> = <Array<HourlySalesDto>>[];
    report = this._getHourlyReport(list, report);
    return report;
  }

  /* ************************************ Private Methods ************************************ */
  private _getHourlyReport(list: Array<ReportOrderDto>, report: Array<HourlySalesDto>) {
    report = <Array<HourlySalesDto>>[];
    const hourItemMap: Map<string, Array<ReportOrderDto>> = this._getHourItemMap(list);
    report = this._setHourlySalesList(hourItemMap, report);
    return report;
  }

  private _getHourItemMap(list: Array<ReportOrderDto>): Map<string, Array<ReportOrderDto>> {
    const map: Map<string, Array<ReportOrderDto>> = new Map();
    list.forEach((order: ReportOrderDto | any) => {
      if (order['saleHour']) {
        const itemList: Array<ReportOrderDto> = <Array<ReportOrderDto>>[];
        const listFromMap = map.get(order['saleHour']); // FIXME Get date string from timezone of the merchant shop
        if (listFromMap && listFromMap.length > 0) {
          itemList.push(...listFromMap)
        }
        itemList.push(order);
        map.set(order['saleHour'], itemList); // FIXME Get date string from timezone of the merchant shop
      }
    });
    return map;
  }

  private _setHourlySalesList(hourItemMap: Map<string, Array<ReportOrderDto>>, report: Array<HourlySalesDto>) {
    report = <Array<HourlySalesDto>>[];
    for (let key = 0; key <= 23; key++) {
      const hourlySalesDto: HourlySalesDto = <HourlySalesDto>{};
      const orderItemList = hourItemMap.get(key.toString());
      if (orderItemList && orderItemList.length > 0) {
        hourlySalesDto.qty = orderItemList.length;

        const credit = this.getReportOrderTotalByKey(orderItemList, 'totalCreditPaid');
        const cash = this.getReportOrderTotalByKey(orderItemList, 'totalCashPaid');
        const qr = this.getReportOrderTotalByKey(orderItemList, 'totalQrPaid');

        const cashRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCashRefund');
        const creditRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCreditRefund');
        const qrRefund = this.getReportOrderTotalByKey(orderItemList, 'totalQrRefund');

        hourlySalesDto.amount = cash + credit + qr - cashRefund - creditRefund - qrRefund;
        hourlySalesDto.hour = `${key}H`;
        report.push(hourlySalesDto);
      } else {
        hourlySalesDto.qty = 0.00;
        hourlySalesDto.amount = 0.00;
        hourlySalesDto.hour = `${key}H`;
        report.push(hourlySalesDto);
      }
    }
    return report;
  }
}

