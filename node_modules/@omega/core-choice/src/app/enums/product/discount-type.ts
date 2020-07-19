export enum DiscountType {
  SINGLE, //Discount limited to the quantity I specified here
  ALL //Discount applies for any items purchased within this category
}

export namespace DiscountType {

  export function getDiscountType(): Array<string> {
    return [
      DiscountType[DiscountType.SINGLE],
      DiscountType[DiscountType.ALL],
    ];//Object.keys(VehicleType); //TYPE_VAL.discountType;
  }

}