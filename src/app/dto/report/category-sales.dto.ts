import {CategoryVo} from "../../vo/catalog/index";

export interface CategorySalesDto {
  category: CategoryVo;
  qty: number;
  sale: number;
  discount: number;
  net: number;
}