import {MakeVo} from "../../vo/oem";

export interface OemMakeDto {
  type: string; // OEM_TYPE - VEHICLE, TERMINAL, PRINTER, DRAWER
  make: MakeVo
}
