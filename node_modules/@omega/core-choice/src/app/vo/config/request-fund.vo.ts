export interface RequestFundVo {
  id: string;

  orgId: string;
  brId: string;

  userId: string; // request by
  //name: string;

  amount: number; // Amount Requesting
  term: string; // Select Terms
  reason: string; // Reason for the funds
  note: string; // Notes

  //audit
  modifiedBy: string;
  createdBy: string;
  modified: Date;
  created: Date;
}
