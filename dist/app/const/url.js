"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
/**
 * ApiService -
 * we can inject this service into any component to get Api Endpoint.
 */
// in java @see ApiConstants.ENDPOINT
var ENV_URL = ''; // producation fn
// const ENV_URL = 'http://localhost:5000'; // local java server
// const ENV_URL = 'http://localhost:3004'; //mock json server
// const ENV_URL = 'https://aa805c91.ngrok.io'; // proxy server
// const ENV_URL = 'https://api.1800limo.xyz';// producation
var BASE = ENV_URL + '/api'; // + '/api/edu/v1';
var BASE_REST = ENV_URL + '/rest';
// major operations  api/...
var CHANNEL = BASE + '/channel';
var ASSET = BASE + '/asset';
var DATA_CLEAN = BASE + '/data-clean';
var DEVICE = BASE + '/device';
var PROFILE = BASE + '/profile'; // GET
var EMPLOYEE = BASE + '/employee';
var REPORT_SECURE = BASE + '/report';
// const REPORT = BASE_PUBLIC + '/report';
// const REPORT_PUBLIC = PUBLIC + '/report';
// const MJR_REPORT = BASE_REST + '/report';
// ******************************************
var APP_DATA = BASE + '/app-data';
var MJR_CATALOG = BASE + '/catalog';
var MJR_ORG = BASE + '/org';
var MJR_BRANCH = BASE + '/branch';
var MJR_TX = BASE + '/tx';
var MJR_CONFIG = BASE + '/config';
var MJR_FUND = BASE + '/fund';
var MJR_REGISTER = BASE + '/register';
// const MJR_PAYMENT = BASE + '/payment';
var MJR_SETUP = BASE + '/setup';
var MJR_REPORT = BASE + '/report';
// const MJR_USER = BASE + '/user';
var MJR_CAREER = BASE + '/career';
var MJR_ITR = BASE + '/itr';
// Common operations
var PARTLY_UPDATE = '/partly-update';
var ADD_UPDATE = '/add-update';
var ADD_UPDATE_ALL = '/add-update-all';
var DELETE_RECORD = '/delete';
var LIST = '/list';
/**
 * END_POINT URL URL
 */
