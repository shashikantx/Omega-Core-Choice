import { UserVo } from "../auth";
export interface RegisterStatusVo {
    deviceId: string;
    amount: number;
    time: Date;
    note: string;
    emp: UserVo;
    paidIn: number;
    paidOut: number;
}
