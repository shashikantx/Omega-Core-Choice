export const ORDER_STATUS = {
  WIP:'WIP',
  DRAFT:'DRAFT', // draft/hold/WIP
  HOLD:'HOLD',
  HOLD_OFFLINE:'HOLD_OFFLINE',
  HOLD_ONLINE:'HOLD_ONLINE',
  NEED_APPROVAL:'NEED_APPROVAL',
  SEND:'SEND', // SEND - just ISSUED generated or last bill - //help in update status if new bill create for same student and same month
  VOID:'VOID',
  DISCARD:'DISCARD', // DISCARD/DELETE if new bill generated in same month and old bill was in issued state
  NOTIFIED:'NOTIFIED',
  IN_TRANSIT:'IN_TRANSIT',
  CHARGED:'CHARGED',
  UNPAID:'UNPAID', // UNPAID/PAID_ZERO, // if new bill generated in T+1 month and old bill was in issued state
  PAID:'PAID', //Settled for less than full balance or Settled Accepted for less than full balance
  PAID_FULL:'PAID_FULL', //Settled in Full - a consumer did pay the full balance and settled the account.
  COMPLETE:'COMPLETE',
  CLOSED:'CLOSED',

  FIND_BOOK:'FIND_BOOK',
  QUOTE:'QUOTE',
  IN_PROGRESS:'IN_PROGRESS', //BOOK_NOW
  ASSIGNED:'ASSIGNED', // org
  CONFIRMED:'CONFIRMED', // org
  REJECTED:'REJECTED',
  CANCEL:'CANCEL', // Cancelled
  CONFIRMED_DRIVER:'CONFIRMED_DRIVER',
};
