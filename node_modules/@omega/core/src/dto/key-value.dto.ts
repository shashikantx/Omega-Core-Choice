export class KeyValueDto {

  /* ************************************ Instance Fields ************************************ */
  key: string;
  value: any;

  /* ************************************ Constructors ************************************ */
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

}
