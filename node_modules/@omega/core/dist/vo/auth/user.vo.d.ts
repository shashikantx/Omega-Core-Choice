import { AddressVo } from '../address.vo';
import { SettingVo } from '../setting.vo';
import { PushTokenVo } from '../push-token.vo';
import { AclVo } from './acl.vo';
import { AclCustVo } from './acl-cust.vo';
import { MetadataUserVo } from '../metadata';
import { PosUserVo } from '../pos';
import { RideUserVo } from '../ride';
import { ImageDataVo } from '../doc';
import { ItrUserVo } from '../itr';
export interface UserVo {
    id: string;
    sub: string;
    cell: string;
    email: string;
    fb: string;
    go: string;
    goId: string;
    img: string;
    cover: string;
    role: string;
    cust: {
        string: AclCustVo;
    };
    emp: {
        string: AclVo;
    };
    pushToken: PushTokenVo;
    stripeCustId: string;
    payntCustId: string;
    cell2: string;
    email2: string;
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
    doB: Date;
    doD: Date;
    doA: Date;
    poB: string;
    gender: string;
    religion: string;
    bloodGroup: string;
    gid: number;
    pan: string;
    gidImg: {
        string: ImageDataVo;
    };
    panImg: {
        string: ImageDataVo;
    };
    father: UserVo;
    mother: UserVo;
    modifiedBy: string;
    createdBy: string;
    modified: Date;
    created: Date;
    ride: RideUserVo;
    pos: PosUserVo;
    itr: ItrUserVo;
}
