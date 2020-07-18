export const ORDER_STATUS_TX = {
  UNPAID:'UNPAID', // UNPAID/PAID_ZERO, // if new bill generated in T+1 month and old bill was in issued state
  PAID:'PAID', //Settled for full balance
  PAID_PARTLY:'PAID_PARTLY', //Settled for less than full balance or Settled Accepted for less than full balance
  VOID:'VOID',
  REFUND: 'REFUND',
  REFUND_PARTLY: 'REFUND_PARTLY',
};
