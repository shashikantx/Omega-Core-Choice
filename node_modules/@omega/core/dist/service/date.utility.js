"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtility = void 0;
/**
 * DateUtility -
 */
var DateUtility = /** @class */ (function () {
    function DateUtility() {
    }
    /* ************************************ Public Methods ************************************ */
    DateUtility.dateInYyyyMmDd = function (d) {
        var sRet = '';
        if (d) {
            var month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            sRet = [year, month, day].join('');
        }
        return sRet.trim();
    };
    return DateUtility;
}());
exports.DateUtility = DateUtility;
