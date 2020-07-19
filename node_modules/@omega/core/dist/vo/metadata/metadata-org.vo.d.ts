import { MetadataConfigPosVo } from './metadata-config-pos.vo';
import { EmpClockStatusVo, RegisterVo, ShopRegisterStatusVo } from '../register';
export interface MetadataOrgVo {
    modified: Date;
    modifiedStaff: Date;
    pin: {
        string: string;
    };
    lastOrderNumber: number;
    configPos: MetadataConfigPosVo;
    deviceRegister: {
        string: RegisterVo;
    };
    registerStatus: {
        string: ShopRegisterStatusVo;
    };
    empClockStatus: {
        string: EmpClockStatusVo;
    };
}
