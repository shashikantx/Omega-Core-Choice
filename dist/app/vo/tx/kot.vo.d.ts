import { UserVo } from '@parakh/core';
import { OrderItemVo } from './order-item.vo';
export interface KotVo {
    id: string;
    no: string;
    date: Date;
    items: Array<OrderItemVo>;
    status: string;
    lock: boolean;
    crtBy: UserVo;
    created: Date;
    modBy: UserVo;
    modified: Date;
}
