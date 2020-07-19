'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@parakh/core");
var const_1 = require("../const");
var ReportCsvUtilityService = /** @class */ (function () {
    function ReportCsvUtilityService() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    ReportCsvUtilityService.prototype.getHourlyReportVoForCsv = function (report) {
        var list = [];
        report.forEach(function (row) {
            var csv = {};
            csv.hour = const_1.HOUR[row.hour];
            csv.qty = row.qty;
            csv.amount = row.amount;
            list.push(csv);
        });
        return list;
    };
    ReportCsvUtilityService.prototype.getProductReportVoForCsv = function (report) {
        var list = [];
        report.productSalesVo.forEach(function (row) {
            var csv = {};
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
        var csv = {};
        csv.item = 'Total';
        csv.category = '';
        csv.qty = report.ttProductSalesVo.qty;
        csv.sale = core_1.MathUtility.round(report.ttProductSalesVo.sale, 2);
        csv.discount = core_1.MathUtility.round(report.ttProductSalesVo.discount, 2);
        csv.sub = report.ttProductSalesVo.sub;
        csv.cost = report.ttProductSalesVo.cost;
        csv.profit = report.ttProductSalesVo.profit;
        csv.percent = report.ttProductSalesVo.percent;
        list.push(csv);
        return list;
    };
    ReportCsvUtilityService.prototype.getCustomerReportVoForCsv = function (report) {
        var _this = this;
        var list = [];
        report.forEach(function (row) {
            var csv = {};
            csv.name = row.fName + ' ' + row.lName;
            csv.cell = row.cell;
            csv.email = row.email;
            csv.address = (row.address && row.address.formated) ? row.address.formated : '';
            csv.doB = _this._getFromatedDate(csv.doB);
            csv.gender = _this._getGenderStr(row.gender);
            list.push(csv);
        });
        return list;
    };
    ReportCsvUtilityService.prototype.getCategoryReportVoForCsv = function (report) {
        var list = [];
        report.forEach(function (row) {
            var csv = {};
            csv.category = row.category.name;
            csv.qty = row.qty;
            csv.sale = row.sale;
            csv.discount = row.discount;
            csv.net = row.net;
            list.push(csv);
        });
        return list;
    };
    ReportCsvUtilityService.prototype.getWeeklyReportVoForCsv = function (report) {
        var _this = this;
        var list = [];
        report.forEach(function (row) {
            var csv = {};
            csv.sub = row.sub;
            csv.tax = row.tax;
            csv.discount = row.discount;
            csv.total = row.total;
            csv.qty = row.qty;
            csv.startDate = _this._getFromatedDate(row.startDate);
            csv.endDate = _this._getFromatedDate(row.endDate);
            csv.week = row.week;
            list.push(csv);
        });
        return list;
    };
    /* ************************************ Private Methods ************************************ */
    ReportCsvUtilityService.prototype._getFromatedDate = function (doB) {
        if (doB) {
            doB = new Date(doB);
            var month = core_1.Month[doB.getMonth()];
            var date = doB.getDate();
            var year = doB.getFullYear();
            return month + " " + date + ", " + year;
        }
        return '';
    };
    ReportCsvUtilityService.prototype._getGenderStr = function (gender) {
        var genderStr;
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
            default:
                genderStr = '';
                break;
        }
        return genderStr;
    };
    return ReportCsvUtilityService;
}());
exports.ReportCsvUtilityService = ReportCsvUtilityService;
