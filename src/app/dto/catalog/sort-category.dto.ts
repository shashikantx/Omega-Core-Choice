import {SortDto} from "./sort.dto";

export interface SortCategoryDto {
  orgId: string;
  brId: string;
  sortList: Array<SortDto>;
}
