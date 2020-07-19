import { KeyValueDto } from "./key-value.dto";
export declare class KeyValueOrgDto {
    orgId: string;
    keyValue: KeyValueDto;
    constructor(orgId: string, key: string, value: any);
}
