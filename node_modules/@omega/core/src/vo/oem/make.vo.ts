import {ModelVo} from './model.vo';

export interface MakeVo {
  id: string; //make name in lower + no space
  name: string;
  model: Array<ModelVo>; // year and color may link with model
  logo: string; //make logo

}
