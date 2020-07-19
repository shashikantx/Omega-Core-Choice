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
exports.TaxCalcService = void 0;
var core_1 = require("@omega/core");
var TaxCalcService = /** @class */ (function () {
    function TaxCalcService() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    TaxCalcService.prototype.getItemTax = function (item, defaultTax, taxable) {
        return this._getItemTax(item, defaultTax, taxable);
    };
    /* ************************************ Private Methods ************************************ */
    TaxCalcService.prototype._getTax = function (tax, qty, price) {
        var taxAmount;
        taxAmount = tax.type ? core_1.MathUtility.number(tax.value) : core_1.MathUtility.percentValue(tax.value, price);
        return core_1.MathUtility.round((taxAmount * qty), 2);
    };
    TaxCalcService.prototype._getItemTax = function (item, defaultTax, taxable) {
        var taxAmount = 0.00;
        if (!item.item.taxExclude) {
            var stateTax = void 0, countyTax = void 0, specialTax = void 0, cityTax = void 0;
            var tax = this._getTaxrate(item, defaultTax, taxable);
            stateTax = this._getTax(tax.taxState, item.qty, item.price);
            specialTax = this._getTax(tax.taxSpecial, item.qty, item.price);
            cityTax = this._getTax(tax.taxCity, item.qty, item.price);
            var totalNonAdTax = stateTax + specialTax + cityTax;
            countyTax = this._getCountyTax(tax.taxCounty, tax.taxCountyAdditive, item.qty, item.price, totalNonAdTax);
            taxAmount = this._getTotalItemTax(stateTax, specialTax, cityTax, countyTax);
            taxAmount = core_1.MathUtility.round(taxAmount, 2);
        }
        console.log('xxx xx xx xx x x taxAmount ', taxAmount);
        return taxAmount;
    };
    TaxCalcService.prototype._getCountyTax = function (taxCounty, taxCountyAdditive, qty, price, totalOtherTax) {
        var totalPrice = core_1.MathUtility.total(price, qty);
        var countyTax = 0;
        if (taxCountyAdditive) {
            var totalAdditive = totalOtherTax + totalPrice;
            countyTax = this._getTax(taxCounty, 1, totalAdditive);
        }
        else {
            countyTax = this._getTax(taxCounty, qty, price);
        }
        return countyTax;
    };
    TaxCalcService.prototype._getTotalItemTax = function (stateTax, specialTax, cityTax, countyTax) {
        var addList = [stateTax, specialTax, cityTax, countyTax];
        return core_1.MathUtility.sum.apply(core_1.MathUtility, __spread(addList));
    };
    TaxCalcService.prototype._getTaxrate = function (item, defaultTax, taxable) {
        return taxable ? this._setAllTaxDto(item.item) : defaultTax;
    };
    TaxCalcService.prototype._setAllTaxDto = function (item) {
        var tax = {};
        tax.taxState = item.taxState;
        tax.taxCounty = item.taxCounty;
        tax.taxSpecial = item.taxSpecial;
        tax.taxCity = item.taxCity;
        tax.taxCountyAdditive = item.taxCountyAdditive;
        return tax;
    };
    return TaxCalcService;
}());
exports.TaxCalcService = TaxCalcService;
