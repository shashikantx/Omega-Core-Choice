import { SortDto } from "./sort.dto";
export interface SortItemDto {
    categoryId: string;
    orgId: string;
    brId: string;
    sortList: Array<SortDto>;
}
