export interface FetchOrderCriteriaDto {
  orgId: string;
  brId: string;
  type: string;
  status: string;
  startDate: Date;
  endDate: Date;
  empId: string;
  custId: string;
  registerId: string;
}