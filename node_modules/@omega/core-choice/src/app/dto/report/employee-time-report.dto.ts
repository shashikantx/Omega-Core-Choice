import {EmployeeTimeDto} from "./employee-time.dto";
import {TotalEmployeeTimeDto} from "./total-employee-time.dto";

export interface EmployeeTimeReportDto {
  employeeTimeList: { [key: string]: Array<EmployeeTimeDto> };
  // ttTime: TotalEmployeeTimeDto;
}