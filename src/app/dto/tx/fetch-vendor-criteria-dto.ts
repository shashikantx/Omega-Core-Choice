import { AddressVo } from "@omega/core";

export interface FetchVendorCriteriaDto {
  orgId: string;
  brId: string;
  branchId: string;
  startDate: Date;
  endDate: Date;
  address: AddressVo;
  timeStartDate: Date;
  timeEndDate: Date;

}