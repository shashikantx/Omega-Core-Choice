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
exports.ProductReportUtilityService = void 0;
var order_calc_service_1 = require("./order-calc.service");
var core_1 = require("@omega/core");
var ProductReportUtilityService = /** @class */ (function (_super) {
    __extends(ProductReportUtilityService, _super);
    function ProductReportUtilityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    ProductReportUtilityService.prototype.getProductReportFromOrderList = function (list, categoryList) {
        return this._getSalesByProduct(list, categoryList);
    };
    /* ************************************ Private Methods ************************************ */
    ProductReportUtilityService.prototype._getSalesByProduct = function (list, categoryList) {
        var productReport = {};
        productReport.productSalesVo = [];
        productReport.ttProductSalesVo = {};
        var itemIdItemMap = this._getItemIdItemMap(list);
        this._setSalesByProduct(productReport.productSalesVo, itemIdItemMap, categoryList);
        productReport.ttProductSalesVo = this._getTtSalesByProduct(productReport.ttProductSalesVo, productReport.productSalesVo);
        return productReport;
    };
    ProductReportUtilityService.prototype._getItemIdItemMap = function (list) {
        var map = new Map();
        list.forEach(function (order) {
            order.items.forEach(function (item) {
                if (item && item.item && item.status != 'RETURN') { // TODO Remove hardcoding
                    var itemList = [];
                    var listFromMap = map.get(item.item.id);
                    if (listFromMap && listFromMap.length > 0) {
                        itemList.push.apply(itemList, __spread(listFromMap));
                    }
                    itemList.push(item);
                    map.set(item.item.id, itemList);
                }
            });
        });
        return map;
    };
    ProductReportUtilityService.prototype._setSalesByProduct = function (productSalesList, itemIdItemMap, categoryList) {
        var e_1, _a;
        var keyList = itemIdItemMap.keys();
        try {
            for (var keyList_1 = __values(keyList), keyList_1_1 = keyList_1.next(); !keyList_1_1.done; keyList_1_1 = keyList_1.next()) {
                var key = keyList_1_1.value;
                var productSalesVo = {};
                var orderItemList = itemIdItemMap.get(key);
                if (orderItemList && orderItemList.length > 0) {
                    productSalesVo.item = orderItemList[0].item;
                    productSalesVo.category = this._getItemCatListFromObject(orderItemList[0].item.category, categoryList);
                    productSalesVo.qty = this.getOrderItemTotalByKey(orderItemList, 'qty');
                    productSalesVo.sale = this.getOrderItemTotalByKey(orderItemList, 'amount');
                    productSalesVo.discount = 0.00; // TODO Remove Hardcoding
                    productSalesVo.sub = productSalesVo.sale - productSalesVo.discount;
                    productSalesVo.cost = this._getTotalCostProduct(orderItemList);
                    productSalesVo.profit = core_1.MathUtility.round((productSalesVo.sub - productSalesVo.cost), 2);
                    productSalesVo.percent = core_1.MathUtility.round(core_1.MathUtility.percent(productSalesVo.profit, productSalesVo.cost), 2);
                    productSalesList.push(productSalesVo);
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
    };
    ProductReportUtilityService.prototype._getTtSalesByProduct = function (ttProductSalesVo, salesByProduct) {
        ttProductSalesVo = {};
        ttProductSalesVo.qty = 0;
        ttProductSalesVo.sale = 0;
        ttProductSalesVo.discount = 0;
        ttProductSalesVo.sub = 0;
        ttProductSalesVo.cost = 0;
        if (salesByProduct && salesByProduct.length > 0) {
            salesByProduct.forEach(function (row) {
                ttProductSalesVo.qty = ttProductSalesVo.qty + row.qty;
                ttProductSalesVo.discount = ttProductSalesVo.discount + row.discount;
                ttProductSalesVo.sale = ttProductSalesVo.sale + row.sale;
                ttProductSalesVo.sub = ttProductSalesVo.sub + row.sub;
                ttProductSalesVo.cost = ttProductSalesVo.cost + row.cost;
            });
            ttProductSalesVo.profit = core_1.MathUtility.round((ttProductSalesVo.sub - ttProductSalesVo.cost), 2);
            ttProductSalesVo.percent = core_1.MathUtility.round(core_1.MathUtility.percent(ttProductSalesVo.profit, ttProductSalesVo.cost), 2);
        }
        return ttProductSalesVo;
    };
    ProductReportUtilityService.prototype._getItemCatListFromObject = function (category, categoryList) {
        var list = [];
        if (category) {
            var catList = Object.keys(category);
            if (catList && catList.length > 0) {
                catList.forEach(function (cat) {
                    var category = categoryList.find(function (row) { return row.id === cat; });
                    if (category) {
                        list.push(category);
                    }
                });
            }
        }
        return list;
    };
    ProductReportUtilityService.prototype._getTotalCostProduct = function (orderItemList) {
        var listForSum = [];
        orderItemList.forEach(function (item) {
            if (item && item.item) {
                var num = item.item.cost * item.qty;
                listForSum.push(num);
            }
        });
        return core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(listForSum));
    };
    return ProductReportUtilityService;
}(order_calc_service_1.OrderCalcService));
exports.ProductReportUtilityService = ProductReportUtilityService;
