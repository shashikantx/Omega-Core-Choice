/**
 * MathService -
 */
export class MathUtility {


  /* ************************************ Public Methods ************************************ */
  public static round(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  public static number(n: any): number {
    if (n && !isNaN(n)) {
      return Number(n);
    }
    return 0;
  }

  public static sum(...vals: any[]): number {
    let sum = 0;
    if (vals) {
      vals.forEach(n => {
        sum += this.number(n);
      });
    }
    return sum;
  }

  /**
   *
   * @param {number} unitVal = charge
   * @param {number} quantity
   * @returns {number} = unitVal * quantity
   */
  public static total(unitVal: number, quantity: number): number {
    return this.number(unitVal) * this.number(quantity);
  }

  public static totalWithMin(unitVal: number, quantity: number, fixedMin: number): number {
    const total = this.total(unitVal, quantity);
    return total > fixedMin ? total : fixedMin;
  }

  public static percent(val: number, total: number): number {
    total = this.number(total);
    if (total !== 0) {
      return (this.number(val) * 100) / total;
    }
    return 0;
  }

  public static percentValue(percent: number, total: number) {
    total = this.number(total);
    if (total !== 0) {
      return (total * this.number(percent)) / 100;
    }
    return 0;
  }

  /* ************************************ Converter Methods End ************************************ */
  // Km to miles | Kilometers to miles converter - RapidTables.com
  // https://www.rapidtables.com/convert/length/km-to-mile.html
  //   Kilometers (km) to miles (mi) conversion calculator and how to convert.
  // Kilometers to Miles
  public static mToKm(value: number): number {
    return value / 1000;
  }

  public static kmToM(value: number): number {
    return value * 1000;
  }

  public static kmToMi(value: number): number {
    return value / 1.60934;
  }

  public static mToMi(value: number): number {
    return this.kmToMi(this.mToKm(value));
  }

  public static miToKm(value: number): number {
    return value * 1.60934;
  }

  public static miTom(value: number): number {
    return this.kmToM(this.miToKm(value));
  }

  public static secToMin(value: number): number {
    return value / 60;
  }

  /* ************************************ Converter Methods End ************************************ */

  /* ************************************ Private Methods ************************************ */

}
