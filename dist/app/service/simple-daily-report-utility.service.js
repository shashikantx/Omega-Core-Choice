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
exports.SimpleDailyReportUtilityService = void 0;
var core_1 = require("@omega/core");
var order_calc_service_1 = require("./order-calc.service");
var SimpleDailyReportUtilityService = /** @class */ (function (_super) {
    __extends(SimpleDailyReportUtilityService, _super);
    function SimpleDailyReportUtilityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    SimpleDailyReportUtilityService.prototype.getReportFromOrderList = function (list, categoryList, reportOrderList) {
        var report = {};
        report.totalSale = this._getTotalSalesReport(reportOrderList);
        report.salesByTender = this._getSalesByTender(reportOrderList);
        report.ttSalesByTender = this._getTtSalesByTender(report.ttSalesByTender, report.salesByTender);
        report.salesByCardType = this._getSalesByCardType(list);
        report.ttSalesByTender = this._getTtSalesByTender(report.ttSalesByTender, report.salesByTender);
        // report.pendingParkSale = this._getPendingParkSale(list); // TODO Complete when added
        report.salesByCategory = this._getSalesByCategory(list, categoryList);
        report.ttCategorySalesVo = this._getTtSalesByCategory(report.ttCategorySalesVo, report.salesByCategory);
        return report;
    };
    /* ************************************ Private Methods ************************************ */
    SimpleDailyReportUtilityService.prototype._getTotalSalesReport = function (reportOrderList) {
        var totalSale = {};
        if (reportOrderList && reportOrderList.length > 0) {
            totalSale.orderCount = reportOrderList.length;
            totalSale.subtotal = this.getReportOrderTotalByKey(reportOrderList, 'subTotal');
            totalSale.tax = this.getReportOrderTotalByKey(reportOrderList, 'tax');
            totalSale.serviceCharge = this.getReportOrderTotalByKey(reportOrderList, 'serviceCharge');
            totalSale.discountCash = this.getReportOrderTotalByKey(reportOrderList, 'discountCash');
            totalSale.tip = this.getReportOrderTotalByKey(reportOrderList, 'tip');
            totalSale.discount = this.getReportOrderTotalByKey(reportOrderList, 'discount');
            var cashRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalCashRefund');
            var creditRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditRefund');
            var qrRefund = this.getReportOrderTotalByKey(reportOrderList, 'totalQrRefund');
            totalSale.refund = cashRefund + creditRefund + qrRefund;
            var cashPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalCashPaid');
            var creditPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditPaid');
            var qrPaid = this.getReportOrderTotalByKey(reportOrderList, 'totalQrPaid');
            totalSale.total = cashPaid + creditPaid + qrPaid - totalSale.refund;
            totalSale.percentDiscount = core_1.MathUtility.round(core_1.MathUtility.percent(totalSale.discount, totalSale.subtotal), 2);
        }
        return totalSale;
    };
    ;
    SimpleDailyReportUtilityService.prototype._getSalesByCardType = function (list) {
        var cardList = [];
        var cardTypeTxMap = this._getCardTypeTxMap(list);
        this._setTenderList(cardList, cardTypeTxMap);
        return cardList;
    };
    SimpleDailyReportUtilityService.prototype._getTtSalesByTender = function (ttSalesByTender, salesByTender) {
        ttSalesByTender = {};
        ttSalesByTender.paid = 0;
        ttSalesByTender.refund = 0;
        ttSalesByTender.tip = 0;
        ttSalesByTender.net = 0;
        if (salesByTender && salesByTender.length > 0) {
            salesByTender.forEach(function (tenderVo) {
                ttSalesByTender.paid = ttSalesByTender.paid + tenderVo.paid;
                ttSalesByTender.refund = ttSalesByTender.refund + tenderVo.refund;
                ttSalesByTender.tip = ttSalesByTender.tip + tenderVo.tip;
                ttSalesByTender.net = ttSalesByTender.net + tenderVo.net;
            });
        }
        return ttSalesByTender;
    };
    SimpleDailyReportUtilityService.prototype._getSalesByCategory = function (list, categoryList) {
        var categorySalesList = [];
        var catIdItemMap = this._getCatIdItemMap(list);
        this._setSalesByCategory(categorySalesList, catIdItemMap, categoryList);
        return categorySalesList;
    };
    SimpleDailyReportUtilityService.prototype._getTtSalesByCategory = function (ttCategorySalesVo, salesByCategory) {
        ttCategorySalesVo = {};
        ttCategorySalesVo.qty = 0;
        ttCategorySalesVo.sale = 0;
        ttCategorySalesVo.discount = 0;
        ttCategorySalesVo.net = 0;
        if (salesByCategory && salesByCategory.length > 0) {
            salesByCategory.forEach(function (tenderVo) {
                ttCategorySalesVo.qty = ttCategorySalesVo.qty + tenderVo.qty;
                ttCategorySalesVo.discount = ttCategorySalesVo.discount + tenderVo.discount;
                ttCategorySalesVo.sale = ttCategorySalesVo.sale + tenderVo.sale;
                ttCategorySalesVo.net = ttCategorySalesVo.net + tenderVo.net;
            });
        }
        return ttCategorySalesVo;
    };
    SimpleDailyReportUtilityService.prototype._getCardTypeTxMap = function (list) {
        var map = new Map();
        list.forEach(function (order) {
            if (order.txCust && order.txCust.length > 0) {
                order.txCust.forEach(function (tx) {
                    if (tx && (tx.gatewayResPax || tx.gatewayResPaynt)) {
                        var key = '';
                        if (tx.gatewayResPaynt && tx.gatewayResPaynt.card && tx.gatewayResPaynt.card.cardType) {
                            key = tx.gatewayResPaynt.card.cardType;
                        }
                        if (tx.gatewayResPax && tx.gatewayResPax.CardType) {
                            key = tx.gatewayResPax.CardType;
                        }
                        key = key.toLowerCase();
                        var txList = [];
                        var listFromMap = map.get(key);
                        if (listFromMap && listFromMap.length > 0) {
                            txList.push.apply(txList, __spread(listFromMap));
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
    };
    SimpleDailyReportUtilityService.prototype._setTenderList = function (tenderList, tenderTypeTxMap) {
        var e_1, _a;
        var keyList = tenderTypeTxMap.keys();
        try {
            for (var keyList_1 = __values(keyList), keyList_1_1 = keyList_1.next(); !keyList_1_1.done; keyList_1_1 = keyList_1.next()) {
                var key = keyList_1_1.value;
                var tenderVo = {};
                var txList = tenderTypeTxMap.get(key);
                if (txList && txList.length > 0) {
                    tenderVo.type = key;
                    tenderVo.count = txList.length;
                    tenderVo.paid = this._getTotalTender(txList, 'amount', core_1.TRANS_TYPE.SALE); // TODO FIXME Remove tip amount added while paying order
                    tenderVo.refund = this._getTotalTender(txList, 'amount', core_1.TRANS_TYPE.RETURN);
                    tenderVo.tip = this._getTotalTender(txList, 'amount', core_1.TRANS_TYPE.ADJUST);
                }
                tenderVo.net = tenderVo.paid + tenderVo.tip - tenderVo.refund;
                tenderList.push(tenderVo);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keyList_1_1 && !keyList_1_1.done && (_a = keyList_1.return)) _a.call(keyList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SimpleDailyReportUtilityService.prototype._getCatIdItemMap = function (list) {
        var map = new Map();
        list.forEach(function (order) {
            order.items.forEach(function (item) {
                if (item && item.item && item.item.category && item.status != 'RETURN') {
                    var keys = Object.keys(item.item.category);
                    if (keys && keys.length > 0) {
                        keys.forEach(function (key) {
                            if (item.item.category[key] && item.item.category[key].active) {
                                var catItemList = [];
                                var listFromMap = map.get(key);
                                if (listFromMap && listFromMap.length > 0) {
                                    catItemList.push.apply(catItemList, __spread(listFromMap));
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
    };
    SimpleDailyReportUtilityService.prototype._setSalesByCategory = function (categorySalesList, catIdItemMap, categoryList) {
        var e_2, _a;
        var keyList = catIdItemMap.keys();
        try {
            for (var keyList_2 = __values(keyList), keyList_2_1 = keyList_2.next(); !keyList_2_1.done; keyList_2_1 = keyList_2.next()) {
                var key = keyList_2_1.value;
                var categorySalesVo = {};
                categorySalesVo.category = {};
                var orderItemList = catIdItemMap.get(key);
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keyList_2_1 && !keyList_2_1.done && (_a = keyList_2.return)) _a.call(keyList_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SimpleDailyReportUtilityService.prototype._getTotalTender = function (list, key, transType) {
        var listForSum = [];
        list.forEach(function (tx) {
            if (tx.transType === transType) {
                if (tx[key]) {
                    if (tx.txStatus == core_1.TRANSACTION_STATUS.SUCCESS) {
                        listForSum.push(tx[key]);
                    }
                }
            }
        });
        return core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum));
    };
    SimpleDailyReportUtilityService.prototype._getTotalSalesByCat = function (orderItemList, key) {
        var listForSum = [];
        orderItemList.forEach(function (item) {
            if (item[key]) {
                listForSum.push(item[key]);
            }
        });
        return core_1.MathUtility.round(core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum)), 2);
    };
    SimpleDailyReportUtilityService.prototype._setCategory = function (categoryList, id) {
        var category = categoryList.find(function (cat) { return cat.id === id; });
        if (!category) {
            category = {};
        }
        return category;
    };
    SimpleDailyReportUtilityService.prototype._getSalesByTender = function (reportOrderList) {
        var ret = [];
        // TODO Implement for all other txMode dynamically
        ret.push(this._getTenderSalesDto(core_1.TRANSACTION_MODE.CASH, reportOrderList));
        ret.push(this._getTenderSalesDto(core_1.TRANSACTION_MODE.OFFLINE_CC, reportOrderList));
        ret.push(this._getTenderSalesDto(core_1.TRANSACTION_MODE.UPI, reportOrderList));
        return ret;
    };
    SimpleDailyReportUtilityService.prototype._getTenderSalesDto = function (txMode, reportOrderList) {
        // TODO Implement for all other txMode dynamically
        var dto = {};
        if (txMode == core_1.TRANSACTION_MODE.CASH) {
            dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalCashPaid');
            dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalCashRefund');
            dto.tip = 0.00; // TODO When tip added for cash
        }
        else if (txMode == core_1.TRANSACTION_MODE.OFFLINE_CC) {
            dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditPaid');
            dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalCreditRefund');
            dto.tip = this.getReportOrderTotalByKey(reportOrderList, 'tip');
        }
        else if (txMode == core_1.TRANSACTION_MODE.UPI) {
            dto.paid = this.getReportOrderTotalByKey(reportOrderList, 'totalQrPaid');
            dto.refund = this.getReportOrderTotalByKey(reportOrderList, 'totalQrRefund');
            dto.tip = 0.00;
        }
        dto.type = txMode;
        dto.net = dto.paid - dto.refund;
        return dto;
    };
    return SimpleDailyReportUtilityService;
}(order_calc_service_1.OrderCalcService));
exports.SimpleDailyReportUtilityService = SimpleDailyReportUtilityService;
