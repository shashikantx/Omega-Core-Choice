import { KeyValueDto } from "./key-value.dto";
export declare class KeyValueUserDto {
    userId: string;
    keyValue: KeyValueDto;
    constructor(userId: string, key: string, value: any);
}
