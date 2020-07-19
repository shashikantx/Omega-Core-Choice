import { EmployeeTipDto } from "./employee-tip.dto";
import { TotalEmployeeTipDto } from "./total-employee-tip.dto";
export interface EmployeeTipReportDto {
    employeeTip: {
        [key: string]: Array<EmployeeTipDto>;
    };
    ttEmployeeTip: {
        [key: string]: TotalEmployeeTipDto;
    };
}
