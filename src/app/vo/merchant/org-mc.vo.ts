import {AddressVo} from "@omega/core";

export interface OrgMcVo {
  id: string; // orgId
  mcId: string;
  uid: string; // merchant aadhar number
  pan: string; // merchant PAN Card number
  address: AddressVo;
  tnc: string;
  gumasta: string;

  imgUid: string;
  imgPan: string;
  imgMc: string;
  imgGumasta: string;
}