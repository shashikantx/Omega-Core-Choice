import {AddressVo} from '@parakh/core';

export interface PurchaseOrderVo {
  id: string;

  orgId: string;
  brId: string;
  name: string;
  desc: string;

  address: AddressVo; //Recipient - Vendor
  //address: AddressVo;//Ship To
  //product list and quantity

  modifiedBy: string;
  createdBy: string; //Ordered By
  modified: Date;
  created: Date;

}
