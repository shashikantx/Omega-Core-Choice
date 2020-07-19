export interface SaleSummaryVo {
    order: number;
    tx: number;
    txAmount: number;
    item: number;
    perItem: {
        string: number;
    };
    perCategoryItem: {
        string: number;
    };
}
