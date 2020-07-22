import { PaymentChargeDto } from '@omega/core';
import { OrderVo } from '../../vo/tx';
export interface OrderPaymentChargeDto {
    order: OrderVo;
    paymentCharge: PaymentChargeDto;
    postOrder: boolean;
}
