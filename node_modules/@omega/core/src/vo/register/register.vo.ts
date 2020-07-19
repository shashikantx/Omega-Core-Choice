export interface RegisterVo {
  id: string;
  orgId: string; // org
  brId: string; // branch - brId=master for master branch level access

  name: string;

  status: string; // REGISTER_STATUS - ACTIVE, INACTIVE, DELETED
}
