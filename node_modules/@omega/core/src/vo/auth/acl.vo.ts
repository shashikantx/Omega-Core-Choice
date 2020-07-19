export interface AclVo {
  role: string;
  orgId: string; // org
  brId: string; // branch - brId=master for master branch level access
  active: boolean;
  status: string; // org/branch status
}