exports.URL = {
    //APP_DATA operations api/app-data/...
    TEST_JSON: APP_DATA + '/test',
    VEHICLE_MAKE: APP_DATA + '/vehicle-make',
    // MJR_CAREER operations /api/career/...
    RESUME: MJR_CAREER + '/resume',
    // MJR_ITR operations /api/itr/...
    ITR_ADD_UPDATE: MJR_ITR + ADD_UPDATE,
    ITR_DOC: MJR_ITR + '/doc',
    ITR_ALL: MJR_ITR + '/all-request',
    // ************************************************************************************************
    //MJR_CATALOG operations api/catalog/...
    CATEGORY: MJR_CATALOG + '/category',
    CATEGORY_SEQ: MJR_CATALOG + '/category-seq',
    ORG: MJR_CATALOG + '/org',
    ITEM_PRODUCT: MJR_CATALOG + '/item',
    ITEM_PRODUCT_SEQ: MJR_CATALOG + '/item-seq',
    ITEM_PRODUCT_PARTLY_UPDATE: MJR_CATALOG + '/item' + PARTLY_UPDATE,
    MANUFACTURER: MJR_CATALOG + '/manufacturer',
    // PRODUCT_CATALOG: MJR_CATALOG + '/product',
    BRANCH: MJR_CATALOG + '/branch',
    VENDOR: MJR_CATALOG + '/vendor',
    COUPON: MJR_CATALOG + '/coupon',
    DISCOUNT: MJR_CATALOG + '/discount',
    DISCOUNT_TYPE: MJR_CATALOG + '/discount-type',
    MODIFIER: MJR_CATALOG + '/modifier',
    PURCHASE_ORDER: MJR_CATALOG + '/purchase-order',
    //setup
    SETUP_PARTNERSHIP: MJR_SETUP + '/partnership',
    SETUP_STATUS: MJR_SETUP + '/status',
    SETUP_ACCEPT_TNC: MJR_SETUP + '/accept-tnc',
    SUBMIT_REQUEST_FOR_AFFILIATION: MJR_SETUP + '/submit-request-for-affiliation',
    //tx api/fund/...
    REQUEST_FUND: MJR_FUND + '/request-fund',
    //register api/register/...
    REGISTER_EMP_CLOCK: MJR_REGISTER + '/emp-clock',
    REGISTER_STATUS: MJR_REGISTER + '/status',
    REGISTER_ADD_UPDATE_DEFAULT: MJR_REGISTER + '/add-default-register',
    REGISTER_ADD_UPDATE: MJR_REGISTER + ADD_UPDATE,
    REGISTER_LIST: MJR_REGISTER + LIST,
    //tx api/tx/...
    CHARGE_ORDER_V2: MJR_TX + '/charge-order-v2',
    CHARGE_ORDER: MJR_TX + '/charge-order',
    CHARGE_INVOICE: MJR_TX + '/charge-invoice',
    ORDER_ALL: MJR_TX + '/all-order',
    ORDER_ADD_UPDATE: MJR_TX + '/add-update-order',
    ORDER_DELETE: MJR_TX + '/delete-order',
    ORDER_UPDATE_STATUS: MJR_TX + '/update-order-status',
    ORDER_CUSTOMER: MJR_TX + '/order-customer',
    ORDER_GET: MJR_TX + '/get-order',
    STATEMENT_ENTERPRISE: MJR_TX + '/statement-enterprise',
    STATEMENT_CUSTOMER: MJR_TX + '/statement-customer',
    INVOICE_ENTERPRISE: MJR_TX + '/invoice-enterprise',
    INVOICE_CUSTOMER: MJR_TX + '/invoice-customer',
    PAY_INVOICE_CARD: MJR_TX + '/pay-invoice-card',
    // INVOICE_ALL: MJR_TX + '/all-invoice',
    INVOICE_ADD_UPDATE: MJR_TX + '/add-update-invoice',
    INVOICE_ADD_UPDATE_PARTLY_UPDATE: MJR_TX + '/add-update-invoice-partially',
    INVOICE_DELETE: MJR_BRANCH + '/delete-invoice',
    INVOICE_PDF: MJR_TX + '/pdf-invoice',
    INVOICE_UPDATE_STATUS: MJR_TX + '/update-invoice-status',
    RECEIPT_ADD_UPDATE: MJR_TX + '/add-update-receipt',
    RECEIPT_ALL: MJR_TX + '/all-receipt',
    RECEIPT_DELETE: MJR_TX + '/delete-receipt',
    MAIL_INVOICE: MJR_TX + '/mail-invoice',
    PAY: MJR_TX + '/pay',
    //PAY_INVOICE: MJR_TX + '/pay-invoice',
    ESTIMATE_ADD_UPDATE: MJR_TX + '/add-update-estimate',
    ESTIMATE_CUSTOMER: MJR_TX + '/estimate-customer',
    ESTIMATE_ENTERPRISE: MJR_TX + '/estimate-enterprise',
    //MJR_CONFIG api/config/...
    SETTING_ENT: MJR_CONFIG + '/setting-ent',
    HARDWARE: MJR_CONFIG + '/hardware',
    COMP: MJR_CONFIG + '/comp',
    GATEWAY: MJR_CONFIG + '/gateway',
    MESSAGING: MJR_CONFIG + '/messaging',
    SALE_TYPE: MJR_CONFIG + '/sale-type',
    TABLE_LAYOUT: MJR_CONFIG + '/table-layout',
    TENDER_TYPE: MJR_CONFIG + '/tender-type',
    THIRD_PARTY: MJR_CONFIG + '/third-party',
    ORDER_SUMMARY_REPORT: MJR_REPORT + '/order-summary-report',
    SIMPLE_DAILY_REPORT: MJR_REPORT + '/simple-daily-report',
    SALES_BY_PRODUCT_REPORT: MJR_REPORT + '/sales-by-product-report',
    HOURLY_SALES_REPORT: MJR_REPORT + '/hourly-sales-report',
    MONTHLY_SALES_REPORT: MJR_REPORT + '/monthly-sales-report',
    WEEKLY_SALES_REPORT: MJR_REPORT + '/weekly-sales-report',
    EMPLOYEE_TIME_REPORT: MJR_REPORT + '/emp-time-report',
    EMPLOYEE_TIP_REPORT: MJR_REPORT + '/emp-tip-report',
    // ************************************************************************************************
    Z_LAST: 'Do-Not-Delete'
};
