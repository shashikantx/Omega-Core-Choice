import { CategorySalesDto, HourlySalesDto, ProductReportDto, WeeklySalesDto } from "../dto/report";
import { UserVo } from "@omega/core";
export declare class ReportCsvUtilityService {
    getHourlyReportVoForCsv(report: Array<HourlySalesDto>): any;
    getProductReportVoForCsv(report: ProductReportDto): any;
    getCustomerReportVoForCsv(report: Array<UserVo>): any;
    getCategoryReportVoForCsv(report: Array<CategorySalesDto>): any;
    getWeeklyReportVoForCsv(report: Array<WeeklySalesDto>): any;
    private _getFromatedDate;
    private _getGenderStr;
}
