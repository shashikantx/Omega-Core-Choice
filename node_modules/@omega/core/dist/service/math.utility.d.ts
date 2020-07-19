/**
 * MathService -
 */
export declare class MathUtility {
    static round(value: number, precision: number): number;
    static number(n: any): number;
    static sum(...vals: any[]): number;
    /**
     *
     * @param {number} unitVal = charge
     * @param {number} quantity
     * @returns {number} = unitVal * quantity
     */
    static total(unitVal: number, quantity: number): number;
    static totalWithMin(unitVal: number, quantity: number, fixedMin: number): number;
    static percent(val: number, total: number): number;
    static percentValue(percent: number, total: number): number;
    static mToKm(value: number): number;
    static kmToM(value: number): number;
    static kmToMi(value: number): number;
    static mToMi(value: number): number;
    static miToKm(value: number): number;
    static miTom(value: number): number;
    static secToMin(value: number): number;
}
