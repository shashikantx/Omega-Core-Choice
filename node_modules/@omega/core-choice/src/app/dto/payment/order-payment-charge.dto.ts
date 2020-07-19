import {PaymentChargeDto} from '@parakh/core';
import {OrderVo} from '../../vo/tx';

export interface OrderPaymentChargeDto {
  order: OrderVo;
  paymentCharge: PaymentChargeDto;
  postOrder: boolean;
}
