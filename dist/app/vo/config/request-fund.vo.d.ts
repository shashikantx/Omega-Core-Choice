export interface RequestFundVo {
    id: string;
    orgId: string;
    brId: string;
    userId: string;
    amount: number;
    term: string;
    reason: string;
    note: string;
    modifiedBy: string;
    createdBy: string;
    modified: Date;
    created: Date;
}
