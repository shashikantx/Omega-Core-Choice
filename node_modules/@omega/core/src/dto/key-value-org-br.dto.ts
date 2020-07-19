import {KeyValueOrgDto} from "./key-value-org.dto";

export class KeyValueOrgBrDto extends KeyValueOrgDto {

  /* ************************************ Instance Fields ************************************ */
  brId: string;

  /* ************************************ Constructors ************************************ */
  constructor(orgId: string, brId: string, key: string, value: any) {
    super(orgId, key, value);
    this.brId = brId;
  }

}
