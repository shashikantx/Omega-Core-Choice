import { OrderVo } from "../vo/tx";
import { DailySalesReportDto, ReportOrderDto } from "../dto/report";
import { CategoryVo } from "../vo/catalog";
import { OrderCalcService } from "./order-calc.service";
export declare class SimpleDailyReportUtilityService extends OrderCalcService {
    getReportFromOrderList(list: Array<OrderVo>, categoryList: Array<CategoryVo>, reportOrderList: Array<ReportOrderDto>): DailySalesReportDto;
    private _getTotalSalesReport;
    private _getSalesByCardType;
    private _getTtSalesByTender;
    private _getSalesByCategory;
    private _getTtSalesByCategory;
    private _getCardTypeTxMap;
    private _setTenderList;
    private _getCatIdItemMap;
    private _setSalesByCategory;
    private _getTotalTender;
    private _getTotalSalesByCat;
    private _setCategory;
    private _getSalesByTender;
    private _getTenderSalesDto;
}
