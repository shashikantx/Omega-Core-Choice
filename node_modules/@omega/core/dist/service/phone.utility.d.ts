export declare class PhoneUtility {
    static getCountry(ph: string): string;
    static getIsdCode(code: string): number;
    static appendPlus(isdCode: number): string;
    static appendIsdCodeToCellNo(cell: string, countryCode: string): string;
    private static _getCellNumber;
}
