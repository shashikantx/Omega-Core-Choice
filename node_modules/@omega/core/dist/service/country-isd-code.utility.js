"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryIsdCodeUtility = void 0;
var enums_1 = require("../enums");
var country_isd_code_1 = require("../const/country-isd-code");
var CountryIsdCodeUtility = /** @class */ (function () {
    function CountryIsdCodeUtility() {
    }
    CountryIsdCodeUtility.getIsdCode = function (code) {
        if (!code) {
            return country_isd_code_1.COUNTRY_ISD_CODE.US;
        }
        //TODO FIXME
        switch (code) {
            case enums_1.CountryCode[enums_1.CountryCode.AF]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AF;
            case enums_1.CountryCode[enums_1.CountryCode.AL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AL;
            case enums_1.CountryCode[enums_1.CountryCode.DZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.DZ;
            case enums_1.CountryCode[enums_1.CountryCode.AD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AD;
            case enums_1.CountryCode[enums_1.CountryCode.AO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AO;
            case enums_1.CountryCode[enums_1.CountryCode.AQ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AQ;
            case enums_1.CountryCode[enums_1.CountryCode.AR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AR;
            case enums_1.CountryCode[enums_1.CountryCode.AM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AM;
            case enums_1.CountryCode[enums_1.CountryCode.AW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AW;
            case enums_1.CountryCode[enums_1.CountryCode.AU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AU;
            case enums_1.CountryCode[enums_1.CountryCode.AT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AT;
            case enums_1.CountryCode[enums_1.CountryCode.AZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AZ;
            case enums_1.CountryCode[enums_1.CountryCode.BH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BH;
            case enums_1.CountryCode[enums_1.CountryCode.BD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BD;
            case enums_1.CountryCode[enums_1.CountryCode.BY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BY;
            case enums_1.CountryCode[enums_1.CountryCode.BE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BE;
            case enums_1.CountryCode[enums_1.CountryCode.BZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BZ;
            case enums_1.CountryCode[enums_1.CountryCode.BJ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BJ;
            case enums_1.CountryCode[enums_1.CountryCode.BT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BT;
            case enums_1.CountryCode[enums_1.CountryCode.BO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BO;
            case enums_1.CountryCode[enums_1.CountryCode.BA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BA;
            case enums_1.CountryCode[enums_1.CountryCode.BW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BW;
            case enums_1.CountryCode[enums_1.CountryCode.BR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BR;
            case enums_1.CountryCode[enums_1.CountryCode.BN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BN;
            case enums_1.CountryCode[enums_1.CountryCode.BG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BG;
            case enums_1.CountryCode[enums_1.CountryCode.BF]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BF;
            case enums_1.CountryCode[enums_1.CountryCode.MM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MM;
            case enums_1.CountryCode[enums_1.CountryCode.BI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BI;
            case enums_1.CountryCode[enums_1.CountryCode.KH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KH;
            case enums_1.CountryCode[enums_1.CountryCode.CM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CM;
            case enums_1.CountryCode[enums_1.CountryCode.CA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CA;
            case enums_1.CountryCode[enums_1.CountryCode.CV]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CV;
            case enums_1.CountryCode[enums_1.CountryCode.CF]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CF;
            case enums_1.CountryCode[enums_1.CountryCode.TD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TD;
            case enums_1.CountryCode[enums_1.CountryCode.CL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CL;
            case enums_1.CountryCode[enums_1.CountryCode.CN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CN;
            case enums_1.CountryCode[enums_1.CountryCode.CX]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CX;
            case enums_1.CountryCode[enums_1.CountryCode.CC]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CC;
            case enums_1.CountryCode[enums_1.CountryCode.CO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CO;
            case enums_1.CountryCode[enums_1.CountryCode.KM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KM;
            case enums_1.CountryCode[enums_1.CountryCode.CG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CG;
            case enums_1.CountryCode[enums_1.CountryCode.CD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CD;
            case enums_1.CountryCode[enums_1.CountryCode.CK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CK;
            case enums_1.CountryCode[enums_1.CountryCode.CR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CR;
            case enums_1.CountryCode[enums_1.CountryCode.HR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.HR;
            case enums_1.CountryCode[enums_1.CountryCode.CU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CU;
            case enums_1.CountryCode[enums_1.CountryCode.CY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CY;
            case enums_1.CountryCode[enums_1.CountryCode.CZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CZ;
            case enums_1.CountryCode[enums_1.CountryCode.DK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.DK;
            case enums_1.CountryCode[enums_1.CountryCode.DJ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.DJ;
            case enums_1.CountryCode[enums_1.CountryCode.TL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TL;
            case enums_1.CountryCode[enums_1.CountryCode.EC]:
                return country_isd_code_1.COUNTRY_ISD_CODE.EC;
            case enums_1.CountryCode[enums_1.CountryCode.EG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.EG;
            case enums_1.CountryCode[enums_1.CountryCode.SV]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SV;
            case enums_1.CountryCode[enums_1.CountryCode.GQ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GQ;
            case enums_1.CountryCode[enums_1.CountryCode.ER]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ER;
            case enums_1.CountryCode[enums_1.CountryCode.EE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.EE;
            case enums_1.CountryCode[enums_1.CountryCode.ET]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ET;
            case enums_1.CountryCode[enums_1.CountryCode.FK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FK;
            case enums_1.CountryCode[enums_1.CountryCode.FO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FO;
            case enums_1.CountryCode[enums_1.CountryCode.FJ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FJ;
            case enums_1.CountryCode[enums_1.CountryCode.FI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FI;
            case enums_1.CountryCode[enums_1.CountryCode.FR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FR;
            case enums_1.CountryCode[enums_1.CountryCode.PF]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PF;
            case enums_1.CountryCode[enums_1.CountryCode.GA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GA;
            case enums_1.CountryCode[enums_1.CountryCode.GM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GM;
            case enums_1.CountryCode[enums_1.CountryCode.GE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GE;
            case enums_1.CountryCode[enums_1.CountryCode.DE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.DE;
            case enums_1.CountryCode[enums_1.CountryCode.GH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GH;
            case enums_1.CountryCode[enums_1.CountryCode.GI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GI;
            case enums_1.CountryCode[enums_1.CountryCode.GR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GR;
            case enums_1.CountryCode[enums_1.CountryCode.GL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GL;
            case enums_1.CountryCode[enums_1.CountryCode.GT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GT;
            case enums_1.CountryCode[enums_1.CountryCode.GN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GN;
            case enums_1.CountryCode[enums_1.CountryCode.GW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GW;
            case enums_1.CountryCode[enums_1.CountryCode.GY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GY;
            case enums_1.CountryCode[enums_1.CountryCode.HT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.HT;
            case enums_1.CountryCode[enums_1.CountryCode.HN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.HN;
            case enums_1.CountryCode[enums_1.CountryCode.HK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.HK;
            case enums_1.CountryCode[enums_1.CountryCode.HU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.HU;
            case enums_1.CountryCode[enums_1.CountryCode.IN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IN;
            case enums_1.CountryCode[enums_1.CountryCode.ID]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ID;
            case enums_1.CountryCode[enums_1.CountryCode.IR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IR;
            case enums_1.CountryCode[enums_1.CountryCode.IQ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IQ;
            case enums_1.CountryCode[enums_1.CountryCode.IE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IE;
            case enums_1.CountryCode[enums_1.CountryCode.IM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IM;
            case enums_1.CountryCode[enums_1.CountryCode.IL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IL;
            case enums_1.CountryCode[enums_1.CountryCode.IT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.IT;
            case enums_1.CountryCode[enums_1.CountryCode.CI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CI;
            case enums_1.CountryCode[enums_1.CountryCode.JP]:
                return country_isd_code_1.COUNTRY_ISD_CODE.JP;
            case enums_1.CountryCode[enums_1.CountryCode.JO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.JO;
            case enums_1.CountryCode[enums_1.CountryCode.KZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KZ;
            case enums_1.CountryCode[enums_1.CountryCode.KE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KE;
            case enums_1.CountryCode[enums_1.CountryCode.KI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KI;
            case enums_1.CountryCode[enums_1.CountryCode.KW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KW;
            case enums_1.CountryCode[enums_1.CountryCode.KG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KG;
            case enums_1.CountryCode[enums_1.CountryCode.LA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LA;
            case enums_1.CountryCode[enums_1.CountryCode.LV]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LV;
            case enums_1.CountryCode[enums_1.CountryCode.LB]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LB;
            case enums_1.CountryCode[enums_1.CountryCode.LS]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LS;
            case enums_1.CountryCode[enums_1.CountryCode.LR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LR;
            case enums_1.CountryCode[enums_1.CountryCode.LY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LY;
            case enums_1.CountryCode[enums_1.CountryCode.LI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LI;
            case enums_1.CountryCode[enums_1.CountryCode.LT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LT;
            case enums_1.CountryCode[enums_1.CountryCode.LU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LU;
            case enums_1.CountryCode[enums_1.CountryCode.MO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MO;
            case enums_1.CountryCode[enums_1.CountryCode.MK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MK;
            case enums_1.CountryCode[enums_1.CountryCode.MG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MG;
            case enums_1.CountryCode[enums_1.CountryCode.MW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MW;
            case enums_1.CountryCode[enums_1.CountryCode.MY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MY;
            case enums_1.CountryCode[enums_1.CountryCode.MV]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MV;
            case enums_1.CountryCode[enums_1.CountryCode.ML]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ML;
            case enums_1.CountryCode[enums_1.CountryCode.MT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MT;
            case enums_1.CountryCode[enums_1.CountryCode.MH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MH;
            case enums_1.CountryCode[enums_1.CountryCode.MR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MR;
            case enums_1.CountryCode[enums_1.CountryCode.MU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MU;
            case enums_1.CountryCode[enums_1.CountryCode.YT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.YT;
            case enums_1.CountryCode[enums_1.CountryCode.MX]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MX;
            case enums_1.CountryCode[enums_1.CountryCode.FM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.FM;
            case enums_1.CountryCode[enums_1.CountryCode.MD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MD;
            case enums_1.CountryCode[enums_1.CountryCode.MC]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MC;
            case enums_1.CountryCode[enums_1.CountryCode.MN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MN;
            case enums_1.CountryCode[enums_1.CountryCode.ME]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ME;
            case enums_1.CountryCode[enums_1.CountryCode.MA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MA;
            case enums_1.CountryCode[enums_1.CountryCode.MZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.MZ;
            case enums_1.CountryCode[enums_1.CountryCode.NA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NA;
            case enums_1.CountryCode[enums_1.CountryCode.NR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NR;
            case enums_1.CountryCode[enums_1.CountryCode.NP]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NP;
            case enums_1.CountryCode[enums_1.CountryCode.NL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NL;
            case enums_1.CountryCode[enums_1.CountryCode.AN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AN;
            case enums_1.CountryCode[enums_1.CountryCode.NC]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NC;
            case enums_1.CountryCode[enums_1.CountryCode.NZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NZ;
            case enums_1.CountryCode[enums_1.CountryCode.NI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NI;
            case enums_1.CountryCode[enums_1.CountryCode.NE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NE;
            case enums_1.CountryCode[enums_1.CountryCode.NG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NG;
            case enums_1.CountryCode[enums_1.CountryCode.NU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NU;
            case enums_1.CountryCode[enums_1.CountryCode.KP]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KP;
            case enums_1.CountryCode[enums_1.CountryCode.NO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.NO;
            case enums_1.CountryCode[enums_1.CountryCode.OM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.OM;
            case enums_1.CountryCode[enums_1.CountryCode.PK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PK;
            case enums_1.CountryCode[enums_1.CountryCode.PW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PW;
            case enums_1.CountryCode[enums_1.CountryCode.PA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PA;
            case enums_1.CountryCode[enums_1.CountryCode.PG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PG;
            case enums_1.CountryCode[enums_1.CountryCode.PY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PY;
            case enums_1.CountryCode[enums_1.CountryCode.PE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PE;
            case enums_1.CountryCode[enums_1.CountryCode.PH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PH;
            case enums_1.CountryCode[enums_1.CountryCode.PN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PN;
            case enums_1.CountryCode[enums_1.CountryCode.PL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PL;
            case enums_1.CountryCode[enums_1.CountryCode.PT]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PT;
            case enums_1.CountryCode[enums_1.CountryCode.PR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PR;
            case enums_1.CountryCode[enums_1.CountryCode.QA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.QA;
            case enums_1.CountryCode[enums_1.CountryCode.RO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.RO;
            case enums_1.CountryCode[enums_1.CountryCode.RU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.RU;
            case enums_1.CountryCode[enums_1.CountryCode.RW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.RW;
            case enums_1.CountryCode[enums_1.CountryCode.BL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.BL;
            case enums_1.CountryCode[enums_1.CountryCode.WS]:
                return country_isd_code_1.COUNTRY_ISD_CODE.WS;
            case enums_1.CountryCode[enums_1.CountryCode.SM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SM;
            case enums_1.CountryCode[enums_1.CountryCode.ST]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ST;
            case enums_1.CountryCode[enums_1.CountryCode.SA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SA;
            case enums_1.CountryCode[enums_1.CountryCode.SN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SN;
            case enums_1.CountryCode[enums_1.CountryCode.RS]:
                return country_isd_code_1.COUNTRY_ISD_CODE.RS;
            case enums_1.CountryCode[enums_1.CountryCode.SC]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SC;
            case enums_1.CountryCode[enums_1.CountryCode.SL]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SL;
            case enums_1.CountryCode[enums_1.CountryCode.SG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SG;
            case enums_1.CountryCode[enums_1.CountryCode.SK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SK;
            case enums_1.CountryCode[enums_1.CountryCode.SI]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SI;
            case enums_1.CountryCode[enums_1.CountryCode.SB]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SB;
            case enums_1.CountryCode[enums_1.CountryCode.SO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SO;
            case enums_1.CountryCode[enums_1.CountryCode.ZA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ZA;
            case enums_1.CountryCode[enums_1.CountryCode.KR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.KR;
            case enums_1.CountryCode[enums_1.CountryCode.ES]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ES;
            case enums_1.CountryCode[enums_1.CountryCode.LK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.LK;
            case enums_1.CountryCode[enums_1.CountryCode.SH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SH;
            case enums_1.CountryCode[enums_1.CountryCode.PM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.PM;
            case enums_1.CountryCode[enums_1.CountryCode.SD]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SD;
            case enums_1.CountryCode[enums_1.CountryCode.SR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SR;
            case enums_1.CountryCode[enums_1.CountryCode.SZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SZ;
            case enums_1.CountryCode[enums_1.CountryCode.SE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SE;
            case enums_1.CountryCode[enums_1.CountryCode.CH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.CH;
            case enums_1.CountryCode[enums_1.CountryCode.SY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.SY;
            case enums_1.CountryCode[enums_1.CountryCode.TW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TW;
            case enums_1.CountryCode[enums_1.CountryCode.TJ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TJ;
            case enums_1.CountryCode[enums_1.CountryCode.TZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TZ;
            case enums_1.CountryCode[enums_1.CountryCode.TH]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TH;
            case enums_1.CountryCode[enums_1.CountryCode.TG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TG;
            case enums_1.CountryCode[enums_1.CountryCode.TK]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TK;
            case enums_1.CountryCode[enums_1.CountryCode.TO]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TO;
            case enums_1.CountryCode[enums_1.CountryCode.TN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TN;
            case enums_1.CountryCode[enums_1.CountryCode.TR]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TR;
            case enums_1.CountryCode[enums_1.CountryCode.TM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TM;
            case enums_1.CountryCode[enums_1.CountryCode.TV]:
                return country_isd_code_1.COUNTRY_ISD_CODE.TV;
            case enums_1.CountryCode[enums_1.CountryCode.AE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.AE;
            case enums_1.CountryCode[enums_1.CountryCode.UG]:
                return country_isd_code_1.COUNTRY_ISD_CODE.UG;
            case enums_1.CountryCode[enums_1.CountryCode.GB]:
                return country_isd_code_1.COUNTRY_ISD_CODE.GB;
            case enums_1.CountryCode[enums_1.CountryCode.UA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.UA;
            case enums_1.CountryCode[enums_1.CountryCode.UY]:
                return country_isd_code_1.COUNTRY_ISD_CODE.UY;
            case enums_1.CountryCode[enums_1.CountryCode.US]:
                return country_isd_code_1.COUNTRY_ISD_CODE.US;
            case enums_1.CountryCode[enums_1.CountryCode.UZ]:
                return country_isd_code_1.COUNTRY_ISD_CODE.UZ;
            case enums_1.CountryCode[enums_1.CountryCode.VU]:
                return country_isd_code_1.COUNTRY_ISD_CODE.VU;
            case enums_1.CountryCode[enums_1.CountryCode.VA]:
                return country_isd_code_1.COUNTRY_ISD_CODE.VA;
            case enums_1.CountryCode[enums_1.CountryCode.VE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.VE;
            case enums_1.CountryCode[enums_1.CountryCode.VN]:
                return country_isd_code_1.COUNTRY_ISD_CODE.VN;
            case enums_1.CountryCode[enums_1.CountryCode.WF]:
                return country_isd_code_1.COUNTRY_ISD_CODE.WF;
            case enums_1.CountryCode[enums_1.CountryCode.YE]:
                return country_isd_code_1.COUNTRY_ISD_CODE.YE;
            case enums_1.CountryCode[enums_1.CountryCode.ZM]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ZM;
            case enums_1.CountryCode[enums_1.CountryCode.ZW]:
                return country_isd_code_1.COUNTRY_ISD_CODE.ZW;
            default:
                return country_isd_code_1.COUNTRY_ISD_CODE.US;
        }
    };
    CountryIsdCodeUtility.getCountryCode = function (ph) {
        if (!(ph && ph.startsWith('+'))) {
            return enums_1.CountryCode[enums_1.CountryCode.US];
        }
        if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.US)) { // +1
            return enums_1.CountryCode[enums_1.CountryCode.US];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CA)) { // +1
            return enums_1.CountryCode[enums_1.CountryCode.CA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PR)) { // +1
            return enums_1.CountryCode[enums_1.CountryCode.PR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KZ)) { // +7
            return enums_1.CountryCode[enums_1.CountryCode.KZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.RU)) { // +7
            return enums_1.CountryCode[enums_1.CountryCode.RU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.EG)) {
            return enums_1.CountryCode[enums_1.CountryCode.EG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ZA)) {
            return enums_1.CountryCode[enums_1.CountryCode.ZA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GR)) {
            return enums_1.CountryCode[enums_1.CountryCode.GR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NL)) {
            return enums_1.CountryCode[enums_1.CountryCode.NL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BE)) {
            return enums_1.CountryCode[enums_1.CountryCode.BE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FR)) {
            return enums_1.CountryCode[enums_1.CountryCode.FR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ES)) {
            return enums_1.CountryCode[enums_1.CountryCode.ES];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.HU)) {
            return enums_1.CountryCode[enums_1.CountryCode.HU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IT)) { // +39
            return enums_1.CountryCode[enums_1.CountryCode.IT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.VA)) { // +39
            return enums_1.CountryCode[enums_1.CountryCode.VA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.RO)) {
            return enums_1.CountryCode[enums_1.CountryCode.RO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CH)) {
            return enums_1.CountryCode[enums_1.CountryCode.CH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AT)) {
            return enums_1.CountryCode[enums_1.CountryCode.AT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IM)) { // +44
            return enums_1.CountryCode[enums_1.CountryCode.IM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GB)) { // +44
            return enums_1.CountryCode[enums_1.CountryCode.GB];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.DK)) {
            return enums_1.CountryCode[enums_1.CountryCode.DK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SE)) {
            return enums_1.CountryCode[enums_1.CountryCode.SE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NO)) {
            return enums_1.CountryCode[enums_1.CountryCode.NO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PL)) {
            return enums_1.CountryCode[enums_1.CountryCode.PL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.DE)) {
            return enums_1.CountryCode[enums_1.CountryCode.DE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PE)) {
            return enums_1.CountryCode[enums_1.CountryCode.PE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MX)) {
            return enums_1.CountryCode[enums_1.CountryCode.MX];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CU)) {
            return enums_1.CountryCode[enums_1.CountryCode.CU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AR)) {
            return enums_1.CountryCode[enums_1.CountryCode.AR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BR)) {
            return enums_1.CountryCode[enums_1.CountryCode.BR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CL)) {
            return enums_1.CountryCode[enums_1.CountryCode.CL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CO)) {
            return enums_1.CountryCode[enums_1.CountryCode.CO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.VE)) {
            return enums_1.CountryCode[enums_1.CountryCode.VE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MY)) {
            return enums_1.CountryCode[enums_1.CountryCode.MY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AU)) {
            return enums_1.CountryCode[enums_1.CountryCode.AU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CX)) {
            return enums_1.CountryCode[enums_1.CountryCode.CX];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CC)) {
            return enums_1.CountryCode[enums_1.CountryCode.CC];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ID)) {
            return enums_1.CountryCode[enums_1.CountryCode.ID];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PH)) {
            return enums_1.CountryCode[enums_1.CountryCode.PH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.NZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SG)) {
            return enums_1.CountryCode[enums_1.CountryCode.SG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TH)) {
            return enums_1.CountryCode[enums_1.CountryCode.TH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.JP)) {
            return enums_1.CountryCode[enums_1.CountryCode.JP];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KR)) {
            return enums_1.CountryCode[enums_1.CountryCode.KR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.VN)) {
            return enums_1.CountryCode[enums_1.CountryCode.VN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CN)) {
            return enums_1.CountryCode[enums_1.CountryCode.CN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TR)) {
            return enums_1.CountryCode[enums_1.CountryCode.TR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IN)) {
            return enums_1.CountryCode[enums_1.CountryCode.IN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PK)) {
            return enums_1.CountryCode[enums_1.CountryCode.PK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AF)) {
            return enums_1.CountryCode[enums_1.CountryCode.AF];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LK)) {
            return enums_1.CountryCode[enums_1.CountryCode.LK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MM)) {
            return enums_1.CountryCode[enums_1.CountryCode.MM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IR)) {
            return enums_1.CountryCode[enums_1.CountryCode.IR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MA)) {
            return enums_1.CountryCode[enums_1.CountryCode.MA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.DZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.DZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TN)) {
            return enums_1.CountryCode[enums_1.CountryCode.TN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LY)) {
            return enums_1.CountryCode[enums_1.CountryCode.LY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GM)) {
            return enums_1.CountryCode[enums_1.CountryCode.GM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SN)) {
            return enums_1.CountryCode[enums_1.CountryCode.SN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MR)) {
            return enums_1.CountryCode[enums_1.CountryCode.MR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ML)) {
            return enums_1.CountryCode[enums_1.CountryCode.ML];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GN)) {
            return enums_1.CountryCode[enums_1.CountryCode.GN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CI)) {
            return enums_1.CountryCode[enums_1.CountryCode.CI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BF)) {
            return enums_1.CountryCode[enums_1.CountryCode.BF];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NE)) {
            return enums_1.CountryCode[enums_1.CountryCode.NE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TG)) {
            return enums_1.CountryCode[enums_1.CountryCode.TG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BJ)) {
            return enums_1.CountryCode[enums_1.CountryCode.BJ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MU)) {
            return enums_1.CountryCode[enums_1.CountryCode.MU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LR)) {
            return enums_1.CountryCode[enums_1.CountryCode.LR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SL)) {
            return enums_1.CountryCode[enums_1.CountryCode.SL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GH)) {
            return enums_1.CountryCode[enums_1.CountryCode.GH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NG)) {
            return enums_1.CountryCode[enums_1.CountryCode.NG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TD)) {
            return enums_1.CountryCode[enums_1.CountryCode.TD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CF)) {
            return enums_1.CountryCode[enums_1.CountryCode.CF];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CM)) {
            return enums_1.CountryCode[enums_1.CountryCode.CM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CV)) {
            return enums_1.CountryCode[enums_1.CountryCode.CV];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ST)) {
            return enums_1.CountryCode[enums_1.CountryCode.ST];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GQ)) {
            return enums_1.CountryCode[enums_1.CountryCode.GQ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GA)) {
            return enums_1.CountryCode[enums_1.CountryCode.GA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CG)) {
            return enums_1.CountryCode[enums_1.CountryCode.CG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CD)) {
            return enums_1.CountryCode[enums_1.CountryCode.CD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AO)) {
            return enums_1.CountryCode[enums_1.CountryCode.AO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GW)) {
            return enums_1.CountryCode[enums_1.CountryCode.GW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SC)) {
            return enums_1.CountryCode[enums_1.CountryCode.SC];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SD)) {
            return enums_1.CountryCode[enums_1.CountryCode.SD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.RW)) {
            return enums_1.CountryCode[enums_1.CountryCode.RW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ET)) {
            return enums_1.CountryCode[enums_1.CountryCode.ET];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SO)) {
            return enums_1.CountryCode[enums_1.CountryCode.SO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.DJ)) {
            return enums_1.CountryCode[enums_1.CountryCode.DJ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KE)) {
            return enums_1.CountryCode[enums_1.CountryCode.KE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.TZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.UG)) {
            return enums_1.CountryCode[enums_1.CountryCode.UG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BI)) {
            return enums_1.CountryCode[enums_1.CountryCode.BI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.MZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ZM)) {
            return enums_1.CountryCode[enums_1.CountryCode.ZM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MG)) {
            return enums_1.CountryCode[enums_1.CountryCode.MG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.YT)) {
            return enums_1.CountryCode[enums_1.CountryCode.YT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ZW)) {
            return enums_1.CountryCode[enums_1.CountryCode.ZW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NA)) {
            return enums_1.CountryCode[enums_1.CountryCode.NA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MW)) {
            return enums_1.CountryCode[enums_1.CountryCode.MW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LS)) {
            return enums_1.CountryCode[enums_1.CountryCode.LS];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BW)) {
            return enums_1.CountryCode[enums_1.CountryCode.BW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.SZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KM)) {
            return enums_1.CountryCode[enums_1.CountryCode.KM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SH)) {
            return enums_1.CountryCode[enums_1.CountryCode.SH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ER)) {
            return enums_1.CountryCode[enums_1.CountryCode.ER];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AW)) {
            return enums_1.CountryCode[enums_1.CountryCode.AW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FO)) {
            return enums_1.CountryCode[enums_1.CountryCode.FO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GL)) {
            return enums_1.CountryCode[enums_1.CountryCode.GL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GI)) {
            return enums_1.CountryCode[enums_1.CountryCode.GI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PT)) {
            return enums_1.CountryCode[enums_1.CountryCode.PT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LU)) {
            return enums_1.CountryCode[enums_1.CountryCode.LU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IE)) {
            return enums_1.CountryCode[enums_1.CountryCode.IE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AL)) {
            return enums_1.CountryCode[enums_1.CountryCode.AL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MT)) {
            return enums_1.CountryCode[enums_1.CountryCode.MT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CY)) {
            return enums_1.CountryCode[enums_1.CountryCode.CY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FI)) {
            return enums_1.CountryCode[enums_1.CountryCode.FI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BG)) {
            return enums_1.CountryCode[enums_1.CountryCode.BG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LT)) {
            return enums_1.CountryCode[enums_1.CountryCode.LT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LV)) {
            return enums_1.CountryCode[enums_1.CountryCode.LV];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.EE)) {
            return enums_1.CountryCode[enums_1.CountryCode.EE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MD)) {
            return enums_1.CountryCode[enums_1.CountryCode.MD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AM)) {
            return enums_1.CountryCode[enums_1.CountryCode.AM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BY)) {
            return enums_1.CountryCode[enums_1.CountryCode.BY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AD)) {
            return enums_1.CountryCode[enums_1.CountryCode.AD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MC)) {
            return enums_1.CountryCode[enums_1.CountryCode.MC];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SM)) {
            return enums_1.CountryCode[enums_1.CountryCode.SM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.UA)) {
            return enums_1.CountryCode[enums_1.CountryCode.UA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.RS)) {
            return enums_1.CountryCode[enums_1.CountryCode.RS];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.ME)) {
            return enums_1.CountryCode[enums_1.CountryCode.ME];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.HR)) {
            return enums_1.CountryCode[enums_1.CountryCode.HR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SI)) {
            return enums_1.CountryCode[enums_1.CountryCode.SI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BA)) {
            return enums_1.CountryCode[enums_1.CountryCode.BA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MK)) {
            return enums_1.CountryCode[enums_1.CountryCode.MK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.CZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SK)) {
            return enums_1.CountryCode[enums_1.CountryCode.SK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LI)) {
            return enums_1.CountryCode[enums_1.CountryCode.LI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FK)) {
            return enums_1.CountryCode[enums_1.CountryCode.FK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.BZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GT)) {
            return enums_1.CountryCode[enums_1.CountryCode.GT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SV)) {
            return enums_1.CountryCode[enums_1.CountryCode.SV];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.HN)) {
            return enums_1.CountryCode[enums_1.CountryCode.HN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NI)) {
            return enums_1.CountryCode[enums_1.CountryCode.NI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CR)) {
            return enums_1.CountryCode[enums_1.CountryCode.CR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PA)) {
            return enums_1.CountryCode[enums_1.CountryCode.PA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PM)) {
            return enums_1.CountryCode[enums_1.CountryCode.PM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.HT)) {
            return enums_1.CountryCode[enums_1.CountryCode.HT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BL)) {
            return enums_1.CountryCode[enums_1.CountryCode.BL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BO)) {
            return enums_1.CountryCode[enums_1.CountryCode.BO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GY)) {
            return enums_1.CountryCode[enums_1.CountryCode.GY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.EC)) {
            return enums_1.CountryCode[enums_1.CountryCode.EC];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PY)) {
            return enums_1.CountryCode[enums_1.CountryCode.PY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SR)) {
            return enums_1.CountryCode[enums_1.CountryCode.SR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.UY)) {
            return enums_1.CountryCode[enums_1.CountryCode.UY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AN)) {
            return enums_1.CountryCode[enums_1.CountryCode.AN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TL)) {
            return enums_1.CountryCode[enums_1.CountryCode.TL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AQ)) {
            return enums_1.CountryCode[enums_1.CountryCode.AQ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BN)) {
            return enums_1.CountryCode[enums_1.CountryCode.BN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NR)) {
            return enums_1.CountryCode[enums_1.CountryCode.NR];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PG)) {
            return enums_1.CountryCode[enums_1.CountryCode.PG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TO)) {
            return enums_1.CountryCode[enums_1.CountryCode.TO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SB)) {
            return enums_1.CountryCode[enums_1.CountryCode.SB];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.VU)) {
            return enums_1.CountryCode[enums_1.CountryCode.VU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FJ)) {
            return enums_1.CountryCode[enums_1.CountryCode.FJ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PW)) {
            return enums_1.CountryCode[enums_1.CountryCode.PW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.WF)) {
            return enums_1.CountryCode[enums_1.CountryCode.WF];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.CK)) {
            return enums_1.CountryCode[enums_1.CountryCode.CK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NU)) {
            return enums_1.CountryCode[enums_1.CountryCode.NU];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.WS)) {
            return enums_1.CountryCode[enums_1.CountryCode.WS];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KI)) {
            return enums_1.CountryCode[enums_1.CountryCode.KI];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NC)) {
            return enums_1.CountryCode[enums_1.CountryCode.NC];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TV)) {
            return enums_1.CountryCode[enums_1.CountryCode.TV];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PF)) {
            return enums_1.CountryCode[enums_1.CountryCode.PF];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TK)) {
            return enums_1.CountryCode[enums_1.CountryCode.TK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.FM)) {
            return enums_1.CountryCode[enums_1.CountryCode.FM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MH)) {
            return enums_1.CountryCode[enums_1.CountryCode.MH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KP)) {
            return enums_1.CountryCode[enums_1.CountryCode.KP];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.HK)) {
            return enums_1.CountryCode[enums_1.CountryCode.HK];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MO)) {
            return enums_1.CountryCode[enums_1.CountryCode.MO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KH)) {
            return enums_1.CountryCode[enums_1.CountryCode.KH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LA)) {
            return enums_1.CountryCode[enums_1.CountryCode.LA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.PN)) {
            return enums_1.CountryCode[enums_1.CountryCode.PN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BD)) {
            return enums_1.CountryCode[enums_1.CountryCode.BD];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TW)) {
            return enums_1.CountryCode[enums_1.CountryCode.TW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MV)) {
            return enums_1.CountryCode[enums_1.CountryCode.MV];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.LB)) {
            return enums_1.CountryCode[enums_1.CountryCode.LB];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.JO)) {
            return enums_1.CountryCode[enums_1.CountryCode.JO];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SY)) {
            return enums_1.CountryCode[enums_1.CountryCode.SY];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IQ)) {
            return enums_1.CountryCode[enums_1.CountryCode.IQ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KW)) {
            return enums_1.CountryCode[enums_1.CountryCode.KW];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.SA)) {
            return enums_1.CountryCode[enums_1.CountryCode.SA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.YE)) {
            return enums_1.CountryCode[enums_1.CountryCode.YE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.OM)) {
            return enums_1.CountryCode[enums_1.CountryCode.OM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AE)) {
            return enums_1.CountryCode[enums_1.CountryCode.AE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.IL)) {
            return enums_1.CountryCode[enums_1.CountryCode.IL];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BH)) {
            return enums_1.CountryCode[enums_1.CountryCode.BH];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.QA)) {
            return enums_1.CountryCode[enums_1.CountryCode.QA];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.BT)) {
            return enums_1.CountryCode[enums_1.CountryCode.BT];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.MN)) {
            return enums_1.CountryCode[enums_1.CountryCode.MN];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.NP)) {
            return enums_1.CountryCode[enums_1.CountryCode.NP];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TJ)) {
            return enums_1.CountryCode[enums_1.CountryCode.TJ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.TM)) {
            return enums_1.CountryCode[enums_1.CountryCode.TM];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.AZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.AZ];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.GE)) {
            return enums_1.CountryCode[enums_1.CountryCode.GE];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.KG)) {
            return enums_1.CountryCode[enums_1.CountryCode.KG];
        }
        else if (ph.startsWith('+' + country_isd_code_1.COUNTRY_ISD_CODE.UZ)) {
            return enums_1.CountryCode[enums_1.CountryCode.UZ];
        }
        else {
            return enums_1.CountryCode[enums_1.CountryCode.US];
        }
    };
    CountryIsdCodeUtility.getCountryCodeV2 = function (ph) {
        if (!(ph && ph.startsWith('+'))) {
            return enums_1.CountryCode[enums_1.CountryCode.US];
        }
        if (ph.startsWith('+1')) {
            return enums_1.CountryCode[enums_1.CountryCode.US]; // +1
        }
        else if (ph.startsWith('+1')) {
            return enums_1.CountryCode[enums_1.CountryCode.CA]; // +1
        }
        else if (ph.startsWith('+1')) {
            return enums_1.CountryCode[enums_1.CountryCode.PR]; // +1
        }
        else if (ph.startsWith('+7')) {
            return enums_1.CountryCode[enums_1.CountryCode.KZ]; // +7
        }
        else if (ph.startsWith('+7')) {
            return enums_1.CountryCode[enums_1.CountryCode.RU]; // +7
        }
        else if (ph.startsWith('+20')) {
            return enums_1.CountryCode[enums_1.CountryCode.EG];
        }
        else if (ph.startsWith('+27')) {
            return enums_1.CountryCode[enums_1.CountryCode.ZA];
        }
        else if (ph.startsWith('+30')) {
            return enums_1.CountryCode[enums_1.CountryCode.GR];
        }
        else if (ph.startsWith('+31')) {
            return enums_1.CountryCode[enums_1.CountryCode.NL];
        }
        else if (ph.startsWith('+32')) {
            return enums_1.CountryCode[enums_1.CountryCode.BE];
        }
        else if (ph.startsWith('+33')) {
            return enums_1.CountryCode[enums_1.CountryCode.FR];
        }
        else if (ph.startsWith('+34')) {
            return enums_1.CountryCode[enums_1.CountryCode.ES];
        }
        else if (ph.startsWith('+36')) {
            return enums_1.CountryCode[enums_1.CountryCode.HU];
        }
        else if (ph.startsWith('+39')) {
            return enums_1.CountryCode[enums_1.CountryCode.IT]; // +39
        }
        else if (ph.startsWith('+39')) {
            return enums_1.CountryCode[enums_1.CountryCode.VA]; // +39
        }
        else if (ph.startsWith('+40')) {
            return enums_1.CountryCode[enums_1.CountryCode.RO];
        }
        else if (ph.startsWith('+41')) {
            return enums_1.CountryCode[enums_1.CountryCode.CH];
        }
        else if (ph.startsWith('+43')) {
            return enums_1.CountryCode[enums_1.CountryCode.AT];
        }
        else if (ph.startsWith('+44')) {
            return enums_1.CountryCode[enums_1.CountryCode.IM]; // +44
        }
        else if (ph.startsWith('+44')) {
            return enums_1.CountryCode[enums_1.CountryCode.GB]; // +44
        }
        else if (ph.startsWith('+45')) {
            return enums_1.CountryCode[enums_1.CountryCode.DK];
        }
        else if (ph.startsWith('+46')) {
            return enums_1.CountryCode[enums_1.CountryCode.SE];
        }
        else if (ph.startsWith('+47')) {
            return enums_1.CountryCode[enums_1.CountryCode.NO];
        }
        else if (ph.startsWith('+48')) {
            return enums_1.CountryCode[enums_1.CountryCode.PL];
        }
        else if (ph.startsWith('+49')) {
            return enums_1.CountryCode[enums_1.CountryCode.DE];
        }
        else if (ph.startsWith('+51')) {
            return enums_1.CountryCode[enums_1.CountryCode.PE];
        }
        else if (ph.startsWith('+52')) {
            return enums_1.CountryCode[enums_1.CountryCode.MX];
        }
        else if (ph.startsWith('+53')) {
            return enums_1.CountryCode[enums_1.CountryCode.CU];
        }
        else if (ph.startsWith('+54')) {
            return enums_1.CountryCode[enums_1.CountryCode.AR];
        }
        else if (ph.startsWith('+55')) {
            return enums_1.CountryCode[enums_1.CountryCode.BR];
        }
        else if (ph.startsWith('+56')) {
            return enums_1.CountryCode[enums_1.CountryCode.CL];
        }
        else if (ph.startsWith('+57')) {
            return enums_1.CountryCode[enums_1.CountryCode.CO];
        }
        else if (ph.startsWith('+58')) {
            return enums_1.CountryCode[enums_1.CountryCode.VE];
        }
        else if (ph.startsWith('+60')) {
            return enums_1.CountryCode[enums_1.CountryCode.MY];
        }
        else if (ph.startsWith('+61')) {
            return enums_1.CountryCode[enums_1.CountryCode.AU];
        }
        else if (ph.startsWith('+61')) {
            return enums_1.CountryCode[enums_1.CountryCode.CX];
        }
        else if (ph.startsWith('+61')) {
            return enums_1.CountryCode[enums_1.CountryCode.CC];
        }
        else if (ph.startsWith('+62')) {
            return enums_1.CountryCode[enums_1.CountryCode.ID];
        }
        else if (ph.startsWith('+63')) {
            return enums_1.CountryCode[enums_1.CountryCode.PH];
        }
        else if (ph.startsWith('+64')) {
            return enums_1.CountryCode[enums_1.CountryCode.NZ];
        }
        else if (ph.startsWith('+65')) {
            return enums_1.CountryCode[enums_1.CountryCode.SG];
        }
        else if (ph.startsWith('+66')) {
            return enums_1.CountryCode[enums_1.CountryCode.TH];
        }
        else if (ph.startsWith('+81')) {
            return enums_1.CountryCode[enums_1.CountryCode.JP];
        }
        else if (ph.startsWith('+82')) {
            return enums_1.CountryCode[enums_1.CountryCode.KR];
        }
        else if (ph.startsWith('+84')) {
            return enums_1.CountryCode[enums_1.CountryCode.VN];
        }
        else if (ph.startsWith('+86')) {
            return enums_1.CountryCode[enums_1.CountryCode.CN];
        }
        else if (ph.startsWith('+90')) {
            return enums_1.CountryCode[enums_1.CountryCode.TR];
        }
        else if (ph.startsWith('+91')) {
            return enums_1.CountryCode[enums_1.CountryCode.IN];
        }
        else if (ph.startsWith('+92')) {
            return enums_1.CountryCode[enums_1.CountryCode.PK];
        }
        else if (ph.startsWith('+93')) {
            return enums_1.CountryCode[enums_1.CountryCode.AF];
        }
        else if (ph.startsWith('+94')) {
            return enums_1.CountryCode[enums_1.CountryCode.LK];
        }
        else if (ph.startsWith('+95')) {
            return enums_1.CountryCode[enums_1.CountryCode.MM];
        }
        else if (ph.startsWith('+98')) {
            return enums_1.CountryCode[enums_1.CountryCode.IR];
        }
        else if (ph.startsWith('+212')) {
            return enums_1.CountryCode[enums_1.CountryCode.MA];
        }
        else if (ph.startsWith('+213')) {
            return enums_1.CountryCode[enums_1.CountryCode.DZ];
        }
        else if (ph.startsWith('+216')) {
            return enums_1.CountryCode[enums_1.CountryCode.TN];
        }
        else if (ph.startsWith('+218')) {
            return enums_1.CountryCode[enums_1.CountryCode.LY];
        }
        else if (ph.startsWith('+220')) {
            return enums_1.CountryCode[enums_1.CountryCode.GM];
        }
        else if (ph.startsWith('+221')) {
            return enums_1.CountryCode[enums_1.CountryCode.SN];
        }
        else if (ph.startsWith('+222')) {
            return enums_1.CountryCode[enums_1.CountryCode.MR];
        }
        else if (ph.startsWith('+223')) {
            return enums_1.CountryCode[enums_1.CountryCode.ML];
        }
        else if (ph.startsWith('+224')) {
            return enums_1.CountryCode[enums_1.CountryCode.GN];
        }
        else if (ph.startsWith('+225')) {
            return enums_1.CountryCode[enums_1.CountryCode.CI];
        }
        else if (ph.startsWith('+226')) {
            return enums_1.CountryCode[enums_1.CountryCode.BF];
        }
        else if (ph.startsWith('+227')) {
            return enums_1.CountryCode[enums_1.CountryCode.NE];
        }
        else if (ph.startsWith('+228')) {
            return enums_1.CountryCode[enums_1.CountryCode.TG];
        }
        else if (ph.startsWith('+229')) {
            return enums_1.CountryCode[enums_1.CountryCode.BJ];
        }
        else if (ph.startsWith('+230')) {
            return enums_1.CountryCode[enums_1.CountryCode.MU];
        }
        else if (ph.startsWith('+231')) {
            return enums_1.CountryCode[enums_1.CountryCode.LR];
        }
        else if (ph.startsWith('+232')) {
            return enums_1.CountryCode[enums_1.CountryCode.SL];
        }
        else if (ph.startsWith('+233')) {
            return enums_1.CountryCode[enums_1.CountryCode.GH];
        }
        else if (ph.startsWith('+234')) {
            return enums_1.CountryCode[enums_1.CountryCode.NG];
        }
        else if (ph.startsWith('+235')) {
            return enums_1.CountryCode[enums_1.CountryCode.TD];
        }
        else if (ph.startsWith('+236')) {
            return enums_1.CountryCode[enums_1.CountryCode.CF];
        }
        else if (ph.startsWith('+237')) {
            return enums_1.CountryCode[enums_1.CountryCode.CM];
        }
        else if (ph.startsWith('+238')) {
            return enums_1.CountryCode[enums_1.CountryCode.CV];
        }
        else if (ph.startsWith('+239')) {
            return enums_1.CountryCode[enums_1.CountryCode.ST];
        }
        else if (ph.startsWith('+240')) {
            return enums_1.CountryCode[enums_1.CountryCode.GQ];
        }
        else if (ph.startsWith('+241')) {
            return enums_1.CountryCode[enums_1.CountryCode.GA];
        }
        else if (ph.startsWith('+242')) {
            return enums_1.CountryCode[enums_1.CountryCode.CG];
        }
        else if (ph.startsWith('+243')) {
            return enums_1.CountryCode[enums_1.CountryCode.CD];
        }
        else if (ph.startsWith('+244')) {
            return enums_1.CountryCode[enums_1.CountryCode.AO];
        }
        else if (ph.startsWith('+245')) {
            return enums_1.CountryCode[enums_1.CountryCode.GW];
        }
        else if (ph.startsWith('+248')) {
            return enums_1.CountryCode[enums_1.CountryCode.SC];
        }
        else if (ph.startsWith('+249')) {
            return enums_1.CountryCode[enums_1.CountryCode.SD];
        }
        else if (ph.startsWith('+250')) {
            return enums_1.CountryCode[enums_1.CountryCode.RW];
        }
        else if (ph.startsWith('+251')) {
            return enums_1.CountryCode[enums_1.CountryCode.ET];
        }
        else if (ph.startsWith('+252')) {
            return enums_1.CountryCode[enums_1.CountryCode.SO];
        }
        else if (ph.startsWith('+253')) {
            return enums_1.CountryCode[enums_1.CountryCode.DJ];
        }
        else if (ph.startsWith('+254')) {
            return enums_1.CountryCode[enums_1.CountryCode.KE];
        }
        else if (ph.startsWith('+255')) {
            return enums_1.CountryCode[enums_1.CountryCode.TZ];
        }
        else if (ph.startsWith('+256')) {
            return enums_1.CountryCode[enums_1.CountryCode.UG];
        }
        else if (ph.startsWith('+257')) {
            return enums_1.CountryCode[enums_1.CountryCode.BI];
        }
        else if (ph.startsWith('+258')) {
            return enums_1.CountryCode[enums_1.CountryCode.MZ];
        }
        else if (ph.startsWith('+260')) {
            return enums_1.CountryCode[enums_1.CountryCode.ZM];
        }
        else if (ph.startsWith('+261')) {
            return enums_1.CountryCode[enums_1.CountryCode.MG];
        }
        else if (ph.startsWith('+262')) {
            return enums_1.CountryCode[enums_1.CountryCode.YT];
        }
        else if (ph.startsWith('+263')) {
            return enums_1.CountryCode[enums_1.CountryCode.ZW];
        }
        else if (ph.startsWith('+264')) {
            return enums_1.CountryCode[enums_1.CountryCode.NA];
        }
        else if (ph.startsWith('+265')) {
            return enums_1.CountryCode[enums_1.CountryCode.MW];
        }
        else if (ph.startsWith('+266')) {
            return enums_1.CountryCode[enums_1.CountryCode.LS];
        }
        else if (ph.startsWith('+267')) {
            return enums_1.CountryCode[enums_1.CountryCode.BW];
        }
        else if (ph.startsWith('+268')) {
            return enums_1.CountryCode[enums_1.CountryCode.SZ];
        }
        else if (ph.startsWith('+269')) {
            return enums_1.CountryCode[enums_1.CountryCode.KM];
        }
        else if (ph.startsWith('+290')) {
            return enums_1.CountryCode[enums_1.CountryCode.SH];
        }
        else if (ph.startsWith('+291')) {
            return enums_1.CountryCode[enums_1.CountryCode.ER];
        }
        else if (ph.startsWith('+297')) {
            return enums_1.CountryCode[enums_1.CountryCode.AW];
        }
        else if (ph.startsWith('+298')) {
            return enums_1.CountryCode[enums_1.CountryCode.FO];
        }
        else if (ph.startsWith('+299')) {
            return enums_1.CountryCode[enums_1.CountryCode.GL];
        }
        else if (ph.startsWith('+350')) {
            return enums_1.CountryCode[enums_1.CountryCode.GI];
        }
        else if (ph.startsWith('+351')) {
            return enums_1.CountryCode[enums_1.CountryCode.PT];
        }
        else if (ph.startsWith('+352')) {
            return enums_1.CountryCode[enums_1.CountryCode.LU];
        }
        else if (ph.startsWith('+353')) {
            return enums_1.CountryCode[enums_1.CountryCode.IE];
        }
        else if (ph.startsWith('+355')) {
            return enums_1.CountryCode[enums_1.CountryCode.AL];
        }
        else if (ph.startsWith('+356')) {
            return enums_1.CountryCode[enums_1.CountryCode.MT];
        }
        else if (ph.startsWith('+357')) {
            return enums_1.CountryCode[enums_1.CountryCode.CY];
        }
        else if (ph.startsWith('+358')) {
            return enums_1.CountryCode[enums_1.CountryCode.FI];
        }
        else if (ph.startsWith('+359')) {
            return enums_1.CountryCode[enums_1.CountryCode.BG];
        }
        else if (ph.startsWith('+370')) {
            return enums_1.CountryCode[enums_1.CountryCode.LT];
        }
        else if (ph.startsWith('+371')) {
            return enums_1.CountryCode[enums_1.CountryCode.LV];
        }
        else if (ph.startsWith('+372')) {
            return enums_1.CountryCode[enums_1.CountryCode.EE];
        }
        else if (ph.startsWith('+373')) {
            return enums_1.CountryCode[enums_1.CountryCode.MD];
        }
        else if (ph.startsWith('+374')) {
            return enums_1.CountryCode[enums_1.CountryCode.AM];
        }
        else if (ph.startsWith('+375')) {
            return enums_1.CountryCode[enums_1.CountryCode.BY];
        }
        else if (ph.startsWith('+376')) {
            return enums_1.CountryCode[enums_1.CountryCode.AD];
        }
        else if (ph.startsWith('+377')) {
            return enums_1.CountryCode[enums_1.CountryCode.MC];
        }
        else if (ph.startsWith('+378')) {
            return enums_1.CountryCode[enums_1.CountryCode.SM];
        }
        else if (ph.startsWith('+380')) {
            return enums_1.CountryCode[enums_1.CountryCode.UA];
        }
        else if (ph.startsWith('+381')) {
            return enums_1.CountryCode[enums_1.CountryCode.RS];
        }
        else if (ph.startsWith('+382')) {
            return enums_1.CountryCode[enums_1.CountryCode.ME];
        }
        else if (ph.startsWith('+385')) {
            return enums_1.CountryCode[enums_1.CountryCode.HR];
        }
        else if (ph.startsWith('+386')) {
            return enums_1.CountryCode[enums_1.CountryCode.SI];
        }
        else if (ph.startsWith('+387')) {
            return enums_1.CountryCode[enums_1.CountryCode.BA];
        }
        else if (ph.startsWith('+389')) {
            return enums_1.CountryCode[enums_1.CountryCode.MK];
        }
        else if (ph.startsWith('+420')) {
            return enums_1.CountryCode[enums_1.CountryCode.CZ];
        }
        else if (ph.startsWith('+421')) {
            return enums_1.CountryCode[enums_1.CountryCode.SK];
        }
        else if (ph.startsWith('+423')) {
            return enums_1.CountryCode[enums_1.CountryCode.LI];
        }
        else if (ph.startsWith('+500')) {
            return enums_1.CountryCode[enums_1.CountryCode.FK];
        }
        else if (ph.startsWith('+501')) {
            return enums_1.CountryCode[enums_1.CountryCode.BZ];
        }
        else if (ph.startsWith('+502')) {
            return enums_1.CountryCode[enums_1.CountryCode.GT];
        }
        else if (ph.startsWith('+503')) {
            return enums_1.CountryCode[enums_1.CountryCode.SV];
        }
        else if (ph.startsWith('+504')) {
            return enums_1.CountryCode[enums_1.CountryCode.HN];
        }
        else if (ph.startsWith('+505')) {
            return enums_1.CountryCode[enums_1.CountryCode.NI];
        }
        else if (ph.startsWith('+506')) {
            return enums_1.CountryCode[enums_1.CountryCode.CR];
        }
        else if (ph.startsWith('+507')) {
            return enums_1.CountryCode[enums_1.CountryCode.PA];
        }
        else if (ph.startsWith('+508')) {
            return enums_1.CountryCode[enums_1.CountryCode.PM];
        }
        else if (ph.startsWith('+509')) {
            return enums_1.CountryCode[enums_1.CountryCode.HT];
        }
        else if (ph.startsWith('+590')) {
            return enums_1.CountryCode[enums_1.CountryCode.BL];
        }
        else if (ph.startsWith('+591')) {
            return enums_1.CountryCode[enums_1.CountryCode.BO];
        }
        else if (ph.startsWith('+592')) {
            return enums_1.CountryCode[enums_1.CountryCode.GY];
        }
        else if (ph.startsWith('+593')) {
            return enums_1.CountryCode[enums_1.CountryCode.EC];
        }
        else if (ph.startsWith('+595')) {
            return enums_1.CountryCode[enums_1.CountryCode.PY];
        }
        else if (ph.startsWith('+597')) {
            return enums_1.CountryCode[enums_1.CountryCode.SR];
        }
        else if (ph.startsWith('+598')) {
            return enums_1.CountryCode[enums_1.CountryCode.UY];
        }
        else if (ph.startsWith('+599')) {
            return enums_1.CountryCode[enums_1.CountryCode.AN];
        }
        else if (ph.startsWith('+670')) {
            return enums_1.CountryCode[enums_1.CountryCode.TL];
        }
        else if (ph.startsWith('+672')) {
            return enums_1.CountryCode[enums_1.CountryCode.AQ];
        }
        else if (ph.startsWith('+673')) {
            return enums_1.CountryCode[enums_1.CountryCode.BN];
        }
        else if (ph.startsWith('+674')) {
            return enums_1.CountryCode[enums_1.CountryCode.NR];
        }
        else if (ph.startsWith('+675')) {
            return enums_1.CountryCode[enums_1.CountryCode.PG];
        }
        else if (ph.startsWith('+676')) {
            return enums_1.CountryCode[enums_1.CountryCode.TO];
        }
        else if (ph.startsWith('+677')) {
            return enums_1.CountryCode[enums_1.CountryCode.SB];
        }
        else if (ph.startsWith('+678')) {
            return enums_1.CountryCode[enums_1.CountryCode.VU];
        }
        else if (ph.startsWith('+679')) {
            return enums_1.CountryCode[enums_1.CountryCode.FJ];
        }
        else if (ph.startsWith('+680')) {
            return enums_1.CountryCode[enums_1.CountryCode.PW];
        }
        else if (ph.startsWith('+681')) {
            return enums_1.CountryCode[enums_1.CountryCode.WF];
        }
        else if (ph.startsWith('+682')) {
            return enums_1.CountryCode[enums_1.CountryCode.CK];
        }
        else if (ph.startsWith('+683')) {
            return enums_1.CountryCode[enums_1.CountryCode.NU];
        }
        else if (ph.startsWith('+685')) {
            return enums_1.CountryCode[enums_1.CountryCode.WS];
        }
        else if (ph.startsWith('+686')) {
            return enums_1.CountryCode[enums_1.CountryCode.KI];
        }
        else if (ph.startsWith('+687')) {
            return enums_1.CountryCode[enums_1.CountryCode.NC];
        }
        else if (ph.startsWith('+688')) {
            return enums_1.CountryCode[enums_1.CountryCode.TV];
        }
        else if (ph.startsWith('+689')) {
            return enums_1.CountryCode[enums_1.CountryCode.PF];
        }
        else if (ph.startsWith('+690')) {
            return enums_1.CountryCode[enums_1.CountryCode.TK];
        }
        else if (ph.startsWith('+691')) {
            return enums_1.CountryCode[enums_1.CountryCode.FM];
        }
        else if (ph.startsWith('+692')) {
            return enums_1.CountryCode[enums_1.CountryCode.MH];
        }
        else if (ph.startsWith('+850')) {
            return enums_1.CountryCode[enums_1.CountryCode.KP];
        }
        else if (ph.startsWith('+852')) {
            return enums_1.CountryCode[enums_1.CountryCode.HK];
        }
        else if (ph.startsWith('+853')) {
            return enums_1.CountryCode[enums_1.CountryCode.MO];
        }
        else if (ph.startsWith('+855')) {
            return enums_1.CountryCode[enums_1.CountryCode.KH];
        }
        else if (ph.startsWith('+856')) {
            return enums_1.CountryCode[enums_1.CountryCode.LA];
        }
        else if (ph.startsWith('+870')) {
            return enums_1.CountryCode[enums_1.CountryCode.PN];
        }
        else if (ph.startsWith('+880')) {
            return enums_1.CountryCode[enums_1.CountryCode.BD];
        }
        else if (ph.startsWith('+886')) {
            return enums_1.CountryCode[enums_1.CountryCode.TW];
        }
        else if (ph.startsWith('+960')) {
            return enums_1.CountryCode[enums_1.CountryCode.MV];
        }
        else if (ph.startsWith('+961')) {
            return enums_1.CountryCode[enums_1.CountryCode.LB];
        }
        else if (ph.startsWith('+962')) {
            return enums_1.CountryCode[enums_1.CountryCode.JO];
        }
        else if (ph.startsWith('+963')) {
            return enums_1.CountryCode[enums_1.CountryCode.SY];
        }
        else if (ph.startsWith('+964')) {
            return enums_1.CountryCode[enums_1.CountryCode.IQ];
        }
        else if (ph.startsWith('+965')) {
            return enums_1.CountryCode[enums_1.CountryCode.KW];
        }
        else if (ph.startsWith('+966')) {
            return enums_1.CountryCode[enums_1.CountryCode.SA];
        }
        else if (ph.startsWith('+967')) {
            return enums_1.CountryCode[enums_1.CountryCode.YE];
        }
        else if (ph.startsWith('+968')) {
            return enums_1.CountryCode[enums_1.CountryCode.OM];
        }
        else if (ph.startsWith('+971')) {
            return enums_1.CountryCode[enums_1.CountryCode.AE];
        }
        else if (ph.startsWith('+972')) {
            return enums_1.CountryCode[enums_1.CountryCode.IL];
        }
        else if (ph.startsWith('+973')) {
            return enums_1.CountryCode[enums_1.CountryCode.BH];
        }
        else if (ph.startsWith('+974')) {
            return enums_1.CountryCode[enums_1.CountryCode.QA];
        }
        else if (ph.startsWith('+975')) {
            return enums_1.CountryCode[enums_1.CountryCode.BT];
        }
        else if (ph.startsWith('+976')) {
            return enums_1.CountryCode[enums_1.CountryCode.MN];
        }
        else if (ph.startsWith('+977')) {
            return enums_1.CountryCode[enums_1.CountryCode.NP];
        }
        else if (ph.startsWith('+992')) {
            return enums_1.CountryCode[enums_1.CountryCode.TJ];
        }
        else if (ph.startsWith('+993')) {
            return enums_1.CountryCode[enums_1.CountryCode.TM];
        }
        else if (ph.startsWith('+994')) {
            return enums_1.CountryCode[enums_1.CountryCode.AZ];
        }
        else if (ph.startsWith('+995')) {
            return enums_1.CountryCode[enums_1.CountryCode.GE];
        }
        else if (ph.startsWith('+996')) {
            return enums_1.CountryCode[enums_1.CountryCode.KG];
        }
        else if (ph.startsWith('+998')) {
            return enums_1.CountryCode[enums_1.CountryCode.UZ];
        }
        else {
            return enums_1.CountryCode[enums_1.CountryCode.US];
        }
    };
    return CountryIsdCodeUtility;
}());
exports.CountryIsdCodeUtility = CountryIsdCodeUtility;
