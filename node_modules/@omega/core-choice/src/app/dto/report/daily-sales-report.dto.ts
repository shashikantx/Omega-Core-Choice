import {TenderSalesDto} from "./tender-sales.dto";
import {CategorySalesDto} from "./category-sales.dto";
import {TotalSalesDto} from "./total-sales.dto";
import {PendingParkSalesDto} from "./pending-park-sales.dto";
import {TotalTenderSalesDto} from "./total-tender-sales.dto";
import {TotalCategorySalesDto} from "./total-category-sales.dto";

export interface DailySalesReportDto {
  // Total Sales
  totalSale: TotalSalesDto;

  // Payments/Refunds/Tips
  salesByTender: Array<TenderSalesDto>;
  ttSalesByTender: TotalTenderSalesDto;

  pendingParkSales: PendingParkSalesDto;


  salesByCategory: Array<CategorySalesDto>;
  ttCategorySalesVo: TotalCategorySalesDto;

  salesByCardType: Array<TenderSalesDto>;
  ttSalesByCardType: TotalTenderSalesDto;
}