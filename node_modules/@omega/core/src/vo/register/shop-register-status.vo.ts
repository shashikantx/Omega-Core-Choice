import {RegisterStatusVo} from "./register-status.vo";

export interface ShopRegisterStatusVo {
  id: string;
  orgId: string; // org
  brId: string; // branch - brId=master for master branch level access

  registerId: string; // registerId

  openRegister: RegisterStatusVo;
  closeRegister: RegisterStatusVo;

  gatewayResPax: any; // TransactionMode.PAX //Note: this will be response from the terminal
  gatewayResPaynt: any;

  status: string; // SHOP_REGISTER_STATUS - OPEN/CLOSED
}
