"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneUtility = void 0;
var country_isd_code_utility_1 = require("./country-isd-code.utility");
var PhoneUtility = /** @class */ (function () {
    function PhoneUtility() {
    }
    /* ************************************ Static Fields ************************************ */
    /* ************************************ Public Methods ************************************ */
    PhoneUtility.getCountry = function (ph) {
        return country_isd_code_utility_1.CountryIsdCodeUtility.getCountryCode(ph);
    };
    PhoneUtility.getIsdCode = function (code) {
        return country_isd_code_utility_1.CountryIsdCodeUtility.getIsdCode(code);
    };
    PhoneUtility.appendPlus = function (isdCode) {
        return "+" + isdCode;
    };
    PhoneUtility.appendIsdCodeToCellNo = function (cell, countryCode) {
        //cell = _getCellNumber(cell, countryCode);
        if (cell.startsWith('+')) {
            return cell;
        }
        if (cell) {
            cell = PhoneUtility.appendPlus(PhoneUtility.getIsdCode(countryCode)) + cell;
        }
        return cell;
    };
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
    PhoneUtility._getCellNumber = function (cell, countryCode) {
        return cell;
    };
    return PhoneUtility;
}());
exports.PhoneUtility = PhoneUtility;
