export interface TenderSalesDto {
  type: string; // txMode
  count: number;
  paid: number;
  refund: number;
  tip: number;
  net: number;
}