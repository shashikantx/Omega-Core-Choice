"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtility = void 0;
/**
 * StringUtility -
 */
var math_utility_1 = require("./math.utility");
var StringUtility = /** @class */ (function () {
    function StringUtility() {
    }
    /* ************************************ Public Methods ************************************ */
    StringUtility.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var sRet = '';
        if (arr) {
            arr.forEach(function (str) {
                if (str) {
                    sRet += ' ' + str.trim();
                }
            });
        }
        return sRet.trim();
    };
    StringUtility.removeWhitespace = function (val) {
        // .replace(/ /g,'') -OR- .replace(/\s/g,'')
        return val.replace(/ /g, '');
    };
    StringUtility.twoNumAfterDecimal = function (val) {
        var amountStr = '0.00';
        if (val && val > 0) {
            var amt = math_utility_1.MathUtility.round(val, 2);
            amountStr = parseFloat(amt.toString()).toFixed(2);
        }
        return amountStr;
    };
    StringUtility.usCurrencyFormat = function (val) {
        var usd = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return usd;
    };
    return StringUtility;
}());
exports.StringUtility = StringUtility;
