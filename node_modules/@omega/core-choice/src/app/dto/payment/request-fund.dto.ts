export interface RequestFundDto {

  orgId: string;
  brId: string;

  userId: string; // request by

  amount: number; // Amount Requesting
  term: string; // Select Terms
  reason: Array<string>; // Type / Reason for the funds
  note: string; // Notes

}
