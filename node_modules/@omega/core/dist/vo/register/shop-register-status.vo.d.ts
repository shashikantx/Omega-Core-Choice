import { RegisterStatusVo } from "./register-status.vo";
export interface ShopRegisterStatusVo {
    id: string;
    orgId: string;
    brId: string;
    registerId: string;
    openRegister: RegisterStatusVo;
    closeRegister: RegisterStatusVo;
    gatewayResPax: any;
    gatewayResPaynt: any;
    status: string;
}
