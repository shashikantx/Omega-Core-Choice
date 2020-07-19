export interface ModifierVo {
  id: string;

  orgId: string;
  brId: string;
  type: string; // ModifierType
  name: string;
  desc: string; //description

  active: boolean; //status - Hide this category

//  List of product: ProductVo; // product is this coupon for

}
