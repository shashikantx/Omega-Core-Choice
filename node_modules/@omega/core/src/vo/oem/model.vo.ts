export interface ModelVo {
  id: string; //model name in lower + no space
  name: string;
  color: Array<string>; // year and color may link with model
  trim: Array<string>; // trim level or variant
  start: Date // year launch
  end: Date // year shutdown
  os: string; // android iOS
  version: string //
}
