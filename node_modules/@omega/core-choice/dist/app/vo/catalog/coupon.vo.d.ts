import { ItemVo } from './index';
export interface CouponVo {
    id: string;
    orgId: string;
    brId: string;
    type: string;
    desc: string;
    start: Date;
    end: Date;
    price: number;
    max: number;
    discount: number;
    unit: number;
    item: ItemVo;
}
