export interface DiscountTypeVo {
  id: string;

  orgId: string;
  brId: string;
  name: string;
  desc: string; // Description (Max 30 characters)
  rate: number; //Discount Percentage (e.g. 10 for 10%)

  type: string; //enums - DiscountType
  active: boolean; //status

}