import { EmployeeTimeDto } from "./employee-time.dto";
export interface EmployeeTimeReportDto {
    employeeTimeList: {
        [key: string]: Array<EmployeeTimeDto>;
    };
}
