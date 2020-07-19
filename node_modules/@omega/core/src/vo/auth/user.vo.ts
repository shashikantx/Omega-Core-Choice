import {AddressVo} from '../address.vo';
import {SettingVo} from '../setting.vo';
import {PushTokenVo} from '../push-token.vo';
import {AclVo} from './acl.vo';
import {AclCustVo} from './acl-cust.vo';
import {MetadataUserVo} from '../metadata';
import {PosUserVo} from '../pos';
import {RideUserVo} from '../ride';
import {ImageDataVo} from '../doc';
import {ItrUserVo} from '../itr';

export interface UserVo {
  /* use this id to link other user profile with main profile */
  id: string;
  /* Subject (sub) - identifies the subject of the JWT. */
  sub: string;
  cell: string; // +1 9493091258
  email: string;
  fb: string;
  go: string;
  goId: string;

  img: string;
  cover: string;

  role: string;

  // { [name: string]: boolean }
  cust: { string: AclCustVo }; // customer of org e.g. {orgId1: true, orgId2: false, orgId3: true}
  emp: { string: AclVo }; // employee of >> account link to company/org/agent/corp
  /*
  custx : Array<string>;
  empx: Array<AclVo>;

  colRef.where('emp.org1x.active', '==', true);
  colRef.where('custx', 'array-contains', 'org1x');
  colRef.where('empx', 'array-contains', aclVo);
  */

  //FCM
  pushToken: PushTokenVo;

  //Payment
  stripeCustId: string;
  payntCustId: string;

  //user-ext
  cell2: string; //unverified
  email2: string; //unverified
  cellAll: Array<string>;
  emailAll: Array<string>;

  address: AddressVo;
  setting: SettingVo;
  metadata: MetadataUserVo;
  deviceList: Array<string>;
  
  title: string;
  fName: string;
  mName: string;
  lName: string;
  businessName: string;
  businessPhone: string;

  doB: Date; // Date of Birth
  doD: Date; // Date of Death
  doA: Date; // Date of Anniversary
  poB: string;
  gender: string;
  religion: string;
  bloodGroup: string;
  gid: number; //govt id (i.e. uid/Aadhar, SSN)
  pan: string;
  gidImg: { string: ImageDataVo }; // image name and its data
  panImg: { string: ImageDataVo };

  father: UserVo;
  mother: UserVo;

  //audit
  modifiedBy: string;
  createdBy: string;
  modified: Date;
  created: Date;

  ride: RideUserVo;
  pos: PosUserVo;
  itr: ItrUserVo;

}
