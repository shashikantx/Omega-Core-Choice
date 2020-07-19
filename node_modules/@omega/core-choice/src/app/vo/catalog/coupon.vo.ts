import {ItemVo} from './index';

export interface CouponVo {
  id: string; // coupon code UNIQUE - coupon code -OR- scan coupon code

  orgId: string;
  brId: string;
  type: string; //enums - CouponType
  desc: string; // Description (Max 30 characters)
  start: Date; // Starts on
  end: Date; // Expires on

  /*
    Order Level – one time to the order
    Discounted price in Dollars (ex: 1.00 off)

    Product Level - per unit
    coupon price - How much to DISCOUNT off the normal price? (ex: $1.00 off)
   */
  price: number;

  //ORDER - Order Level – The coupon applies to the order as a whole.
  // If coupon exceeds order total, apply to entire order balance
  max: number; // max discount - order total
  discount: number; // coupon discount - Discounted price based on % percentage of entire order (ex: 10% off)

  //ITEM - Product Level – The coupon applies to a specific product.
  unit: number; // How many units to qualify
  item: ItemVo; // product is this coupon for

}
