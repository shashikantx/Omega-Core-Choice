import { OrderCalcService } from "./order-calc.service";
import { ReportOrderDto, WeeklySalesReportDto } from "../dto/report";
export declare class WeeklyReportUtilityService extends OrderCalcService {
    getWeeklySalesReport(list: Array<ReportOrderDto>): WeeklySalesReportDto;
    private _getWeeklyReport;
    private getNumberOfWeek;
    private _getWeekItemMap;
    private _setWeekSalesList;
    private _getMinDate;
    private _getMaxDate;
    private _getTtWeekSales;
}
