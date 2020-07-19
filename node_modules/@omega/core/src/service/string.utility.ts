/**
 * StringUtility -
 */
import {MathUtility} from "./math.utility";

export class StringUtility {


  /* ************************************ Public Methods ************************************ */
  public static concat(...arr: string[]): string {
    let sRet = '';
    if (arr) {
      arr.forEach(str => {
        if (str) {
          sRet += ' ' + str.trim();
        }
      });
    }
    return sRet.trim();
  }

  public static removeWhitespace(val: string) {
    // .replace(/ /g,'') -OR- .replace(/\s/g,'')
    return val.replace(/ /g, '');
  }

  public static twoNumAfterDecimal(val: number): string {
    let amountStr = '0.00';
    if (val && val > 0) {
      const amt = MathUtility.round(val, 2);
      amountStr = parseFloat(amt.toString()).toFixed(2);
    }
    return amountStr;
  }

  public static usCurrencyFormat(val: string): string {
    const usd = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return usd;
  }

  /* ************************************ Private Methods ************************************ */

}
