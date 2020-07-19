import {UserVo} from "../auth";

export interface RegisterStatusVo {
  deviceId: string; // device or terminal id (uuid)
  amount: number; //opening and closing balance
  time: Date;
  note: string;
  emp: UserVo;
  paidIn: number;
  paidOut: number;
}
