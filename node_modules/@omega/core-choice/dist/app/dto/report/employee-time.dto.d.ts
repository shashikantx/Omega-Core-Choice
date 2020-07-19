import { UserVo } from "@parakh/core";
export interface EmployeeTimeDto {
    emp: UserVo;
    clockIn: Date;
    clockOut: Date;
    hr: number;
}
