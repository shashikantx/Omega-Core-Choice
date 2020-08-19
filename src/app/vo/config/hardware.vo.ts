import { AddressVo } from "@omega/core";

export interface HardwareVo {
  //new fields
  validity: Date;
  branch: string;
  location: AddressVo;
  subscriptionDate: Date;
  billingFrequency: string;
  ipAddress: string; 
  status: boolean;
  terminalId: string;
  //new fields
  id: string;

  orgId: string;
  brId: string;
  type: string; // HARDWARE_TYPE - TERMINAL, PRINTER

  serial: string; //

  make: string; // EPSON
  model: string; // EPSON_TM_M30
  name: string;
 

  serviceMap: { string: boolean }; // HARDWARE_SERVICE_MAP - KITCHEN POS(CASHIER)

}
