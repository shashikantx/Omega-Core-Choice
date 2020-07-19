"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountType = void 0;
var DiscountType;
(function (DiscountType) {
    DiscountType[DiscountType["SINGLE"] = 0] = "SINGLE";
    DiscountType[DiscountType["ALL"] = 1] = "ALL"; //Discount applies for any items purchased within this category
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
(function (DiscountType) {
    function getDiscountType() {
        return [
            DiscountType[DiscountType.SINGLE],
            DiscountType[DiscountType.ALL],
        ]; //Object.keys(VehicleType); //TYPE_VAL.discountType;
    }
    DiscountType.getDiscountType = getDiscountType;
})(DiscountType = exports.DiscountType || (exports.DiscountType = {}));
