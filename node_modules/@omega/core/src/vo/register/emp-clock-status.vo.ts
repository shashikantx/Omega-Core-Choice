export interface EmpClockStatusVo {
  id: string;
  orgId: string; // org
  brId: string; // branch - brId=master for master branch level access
  empId: string; // employee id
  inTime: Date;
  outTime: Date;
  status: string; // EMP_CLOCK_STATUS - IN/OUT
}
