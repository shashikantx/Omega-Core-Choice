import { AddressVo } from "@omega/core";
export interface HardwareVo {
    validity: Date;
    branch: string;
    location: AddressVo;
    subscriptionDate: Date;
    billingFrequency: string;
    ipAddress: string;
    status: boolean;
    terminalId: string;
    id: string;
    orgId: string;
    brId: string;
    type: string;
    serial: string;
    make: string;
    model: string;
    name: string;
    serviceMap: {
        string: boolean;
    };
}
