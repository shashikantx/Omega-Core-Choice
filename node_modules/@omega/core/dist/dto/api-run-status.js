"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRunStatus = void 0;
/**
 * ApiRunStatus - indicator
 */
var ApiRunStatus = /** @class */ (function () {
    function ApiRunStatus() {
        /* ************************************ Instance Fields ************************************ */
        this.working = false;
        // msg: string;
        this.msg = [];
        this.showSpinner = false;
    }
    return ApiRunStatus;
}());
exports.ApiRunStatus = ApiRunStatus;
