export interface DiscountVo {
  id: string;

  orgId: string;
  brId: string;
  name: string;
  desc: string; // Description (Max 30 characters)
  qty: number; //Quantity for discount to be applied (e.g. 10)
  rate: number; //Discount Percentage (e.g. 10 for 10%)

  type: string; //enums - DiscountType
  active: boolean; //status

}