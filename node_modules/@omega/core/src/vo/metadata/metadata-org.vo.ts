import {MetadataConfigPosVo} from './metadata-config-pos.vo';
import {EmpClockStatusVo, RegisterVo, ShopRegisterStatusVo} from '../register';

export interface MetadataOrgVo {
  modified: Date;
  modifiedStaff: Date; // server time Staff last modified
  pin: { string: string };

  //POS
  //seq
  lastOrderNumber: number;
  configPos: MetadataConfigPosVo;
  deviceRegister: { string: RegisterVo }; // deviceId, RegisterVo
  registerStatus: { string: ShopRegisterStatusVo }; // registerId, ShopRegisterStatusVo
  empClockStatus: { string: EmpClockStatusVo }; // employeeId, EmpClockStatusVo

}
