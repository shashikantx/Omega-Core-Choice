export enum CouponType {
  ORDER, //Order Level – The coupon applies to the order as a whole.
  ITEM //Product Level – The coupon applies to a specific product.
}

export namespace CouponType {

  export function getCouponType(): Array<string> {
    return [
      CouponType[CouponType.ORDER],
      CouponType[CouponType.ITEM],
    ];//Object.keys(VehicleType); //TYPE_VAL.discountType;
  }

}