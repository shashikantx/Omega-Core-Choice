export interface SysTaskVo {
    id: string;
    orgId: string;
    brId: string;
    parentOrderId: string;
    payload: string;
    scheduleTime: Date;
    action: string;
    status: string;
    createdBy: string;
    created: Date;
}
