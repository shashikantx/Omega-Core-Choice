export interface SaleSummaryVo {
  order: number;
  tx: number;
  txAmount: number;
  item: number;

  perItem: {string: number}; // itemId count
  perCategoryItem: {string: number}; // categoryId count
}
