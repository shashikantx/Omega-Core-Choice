import {MakeVo} from "./make.vo";

export interface OemVo {
  id: string; // OEM_TYPE - VEHICLE, TERMINAL, PRINTER, DRAWER
  makeList: Array<MakeVo>; // year and color may link with model
}
