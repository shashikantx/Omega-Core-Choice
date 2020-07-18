export interface HardwareVo {
    id: string;
    orgId: string;
    brId: string;
    type: string;
    serial: string;
    make: string;
    model: string;
    name: string;
    address: string;
    serviceMap: {
        string: boolean;
    };
}
