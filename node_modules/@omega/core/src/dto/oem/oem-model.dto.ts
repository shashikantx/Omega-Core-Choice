import {ModelVo} from '../../vo/oem';

export interface OemModelDto {
  type: string; // HARDWARE_TYPE - VEHICLE, TERMINAL, PRINTER, DRAWER
  makeId: string
  model: ModelVo
}
