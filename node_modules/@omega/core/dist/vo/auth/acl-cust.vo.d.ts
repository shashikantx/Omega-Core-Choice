export interface AclCustVo {
    active: boolean;
    enrollAt: Date;
    membershipLevel: string;
    retailCust: boolean;
    invoiceCust: boolean;
    recurringCust: boolean;
    giftCard: boolean;
    acceptCheck: boolean;
    receiveText: boolean;
    receiveEmail: boolean;
    rewardMember: boolean;
    customerSince: string;
    annualSpent: string;
    taxId: string;
    cardOnFile: string;
}
