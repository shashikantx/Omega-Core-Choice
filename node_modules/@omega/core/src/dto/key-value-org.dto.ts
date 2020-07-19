import {KeyValueDto} from "./key-value.dto";

export class KeyValueOrgDto {

  /* ************************************ Instance Fields ************************************ */
  orgId: string;
  keyValue: KeyValueDto;

  /* ************************************ Constructors ************************************ */
  constructor(orgId: string, key: string, value: any) {
    this.keyValue = new KeyValueDto(key, value);
    this.orgId = orgId;
  }

}
