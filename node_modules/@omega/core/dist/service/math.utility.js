"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtility = void 0;
/**
 * MathService -
 */
var MathUtility = /** @class */ (function () {
    function MathUtility() {
    }
    /* ************************************ Public Methods ************************************ */
    MathUtility.round = function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };
    MathUtility.number = function (n) {
        if (n && !isNaN(n)) {
            return Number(n);
        }
        return 0;
    };
    MathUtility.sum = function () {
        var _this = this;
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        var sum = 0;
        if (vals) {
            vals.forEach(function (n) {
                sum += _this.number(n);
            });
        }
        return sum;
    };
    /**
     *
     * @param {number} unitVal = charge
     * @param {number} quantity
     * @returns {number} = unitVal * quantity
     */
    MathUtility.total = function (unitVal, quantity) {
        return this.number(unitVal) * this.number(quantity);
    };
    MathUtility.totalWithMin = function (unitVal, quantity, fixedMin) {
        var total = this.total(unitVal, quantity);
        return total > fixedMin ? total : fixedMin;
    };
    MathUtility.percent = function (val, total) {
        total = this.number(total);
        if (total !== 0) {
            return (this.number(val) * 100) / total;
        }
        return 0;
    };
    MathUtility.percentValue = function (percent, total) {
        total = this.number(total);
        if (total !== 0) {
            return (total * this.number(percent)) / 100;
        }
        return 0;
    };
    /* ************************************ Converter Methods End ************************************ */
    // Km to miles | Kilometers to miles converter - RapidTables.com
    // https://www.rapidtables.com/convert/length/km-to-mile.html
    //   Kilometers (km) to miles (mi) conversion calculator and how to convert.
    // Kilometers to Miles
    MathUtility.mToKm = function (value) {
        return value / 1000;
    };
    MathUtility.kmToM = function (value) {
        return value * 1000;
    };
    MathUtility.kmToMi = function (value) {
        return value / 1.60934;
    };
    MathUtility.mToMi = function (value) {
        return this.kmToMi(this.mToKm(value));
    };
    MathUtility.miToKm = function (value) {
        return value * 1.60934;
    };
    MathUtility.miTom = function (value) {
        return this.kmToM(this.miToKm(value));
    };
    MathUtility.secToMin = function (value) {
        return value / 60;
    };
    return MathUtility;
}());
exports.MathUtility = MathUtility;
