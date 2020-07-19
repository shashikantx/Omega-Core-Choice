'use strict';

import {CategorySalesDto, HourlySalesDto, ProductReportDto, ProductSalesDto, WeeklySalesDto} from "../dto/report";
import {MathUtility, Month, UserVo} from "@parakh/core";
import {HOUR} from "../const";

export class ReportCsvUtilityService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getHourlyReportVoForCsv(report: Array<HourlySalesDto>): any {
    const list: Array<any> = [];
    report.forEach((row: HourlySalesDto | any) => {
      let csv: any = {};
      csv.hour = (<any>HOUR)[row.hour];
      csv.qty = row.qty;
      csv.amount = row.amount;
      list.push(csv);
    });
    return list;
  }

  public getProductReportVoForCsv(report: ProductReportDto): any {
    const list: Array<any> = [];
    report.productSalesVo.forEach((row: ProductSalesDto | any) => {
      let csv: any = {};
      csv.item = row.item.name;
      csv.category = '';
      if (row.category && row.category.length > 0) {
        csv.category = row.category[0].name;
      }
      csv.qty = row.qty;
      csv.sale = row.sale;
      csv.discount = row.discount;
      csv.sub = row.sub;
      csv.cost = row.cost;
      csv.profit = row.profit;
      csv.percent = row.percent;
      list.push(csv);
    });

    let csv: any = {};
    csv.item = 'Total';
    csv.category = '';
    csv.qty = report.ttProductSalesVo.qty;
    csv.sale = MathUtility.round(report.ttProductSalesVo.sale, 2);
    csv.discount = MathUtility.round(report.ttProductSalesVo.discount, 2);
    csv.sub = report.ttProductSalesVo.sub;
    csv.cost = report.ttProductSalesVo.cost;
    csv.profit = report.ttProductSalesVo.profit;
    csv.percent = report.ttProductSalesVo.percent;
    list.push(csv);

    return list;

  }

  public getCustomerReportVoForCsv(report: Array<UserVo>): any {
    const list: Array<any> = [];
    report.forEach((row: UserVo | any) => {
      let csv: any = {};
      csv.name = row.fName + ' ' + row.lName;
      csv.cell = row.cell;
      csv.email = row.email;
      csv.address = (row.address && row.address.formated) ? row.address.formated : '';
      csv.doB = this._getFromatedDate(csv.doB);
      csv.gender = this._getGenderStr(row.gender);
      list.push(csv);
    });
    return list;
  }

  public getCategoryReportVoForCsv(report: Array<CategorySalesDto>): any {
    const list: Array<any> = [];
    report.forEach((row: CategorySalesDto | any) => {
      let csv: any = {};
      csv.category = row.category.name;
      csv.qty = row.qty;
      csv.sale = row.sale;
      csv.discount = row.discount;
      csv.net = row.net;
      list.push(csv);
    });
    return list;
  }

  public getWeeklyReportVoForCsv(report: Array<WeeklySalesDto>): any {
    const list: Array<any> = [];
    report.forEach((row: WeeklySalesDto | any) => {
      let csv: any = {};
      csv.sub = row.sub;
      csv.tax = row.tax;
      csv.discount = row.discount;
      csv.total = row.total;
      csv.qty = row.qty;
      csv.startDate = this._getFromatedDate(row.startDate);
      csv.endDate = this._getFromatedDate(row.endDate);
      csv.week = row.week;

      list.push(csv);
    });
    return list;
  }

  /* ************************************ Private Methods ************************************ */
  private _getFromatedDate(doB: Date) {
    if (doB) {
      doB = new Date(doB);
      const month = Month[doB.getMonth()];
      const date = doB.getDate();
      const year = doB.getFullYear();
      return `${month} ${date}, ${year}`;
    }
    return '';
  }

  private _getGenderStr(gender: string) {
    let genderStr;
    switch (gender) {
      case 'F':
        genderStr = 'Female';
        break;
      case 'M':
        genderStr = 'Male';
        break;
      case 'LGBTQ':
        genderStr = 'LGBTQ';
        break;
      default :
        genderStr = '';
        break;
    }
    return genderStr;
  }
}