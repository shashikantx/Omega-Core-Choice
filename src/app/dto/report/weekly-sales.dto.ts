export interface WeeklySalesDto {
  sub: number;
  tax: number;
  discount: number;
  total: number;
  qty: number;
  startDate: Date;
  endDate: Date;
  week: number;
}