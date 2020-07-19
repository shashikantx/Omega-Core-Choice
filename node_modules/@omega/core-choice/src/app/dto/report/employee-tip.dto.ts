import {UserVo} from "@parakh/core";

export interface EmployeeTipDto {
  emp: UserVo;
  orderId: string;
  orderTotal: number;
  date: Date;
  txMode: string;
  tip: number
  credit: number;
  cash: number;
}