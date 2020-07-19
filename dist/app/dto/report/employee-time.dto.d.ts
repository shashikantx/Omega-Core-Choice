import { UserVo } from "@omega/core";
export interface EmployeeTimeDto {
    emp: UserVo;
    clockIn: Date;
    clockOut: Date;
    hr: number;
}
