import {PercentFlatVo} from "@parakh/core";
import {ItemVo} from "../catalog";

export interface OrderItemVo {
  item: ItemVo;
  qty: number; // Quantity

  taxInclusive: boolean; // from ItemVo.taxInclusive
  priceBase: number; // from ItemVo.price

  discountUnit: number; // Unit discount
  price: number; // Discounted price - Unit Price item.price (override by user)

  note: string;
  status: string; // OrderItemStatus - REFUND

  //Total
  discount: PercentFlatVo;
  tax: number; // total tax = total tax (us or gst)
  amount: number; // Amount = qty * price
  // amountNet: number; // Net Amount = amount + tax

  //tax detail
  // Tax / US
  taxState: number;
  taxCounty: number;
  taxSpecial: number;
  taxCity: number;

  // Tax / GST
  igst: number;
  cgst: number;
  sgst: number;

  inclusivePrice: number;
}
