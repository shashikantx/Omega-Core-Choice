import { PercentFlatVo } from "@parakh/core";
import { ItemVo } from "../catalog";
export interface OrderItemVo {
    item: ItemVo;
    qty: number;
    taxInclusive: boolean;
    priceBase: number;
    discountUnit: number;
    price: number;
    note: string;
    status: string;
    discount: PercentFlatVo;
    tax: number;
    amount: number;
    taxState: number;
    taxCounty: number;
    taxSpecial: number;
    taxCity: number;
    igst: number;
    cgst: number;
    sgst: number;
    inclusivePrice: number;
}
