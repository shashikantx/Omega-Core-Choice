'use strict';
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
var core_1 = require("@parakh/core");
var const_1 = require("../const");
var OrderCalcService = /** @class */ (function () {
    function OrderCalcService() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    OrderCalcService.prototype.getOrderTotalByKey = function (list, key) {
        return this._getOrderTotalByKey(list, key);
    };
    OrderCalcService.prototype.getReportOrderTotalByKey = function (list, key) {
        return this._getReportOrderTotalByKey(list, key);
    };
    OrderCalcService.prototype.getOrderItemTotalByKey = function (orderItemList, key) {
        return this._getOrderItemTotalByKey(orderItemList, key);
    };
    OrderCalcService.prototype.getOrderTotalRefund = function (list) {
        return this._getOrderTotalRefund(list);
    };
    OrderCalcService.prototype.getOrderFailedTxTotal = function (list) {
        return this._getOrderFailedTxTotal(list);
    };
    /* ************************************ Private Methods ************************************ */
    OrderCalcService.prototype._getOrderItemTotalByKey = function (orderItemList, key) {
        var listForSum = [];
        orderItemList.forEach(function (item) {
            if (item[key]) {
                listForSum.push(item[key]);
            }
        });
        return core_1.MathUtility.round(core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum)), 2);
    };
    OrderCalcService.prototype._getOrderTotalRefund = function (list) {
        var refund = 0.00;
        if (list && list.length > 0) {
            list.forEach(function (order) {
                if (order && order.status != const_1.ORDER_STATUS.VOID) {
                    if (order.txCust && order.txCust.length > 0) {
                        order.txCust.forEach(function (tx) {
                            if (tx.transType === core_1.TRANS_TYPE.RETURN && tx.txStatus === core_1.TRANSACTION_STATUS.SUCCESS) {
                                refund += tx.amount;
                            }
                        });
                    }
                }
            });
        }
        return refund;
    };
    OrderCalcService.prototype._getOrderFailedTxTotal = function (list) {
        var amount = 0.00;
        if (list && list.length > 0) {
            list.forEach(function (order) {
                if (order && order.status != const_1.ORDER_STATUS.VOID) {
                    if (order.txCust && order.txCust.length > 0) {
                        order.txCust.forEach(function (tx) {
                            if (tx.txStatus != core_1.TRANSACTION_STATUS.SUCCESS && tx.transType != core_1.TRANS_TYPE.RETURN) {
                                amount += tx.amount;
                            }
                        });
                    }
                }
            });
        }
        return amount;
    };
    OrderCalcService.prototype._getOrderTotalByKey = function (list, key) {
        var listForSum = [];
        list.forEach(function (order) {
            if (order[key] && order.status != const_1.ORDER_STATUS.VOID && order.txCust && order.txCust.length > 0) {
                listForSum.push(order[key]);
            }
        });
        return core_1.MathUtility.round(core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum)), 2);
    };
    OrderCalcService.prototype._getReportOrderTotalByKey = function (list, key) {
        var listForSum = [];
        list.forEach(function (order) {
            if (order[key]) {
                listForSum.push(order[key]);
            }
        });
        return core_1.MathUtility.round(core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum)), 2);
    };
    return OrderCalcService;
}());
exports.OrderCalcService = OrderCalcService;
