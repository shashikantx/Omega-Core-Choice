import {UserVo} from '@parakh/core';

import {OrderItemVo} from './order-item.vo';

export interface KotVo {
  id: string;

  no: string; // kot number
  date: Date; // Order date

  items: Array<OrderItemVo>;
  status: string; // KOT_STATUS - [send, cooking, ready, serve]
  lock: boolean; // send for payment

  //Audit
  crtBy: UserVo; // employee
  created: Date; // record created
  modBy: UserVo; // employee
  modified: Date; // record modified

  // Audit trail

}
