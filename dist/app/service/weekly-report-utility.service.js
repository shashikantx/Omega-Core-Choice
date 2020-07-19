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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyReportUtilityService = void 0;
var order_calc_service_1 = require("./order-calc.service");
var WeeklyReportUtilityService = /** @class */ (function (_super) {
    __extends(WeeklyReportUtilityService, _super);
    function WeeklyReportUtilityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    WeeklyReportUtilityService.prototype.getWeeklySalesReport = function (list) {
        return this._getWeeklyReport(list);
    };
    /* ************************************ Private Methods ************************************ */
    WeeklyReportUtilityService.prototype._getWeeklyReport = function (list) {
        var report = {};
        var weekItemMap = this._getWeekItemMap(list);
        report.weeklySalesDtoList = this._setWeekSalesList(weekItemMap, report.weeklySalesDtoList);
        report.ttWeeklySalesDto = this._getTtWeekSales(report.ttWeeklySalesDto, report.weeklySalesDtoList);
        return report;
    };
    WeeklyReportUtilityService.prototype.getNumberOfWeek = function (dt) {
        var tdt = new Date(dt.valueOf());
        var dayn = (dt.getDay() + 6) % 7;
        tdt.setDate(tdt.getDate() - dayn + 3);
        var firstThursday = tdt.valueOf();
        tdt.setMonth(0, 1);
        if (tdt.getDay() !== 4) {
            tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    };
    WeeklyReportUtilityService.prototype._getWeekItemMap = function (list) {
        var _this = this;
        var map = new Map();
        list.forEach(function (order) {
            if (order.date) {
                order.date = new Date(order.date);
                var week = _this.getNumberOfWeek(order.date);
                var itemList = [];
                var listFromMap = map.get(week);
                if (listFromMap && listFromMap.length > 0) {
                    itemList.push.apply(itemList, __spread(listFromMap));
                }
                itemList.push(order);
                map.set(week, itemList);
            }
        });
        return map;
    };
    WeeklyReportUtilityService.prototype._setWeekSalesList = function (hourItemMap, report) {
        var e_1, _a;
        var keyList = hourItemMap.keys();
        report = [];
        try {
            for (var keyList_1 = __values(keyList), keyList_1_1 = keyList_1.next(); !keyList_1_1.done; keyList_1_1 = keyList_1.next()) {
                var key = keyList_1_1.value;
                var weeklySalesDto = {};
                var orderItemList = hourItemMap.get(key);
                if (orderItemList && orderItemList.length > 0) {
                    weeklySalesDto.sub = this.getReportOrderTotalByKey(orderItemList, 'subTotal');
                    weeklySalesDto.tax = this.getReportOrderTotalByKey(orderItemList, 'tax');
                    weeklySalesDto.discount = this.getReportOrderTotalByKey(orderItemList, 'discount');
                    var credit = this.getReportOrderTotalByKey(orderItemList, 'totalCreditPaid');
                    var cash = this.getReportOrderTotalByKey(orderItemList, 'totalCashPaid');
                    var qr = this.getReportOrderTotalByKey(orderItemList, 'totalQrPaid');
                    var cashRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCashRefund');
                    var creditRefund = this.getReportOrderTotalByKey(orderItemList, 'totalCreditRefund');
                    var qrRefund = this.getReportOrderTotalByKey(orderItemList, 'totalQrRefund');
                    weeklySalesDto.total = cash + credit + qr - cashRefund - creditRefund - qrRefund;
                    weeklySalesDto.qty = orderItemList.length;
                    weeklySalesDto.week = key;
                    weeklySalesDto.startDate = this._getMinDate(orderItemList);
                    weeklySalesDto.endDate = this._getMaxDate(orderItemList);
                    report.push(weeklySalesDto);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keyList_1_1 && !keyList_1_1.done && (_a = keyList_1.return)) _a.call(keyList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return report;
    };
    WeeklyReportUtilityService.prototype._getMinDate = function (orderItemList) {
        var order = orderItemList.reduce(function (a, b) {
            return a.date < b.date ? a : b;
        });
        return order.date;
    };
    WeeklyReportUtilityService.prototype._getMaxDate = function (orderItemList) {
        var order = orderItemList.reduce(function (a, b) {
            return a.date > b.date ? a : b;
        });
        return order.date;
    };
    WeeklyReportUtilityService.prototype._getTtWeekSales = function (ttWeeklySalesDto, list) {
        ttWeeklySalesDto = {};
        ttWeeklySalesDto.sub = 0;
        ttWeeklySalesDto.tax = 0;
        ttWeeklySalesDto.discount = 0;
        ttWeeklySalesDto.total = 0;
        ttWeeklySalesDto.qty = 0;
        if (list && list.length > 0) {
            list.forEach(function (row) {
                ttWeeklySalesDto.sub = ttWeeklySalesDto.sub + row.sub;
                ttWeeklySalesDto.tax = ttWeeklySalesDto.tax + row.tax;
                ttWeeklySalesDto.discount = ttWeeklySalesDto.discount + row.discount;
                ttWeeklySalesDto.total = ttWeeklySalesDto.total + row.total;
                ttWeeklySalesDto.qty = ttWeeklySalesDto.qty + row.qty;
            });
        }
        return ttWeeklySalesDto;
    };
    return WeeklyReportUtilityService;
}(order_calc_service_1.OrderCalcService));
exports.WeeklyReportUtilityService = WeeklyReportUtilityService;
