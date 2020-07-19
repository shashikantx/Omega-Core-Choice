export declare enum StripeCustomerType {
    INDIVIDUAL = 0,
    CORPORATE = 1,
    AGENT = 2,
    ORG = 3
}
export declare namespace StripeCustomerType {
    function getPrefix(type: StripeCustomerType): "ind_" | "corp_" | "agent_" | "org_";
}
