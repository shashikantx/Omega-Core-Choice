"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponType = void 0;
var CouponType;
(function (CouponType) {
    CouponType[CouponType["ORDER"] = 0] = "ORDER";
    CouponType[CouponType["ITEM"] = 1] = "ITEM"; //Product Level – The coupon applies to a specific product.
})(CouponType = exports.CouponType || (exports.CouponType = {}));
(function (CouponType) {
    function getCouponType() {
        return [
            CouponType[CouponType.ORDER],
            CouponType[CouponType.ITEM],
        ]; //Object.keys(VehicleType); //TYPE_VAL.discountType;
    }
    CouponType.getCouponType = getCouponType;
})(CouponType = exports.CouponType || (exports.CouponType = {}));
