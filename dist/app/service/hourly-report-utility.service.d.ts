import { OrderCalcService } from "./order-calc.service";
import { HourlySalesDto, ReportOrderDto } from "../dto/report";
export declare class HourlyReportUtilityService extends OrderCalcService {
    getHourlyReport(list: Array<ReportOrderDto>): Array<HourlySalesDto>;
    private _getHourlyReport;
    private _getHourItemMap;
    private _setHourlySalesList;
}
