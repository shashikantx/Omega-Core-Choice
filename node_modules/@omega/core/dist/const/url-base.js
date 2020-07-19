"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_BASE = void 0;
var ENV_URL = ''; // producation fn
var BASE = ENV_URL + '/api'; // + '/api/edu/v1';
// major operations  api/...
var MJR_APP = BASE + '/app';
var MJR_AUTH = BASE + '/auth';
var MJR_REGISTRATION = BASE + '/registration'; // GET
var APP_DATA = BASE + '/app-data';
var MJR_METADATA = BASE + '/metadata';
var MJR_ORG = BASE + '/org';
var MJR_BRANCH = BASE + '/branch';
var MJR_PAYMENT = BASE + '/payment';
var MJR_USER = BASE + '/user';
var MJR_DEVICE = BASE + '/device';
// Common operations
var PARTLY_UPDATE = '/partly-update';
var ADD_UPDATE = '/add-update';
var ADD_UPDATE_ALL = '/add-update-all';
var DELETE = '/delete';
var LIST = '/list';
var DETAIL = '/detail';
// APP operations /api/app/...
/**
 * END_POINT URL URL
 */
exports.URL_BASE = {
    // APP operations /api/app/...
    HEALTH: MJR_APP + '/health',
    SYNC: MJR_APP + '/sync',
    SETTING: MJR_APP + '/setting',
    SETTING_BASIC: MJR_APP + '/setting-basic',
    SHARE_DATA: MJR_APP + '/share-data',
    USER_PROFILE: MJR_APP + '/user-profile',
    USER_PAN_PHOTO: MJR_APP + '/pan/photo',
    USER_GID_PHOTO: MJR_APP + '/gid/photo',
    USER_PROFILE_PHOTO: MJR_APP + '/user-profile/photo',
    EMP_PROFILE_PHOTO: MJR_APP + '/emp-profile/photo',
    USER_PROFILE_COVER: MJR_APP + '/user-profile/cover',
    PUSH_NOTIFICATION: MJR_APP + '/push-notification',
    // AUTH operations /api/auth/...
    CUSTOM_ACCESS_TOKEN: MJR_AUTH + '/custom-access-token',
    SIGNIN: MJR_AUTH + '/signin',
    SIGNOUT: MJR_AUTH + '/signout',
    // REGISTRATION operations /api/registration/...
    REG_DEVICE: MJR_REGISTRATION + '/device',
    //APP_DATA operations api/app-data/...
    TEST_JSON: APP_DATA + '/test',
    VEHICLE_MAKE: APP_DATA + '/vehicle-make',
    BASE_RATE: APP_DATA + '/base-rate',
    //org
    ORG_LIST: MJR_ORG + '/org-list',
    ORG_LOOSE_ADD_UPDATE: MJR_ORG + '/add-update-loose-org',
    // ORG_LOOSE_ALL: MJR_ORG + '/all-loose-org',
    AFFILIATION_STATUS_CHANGE: MJR_ORG + '/affiliation-status-change',
    // AFFILIATION_IN_PROGRESS: MJR_ORG + '/affiliation-in-progress', //list of org - application submit for review
    // ORG_ALL: MJR_ORG + '/all-org',
    ORG_ADD_UPDATE: MJR_ORG + '/add-update',
    ORG_DETAIL: MJR_ORG + '/detail',
    ORG_NETWORK: MJR_ORG + '/network',
    ORG_DELETE: MJR_ORG + '/delete',
    ORG_PHOTO: MJR_ORG + '/photo',
    ORG_STATUS_CHANGE: MJR_ORG + '/status-change',
    //branch
    BRANCH_ALL: MJR_BRANCH + '/all-branch',
    BRANCH_ADD_UPDATE: MJR_BRANCH + '/add-update',
    BRANCH_DETAIL: MJR_BRANCH + '/detail',
    BRANCH_DELETE: MJR_BRANCH + '/delete',
    //USER operations api/user/...
    ORG_LOOSE_DELETE: MJR_USER + '/delete-loose-org',
    USER_ADD_UPDATE: MJR_USER + '/add-update-user',
    USER_DELETE: MJR_USER + '/delete-user',
    USER_ACCOUNT_ADD_UPDATE: MJR_USER + '/add-update-user-account',
    USER_LOCK_UNLOCK_ALL: MJR_USER + '/lock-unlock-all',
    USER_LOCK_UNLOCK: MJR_USER + '/lock-unlock',
    USER_CHK_USER_CELL: MJR_USER + '/check-user-cell',
    USER_DETAIL: MJR_USER + '/user-detail',
    ACL_DELETE: MJR_USER + '/delete-acl',
    ACL_ADD_UPDATE: MJR_USER + '/add-update-acl',
    SUPPORT_STAFF_LIST: MJR_USER + '/support-staff-list',
    SUPPORT_STAFF_ADD_UPDATE: MJR_USER + '/add-update-support-staff',
    SUPPORT_STAFF_DELETE: MJR_USER + '/delete-support-staff',
    STAFF_LIST: MJR_USER + '/staff-list',
    STAFF_ADD_UPDATE: MJR_USER + '/add-update-staff',
    STAFF_DELETE: MJR_USER + '/delete-staff',
    STAFF_PIN_ADD_UPDATE: MJR_USER + '/add-update-staff-pin',
    CUSTOMER_LIST: MJR_USER + '/customer-list',
    CUSTOMER_ADD_UPDATE: MJR_USER + '/add-update-customer',
    CUSTOMER_DELETE: MJR_USER + '/delete-customer',
    // ************************************************************************************************
    // MJR_METADATA operations /api/metadata/...
    GLOBAL_ORG_STAFF: MJR_METADATA + '/global-org-staff',
    METADATA_ORG: MJR_METADATA + '/org',
    METADATA_CONFIG: MJR_METADATA + '/config',
    METADATA_CONFIG_ORG: MJR_METADATA + '/config-org',
    METADATA_CONFIG_USER: MJR_METADATA + '/config-user',
    METADATA_CONFIG_ORG_BR: MJR_METADATA + '/config-org-br',
    METADATA_ORG_BR: MJR_METADATA + '/org-br',
    // MJR_DEVICE operations /api/device/...
    DEVICE_ADD_UPDATE: MJR_DEVICE + ADD_UPDATE,
    DEVICE_LIST: MJR_DEVICE + LIST,
    // ************************************************************************************************
    // MJR_PAYMENT operations api/payment/...
    PAYMENT_ADD_CUSTOMER: MJR_PAYMENT + '/add-customer',
    PAYMENT_SOURCE_GET: MJR_PAYMENT + '/get-source',
    PAYMENT_SOURCE_SAVE: MJR_PAYMENT + '/save-source',
    PAYMENT_SOURCE_HOLD: MJR_PAYMENT + '/hold-source',
    PAYMENT_SOURCE_DELETE: MJR_PAYMENT + '/delete-source',
    PAYMENT_SOURCE_CHANGE_DEFAULT: MJR_PAYMENT + '/change-default-source',
    PAYMENT_SOURCE_CHARGE: MJR_PAYMENT + '/charge-source',
    //  PAYMENT_SOURCE_HOLD_CHARGE: MJR_PAYMENT + '/charge-hold-source',
    Z_LAST: 'Do-Not-Delete'
};
