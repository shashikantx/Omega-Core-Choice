import {KeyValueDto} from "./key-value.dto";

export class KeyValueUserDto {

  /* ************************************ Instance Fields ************************************ */
  userId: string;
  keyValue: KeyValueDto;

  /* ************************************ Constructors ************************************ */
  constructor(userId: string, key: string, value: any) {
    this.keyValue = new KeyValueDto(key, value);
    this.userId = userId;
  }

}
