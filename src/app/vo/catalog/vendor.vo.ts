import {AddressVo} from '@omega/core';

export interface VendorVo {
   //new fields
   contactName: string;
   email: string;
   fax: string;
   bankName: string;
   accountNo: number;
   accountType: string;
   routingNo: string;
   bankAddress: AddressVo;
   paymentMethod: string;
   creditCardTokenId: string;
   billingAddress: AddressVo;
   shippingAddress: AddressVo;
   status: boolean;
    //new fields
  id: string;

  orgId: string;
  brId: string;
  name: string; // Vendor Name
  desc: string; // Description
  ph: string; //

  namePri: string; //Primary Contact name
  cellPri: string; //Primary Contact cell

  address: AddressVo;

  currency: string; //Currency -
  billingTerm: string; //COD
  /*
  <select name="vendor-terms" id="vendor-terms">
						       <option value="0" selected="">COD</option>
						       <option value="7">Net 7 Days</option>
						       <option value="14">Net 14 Days</option>
						       <option value="20">Net 20 Days</option>
						       <option value="30">Net 30 Days</option>
						       <option value="60">Net 60 Days</option>
						       <option value="90">Net 90 Days</option>
						    </select>
   */

}
