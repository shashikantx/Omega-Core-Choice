import { OrderCalcService } from "./order-calc.service";
import { OrderVo } from "../vo/tx";
import { ProductReportDto } from "../dto/report";
import { CategoryVo } from "../vo/catalog";
export declare class ProductReportUtilityService extends OrderCalcService {
    getProductReportFromOrderList(list: Array<OrderVo>, categoryList: Array<CategoryVo>): ProductReportDto;
    private _getSalesByProduct;
    private _getItemIdItemMap;
    private _setSalesByProduct;
    private _getTtSalesByProduct;
    private _getItemCatListFromObject;
    private _getTotalCostProduct;
}
