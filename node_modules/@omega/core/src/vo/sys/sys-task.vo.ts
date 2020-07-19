export interface SysTaskVo {
  id: string; // taskName/id
  orgId: string; // org
  brId: string; // branch

  parentOrderId: string; // for ACTION = RECURRING_INVOICE

  payload: string;
  scheduleTime: Date;
  action: string; // SYS_TASK_ACTION - RECURRING_INVOICE

  status: string; // SYS_TASK_STATUS - PENDING, SCHEDULED, PROCESSED

  // audit
  createdBy: string;
  created: Date;
}
