export interface OrgRegionCoordVo {
  id: string; // country - region
  coord: any; //coord: {id: OrgCoordVo, id: OrgCoordVo, ... }; // orgId: Coord;
}

export interface OrgCoordVo {
  id: string; // orgId Note: no need to store, For UI use only
  type: string; // Org Type
  name: string;
  cell: string;
  email: string;
  lat: number;
  lng: number;
  geo: any;
  status: string; //affiliation/status - NOT_APPROVED, IN_PROGRESS (Application submit for review), APPROVED/REJECT (by Admin), LIVE/DEAD (by Admin), ACTIVE/INACTIVE (by org)
}