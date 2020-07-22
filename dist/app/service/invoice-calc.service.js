'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCalcService = void 0;
var core_1 = require("@omega/core");
var InvoiceCalcService = /** @class */ (function () {
    function InvoiceCalcService() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    InvoiceCalcService.prototype.calcInvoiceAmount = function (invoice) {
        invoice.subTotal = this._getSubTotal(invoice.items);
        invoice.tax = this._getTotalTax(invoice.items);
        invoice.totalDue = this._getpayableAmount(invoice);
        /*invoice.creditMemo.amount = MathUtility.number(invoice.creditMemo.amount);
        invoice.delayed.amount = MathUtility.number(invoice.delayed.amount);*/
        return invoice;
    };
    InvoiceCalcService.prototype.getTotalPaid = function (list) {
        return this._getTotalPaid(list);
    };
    /* ************************************ Private Methods ************************************ */
    InvoiceCalcService.prototype._getSubTotal = function (items) {
        var sum = 0;
        items.forEach(function (item) {
            sum = sum + core_1.MathUtility.number(item.amount);
        });
        return sum;
    };
    InvoiceCalcService.prototype._getpayableAmount = function (invoice) {
        var payableAmm = core_1.MathUtility.number(invoice.subTotal) + core_1.MathUtility.round(core_1.MathUtility.number(invoice.tax), 2);
        return payableAmm;
    };
    InvoiceCalcService.prototype._getTotalPaid = function (receipt) {
        var sum = 0;
        if (receipt && receipt.length > 0) {
            receipt.forEach(function (item) {
                sum = sum + core_1.MathUtility.number(item.amount);
            });
            return sum;
        }
    };
    InvoiceCalcService.prototype._getTotalTax = function (items) {
        var sum = 0;
        items.forEach(function (item) {
            sum = sum + core_1.MathUtility.number(item.item.tax);
        });
        return sum;
    };
    return InvoiceCalcService;
}());
exports.InvoiceCalcService = InvoiceCalcService;
