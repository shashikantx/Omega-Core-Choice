"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCustomerType = void 0;
var StripeCustomerType;
(function (StripeCustomerType) {
    StripeCustomerType[StripeCustomerType["INDIVIDUAL"] = 0] = "INDIVIDUAL";
    StripeCustomerType[StripeCustomerType["CORPORATE"] = 1] = "CORPORATE";
    StripeCustomerType[StripeCustomerType["AGENT"] = 2] = "AGENT";
    StripeCustomerType[StripeCustomerType["ORG"] = 3] = "ORG";
})(StripeCustomerType = exports.StripeCustomerType || (exports.StripeCustomerType = {}));
(function (StripeCustomerType) {
    function getPrefix(type) {
        switch (type) {
            case StripeCustomerType.INDIVIDUAL:
                return 'ind_';
            case StripeCustomerType.CORPORATE:
                return 'corp_';
            case StripeCustomerType.AGENT:
                return 'agent_';
            case StripeCustomerType.ORG:
                return 'org_';
            default:
                return 'ind_';
        }
    }
    StripeCustomerType.getPrefix = getPrefix;
})(StripeCustomerType = exports.StripeCustomerType || (exports.StripeCustomerType = {}));
