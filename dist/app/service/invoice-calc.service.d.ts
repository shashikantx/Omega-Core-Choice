import { OrderVo } from "../vo/tx";
import { TxCustVo } from "@parakh/core";
export declare class InvoiceCalcService {
    calcInvoiceAmount(invoice: OrderVo): OrderVo;
    getTotalPaid(list: Array<TxCustVo>): number | undefined;
    private _getSubTotal;
    private _getpayableAmount;
    private _getTotalPaid;
    private _getTotalTax;
}
