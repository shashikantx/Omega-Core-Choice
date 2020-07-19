export interface HardwareVo {
  id: string;

  orgId: string;
  brId: string;
  type: string; // HARDWARE_TYPE - TERMINAL, PRINTER

  serial: string; //

  make: string; // EPSON
  model: string; // EPSON_TM_M30
  name: string;
  address: string; // IP

  serviceMap: { string: boolean }; // HARDWARE_SERVICE_MAP - KITCHEN POS(CASHIER)

}
