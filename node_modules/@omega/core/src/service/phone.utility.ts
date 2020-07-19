import {CountryCode} from "../enums";
import {CountryIsdCodeUtility} from "./country-isd-code.utility";


export class PhoneUtility {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public static getCountry(ph: string): string {
    return CountryIsdCodeUtility.getCountryCode(ph);
  }

  public static getIsdCode(code: string): number {
    return CountryIsdCodeUtility.getIsdCode(code);
  }

  public static appendPlus(isdCode: number): string {
    return "+" + isdCode;
  }


  public static appendIsdCodeToCellNo(cell: string, countryCode: string): string {
    //cell = _getCellNumber(cell, countryCode);
    if (cell.startsWith('+')) {
      return cell;
    }
    if (cell) {
      cell = PhoneUtility.appendPlus(PhoneUtility.getIsdCode(countryCode)) + cell;
    }
    return cell;
  }


  /*

  public static CountryCode getCountry(String cell) {
    CountryCode country = IN; // default //TODO move to project system setting properties
    if (StringUtils.hasLength(cell)) {
      if (cell.startsWith("+" + CountryIsdCode.IN)) {
        country = IN;
      } else if (cell.startsWith("+" + CountryIsdCode.US)) {
        country = US;
      } else if (cell.startsWith("+" + CountryIsdCode.ET)) {
        country = ET;
      } else {
        LOG.error("Got a new country ? cell = " + cell);
      }
    }
    return country;
  }

  public static int getIsdCode(CountryCode code) {
    switch (code) {
      case IN:
        return CountryIsdCode.IN;
      case US:
        return CountryIsdCode.US;
      case ET:
        return CountryIsdCode.ET;
    }
    return 0;
  }

  public static String appendPlus(int isdCode) {
    return "+" + isdCode;
  }


  public static String appendIsdCodeToCellNo(String cell, CountryCode countryCode) {
    cell = _getCellNumber(cell, countryCode);
    if (StringUtils.hasLength(cell)) {
      cell = PhoneUtility.appendPlus(PhoneUtility.getIsdCode(countryCode)) + cell;
    }
    return cell;
  }

  public static String appendIsdCodeToCellNoIfValidCellWith10Digit(String cell, CountryCode countryCode) {
    cell = _getCellNumberIfValidNumber(cell, countryCode);
    if (StringUtils.hasLength(cell)) {
      cell = PhoneUtility.appendPlus(PhoneUtility.getIsdCode(countryCode)) + cell;
    }
    return cell;
  }

  public static String removeIsdCodeFromCellNo(String cell, CountryCode countryCode) {
    return _getCellNumber(cell, countryCode);
  }

  public static Long removeLeadingZeros(String number) {
    try {
      return Long.parseLong(number);
    } catch (NumberFormatException e) {
      return null;
    }
  }


   * @param cell = +1(949) 309-1238
   * @return +19493091258
   *
  public static String removeNonnumericExceptPlus(String cell) {
  if (StringUtils.hasLength(cell)) {
  return cell.replaceAll("[\\s\\-()]", "");
}
return cell;
}
   */

  /* ************************************ Private Methods ************************************ */
  private static _getCellNumber(cell: string, countryCode: CountryCode): string {


    return cell;
  }


  /**
   * @param cell
   * @return get 10 OR 9 digit from last based on CountryCode
   */
  /*
  private static String _getCellNumber(String cell, CountryCode code) {
  if (StringUtils.hasLength(cell)) {
  cell = PhoneUtility.removeNonnumericExceptPlus(cell);
  cell = cell.trim();
}
int nationalCellNumberLength = _nationalCellNumberLength(code);
if (StringUtils.hasLength(cell) && cell.length() >= nationalCellNumberLength) {
  cell = cell.substring(cell.length() - nationalCellNumberLength);
}
return cell;
}

private static String _getCellNumberIfValidNumber(String cell, CountryCode code) {
  if (StringUtils.hasLength(cell)) {
    cell = PhoneUtility.removeNonnumericExceptPlus(cell);
    cell = cell.trim();
  }
  if (StringUtils.hasLength(cell) && cell.length() == _nationalCellNumberLength(code)) {
    return cell;
  }
  return null;
}

private static int _nationalCellNumberLength(CountryCode code) {
  int nationalCellNumberLength;
  switch (code) {
    case ET:
      nationalCellNumberLength = LENGTH_CELL_NUMBER_9;
      break;

    default:
      nationalCellNumberLength = LENGTH_CELL_NUMBER_10;
      break;
  }
  return nationalCellNumberLength;
}
*/

}