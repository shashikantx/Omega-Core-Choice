import {AddressVo} from '../address.vo';

export interface OrgBrVo {
  id: string; //brId  for master branch id=master

  orgId: string; //TODO no need

  name: string; // Branch Name
  type: string; // Branch type
  address: AddressVo;

  ph: string;
  email: string;
  desc: string;

  // master: boolean;

  status: string; //Branch Status
  del: boolean;

}
