import { WeeklySalesDto } from "./weekly-sales.dto";
import { TotalWeeklySalesDto } from "./total-weekly-sales.dto";
export interface WeeklySalesReportDto {
    weeklySalesDtoList: Array<WeeklySalesDto>;
    ttWeeklySalesDto: TotalWeeklySalesDto;
}
