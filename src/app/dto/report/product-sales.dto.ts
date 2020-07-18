import {CategoryVo, ItemVo} from "../../vo/catalog/index";

export interface ProductSalesDto {
  item: ItemVo;
  category: Array<CategoryVo>;
  qty: number;
  sale: number;
  discount: number;
  sub: number; // sale - discount
  cost: number;
  profit: number;
  percent: number;
}