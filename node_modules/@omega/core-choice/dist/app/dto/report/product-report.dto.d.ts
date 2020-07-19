import { ProductSalesDto } from "./product-sales.dto";
import { TotalProductSalesDto } from "./total-product-sales.dto";
export interface ProductReportDto {
    productSalesVo: Array<ProductSalesDto>;
    ttProductSalesVo: TotalProductSalesDto;
}
