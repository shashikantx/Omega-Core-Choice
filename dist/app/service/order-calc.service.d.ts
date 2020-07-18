import { OrderItemVo, OrderVo } from "../vo/tx";
import { ReportOrderDto } from "../dto/report";
export declare class OrderCalcService {
    getOrderTotalByKey(list: Array<OrderVo>, key: string): number;
    getReportOrderTotalByKey(list: Array<ReportOrderDto>, key: string): number;
    getOrderItemTotalByKey(orderItemList: Array<OrderItemVo>, key: string): number;
    getOrderTotalRefund(list: Array<OrderVo>): number;
    getOrderFailedTxTotal(list: Array<OrderVo>): number;
    private _getOrderItemTotalByKey;
    private _getOrderTotalRefund;
    private _getOrderFailedTxTotal;
    private _getOrderTotalByKey;
    private _getReportOrderTotalByKey;
}
