import { AllTaxDto } from "../dto/tax";
import { OrderItemVo } from "../vo/tx";
export declare class TaxCalcService {
    getItemTax(item: OrderItemVo, defaultTax: AllTaxDto, taxable: boolean): number;
    private _getTax;
    private _getItemTax;
    private _getCountyTax;
    private _getTotalItemTax;
    private _getTaxrate;
    private _setAllTaxDto;
}
