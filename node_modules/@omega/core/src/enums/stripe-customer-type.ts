export enum StripeCustomerType {
  INDIVIDUAL, // Individual + OrgType

  CORPORATE, // company business
  AGENT,
  ORG
}

export namespace StripeCustomerType {
  export function getPrefix(type: StripeCustomerType) {
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
}