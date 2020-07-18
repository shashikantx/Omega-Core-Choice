export interface TotalSalesDto {
  subtotal: number;
  tax: number; // Total Tax
  serviceCharge: number;
  discountCash: number;
  tip: number;
  discount: number; // Total discount
  refund: number;
  orderCount: number; // Total Orders
  percentDiscount: number; // Discount Percentange on Sales
  failedTx: number;
  total: number; // subTotalAfterDiscount + tax

}