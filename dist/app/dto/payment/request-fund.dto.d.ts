export interface RequestFundDto {
    orgId: string;
    brId: string;
    userId: string;
    amount: number;
    term: string;
    reason: Array<string>;
    note: string;
}
