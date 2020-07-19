export interface AclCustVo {
  active: boolean;
  enrollAt: Date; // Enrollment Date
  membershipLevel: string; //role/membership like privileged / gold / silver etc customer

  // Customer type according to choice pos
  retailCust: boolean;
  invoiceCust: boolean;
  recurringCust: boolean;
  giftCard: boolean;
  acceptCheck: boolean;
  receiveText: boolean;
  receiveEmail: boolean;
  rewardMember: boolean;

  customerSince: string; // Needs Discussion
  annualSpent: string;
  taxId: string;
  cardOnFile: string;
}
