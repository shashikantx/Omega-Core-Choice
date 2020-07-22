'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyReportUtilityService = void 0;
var order_calc_service_1 = require("./order-calc.service");
var HourlyReportUtilityService = /** @class */ (function (_super) {
    __extends(HourlyReportUtilityService, _super);
    function HourlyReportUtilityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    HourlyReportUtilityService.prototype.getHourlyReport = function (list) {
        var report = [];
        report = this._getHourlyReport(list, report);
        return report;
    };
    /* ************************************ Private Methods ************************************ */
    HourlyReportUtilityService.prototype._getHourlyReport = function (list, report) {
        report = [];
        var hourItemMap = this._getHourItemMap(list);
        report = this._setHourlySalesList(hourItemMap, report);
        return report;
    };
    HourlyReportUtilityService.prototype._getHourItemMap = function (list) {
        var map = new Map();
        list.forEach(function (order) {
            if (order['saleHour']) {
                var itemList = [];
                var listFromMap = map.get(order['saleHour']); // FIXME Get date string from timezone of the merchant shop
                if (listFromMap && listFromMap.length > 0) {
                    itemList.push.apply(itemList, __spread(listFromMap));
                }
                itemList.push(order);
                map.set(order['saleHour'], itemList); // FIXME Get date string from timezone of the merchant shop
            }
        });
        return map;
    };
    HourlyReportUtilityService.prototype._setHourlySalesList = function (hourItemMap, report) {
        report = [];
        for (var key = 0; key <= 23; key++) {
            var hourlySalesDto = {};
            var orderItemList = hourItemMap.get(key.toString());
            if (orderItemList && orderItemList.length > 0) {
                hourlySalesDto.qty = orderItemList.length;
                var credit = this.getReportOrderTotalByKey(orderItemList, 'totalCreditPaid');
                var cash = this.getReportOrderTotalByKey(orderItemList, 'totalCashPaid');
                var qr = this.getReportOrderTotalByKey(orderItemList, 'totalQrPaid');
                var cashRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCashRefund');
                var creditRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCreditRefund');
                var qrRefund = this.getReportOrderTotalByKey(orderItemList, 'totalQrRefund');
                hourlySalesDto.amount = cash + credit + qr - cashRefund - creditRefund - qrRefund;
                hourlySalesDto.hour = key + "H";
                report.push(hourlySalesDto);
            }
            else {
                hourlySalesDto.qty = 0.00;
                hourlySalesDto.amount = 0.00;
                hourlySalesDto.hour = key + "H";
                report.push(hourlySalesDto);
            }
        }
        return report;
    };
    return HourlyReportUtilityService;
}(order_calc_service_1.OrderCalcService));
exports.HourlyReportUtilityService = HourlyReportUtilityService;
