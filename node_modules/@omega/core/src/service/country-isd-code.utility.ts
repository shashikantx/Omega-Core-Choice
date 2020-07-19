import {CountryCode} from "../enums";
import {COUNTRY_ISD_CODE} from "../const/country-isd-code";

export class CountryIsdCodeUtility {

  public static getIsdCode(code: string): number {
    if (!code) {
      return COUNTRY_ISD_CODE.US;
    }
    //TODO FIXME
    switch (code) {
      case CountryCode[CountryCode.AF]:
        return COUNTRY_ISD_CODE.AF;
      case CountryCode[CountryCode.AL]:
        return COUNTRY_ISD_CODE.AL;
      case CountryCode[CountryCode.DZ]:
        return COUNTRY_ISD_CODE.DZ;
      case CountryCode[CountryCode.AD]:
        return COUNTRY_ISD_CODE.AD;
      case CountryCode[CountryCode.AO]:
        return COUNTRY_ISD_CODE.AO;
      case CountryCode[CountryCode.AQ]:
        return COUNTRY_ISD_CODE.AQ;
      case CountryCode[CountryCode.AR]:
        return COUNTRY_ISD_CODE.AR;
      case CountryCode[CountryCode.AM]:
        return COUNTRY_ISD_CODE.AM;
      case CountryCode[CountryCode.AW]:
        return COUNTRY_ISD_CODE.AW;
      case CountryCode[CountryCode.AU]:
        return COUNTRY_ISD_CODE.AU;
      case CountryCode[CountryCode.AT]:
        return COUNTRY_ISD_CODE.AT;
      case CountryCode[CountryCode.AZ]:
        return COUNTRY_ISD_CODE.AZ;
      case CountryCode[CountryCode.BH]:
        return COUNTRY_ISD_CODE.BH;
      case CountryCode[CountryCode.BD]:
        return COUNTRY_ISD_CODE.BD;
      case CountryCode[CountryCode.BY]:
        return COUNTRY_ISD_CODE.BY;
      case CountryCode[CountryCode.BE]:
        return COUNTRY_ISD_CODE.BE;
      case CountryCode[CountryCode.BZ]:
        return COUNTRY_ISD_CODE.BZ;
      case CountryCode[CountryCode.BJ]:
        return COUNTRY_ISD_CODE.BJ;
      case CountryCode[CountryCode.BT]:
        return COUNTRY_ISD_CODE.BT;
      case CountryCode[CountryCode.BO]:
        return COUNTRY_ISD_CODE.BO;
      case CountryCode[CountryCode.BA]:
        return COUNTRY_ISD_CODE.BA;
      case CountryCode[CountryCode.BW]:
        return COUNTRY_ISD_CODE.BW;
      case CountryCode[CountryCode.BR]:
        return COUNTRY_ISD_CODE.BR;
      case CountryCode[CountryCode.BN]:
        return COUNTRY_ISD_CODE.BN;
      case CountryCode[CountryCode.BG]:
        return COUNTRY_ISD_CODE.BG;
      case CountryCode[CountryCode.BF]:
        return COUNTRY_ISD_CODE.BF;
      case CountryCode[CountryCode.MM]:
        return COUNTRY_ISD_CODE.MM;
      case CountryCode[CountryCode.BI]:
        return COUNTRY_ISD_CODE.BI;
      case CountryCode[CountryCode.KH]:
        return COUNTRY_ISD_CODE.KH;
      case CountryCode[CountryCode.CM]:
        return COUNTRY_ISD_CODE.CM;
      case CountryCode[CountryCode.CA]:
        return COUNTRY_ISD_CODE.CA;
      case CountryCode[CountryCode.CV]:
        return COUNTRY_ISD_CODE.CV;
      case CountryCode[CountryCode.CF]:
        return COUNTRY_ISD_CODE.CF;
      case CountryCode[CountryCode.TD]:
        return COUNTRY_ISD_CODE.TD;
      case CountryCode[CountryCode.CL]:
        return COUNTRY_ISD_CODE.CL;
      case CountryCode[CountryCode.CN]:
        return COUNTRY_ISD_CODE.CN;
      case CountryCode[CountryCode.CX]:
        return COUNTRY_ISD_CODE.CX;
      case CountryCode[CountryCode.CC]:
        return COUNTRY_ISD_CODE.CC;
      case CountryCode[CountryCode.CO]:
        return COUNTRY_ISD_CODE.CO;
      case CountryCode[CountryCode.KM]:
        return COUNTRY_ISD_CODE.KM;
      case CountryCode[CountryCode.CG]:
        return COUNTRY_ISD_CODE.CG;
      case CountryCode[CountryCode.CD]:
        return COUNTRY_ISD_CODE.CD;
      case CountryCode[CountryCode.CK]:
        return COUNTRY_ISD_CODE.CK;
      case CountryCode[CountryCode.CR]:
        return COUNTRY_ISD_CODE.CR;
      case CountryCode[CountryCode.HR]:
        return COUNTRY_ISD_CODE.HR;
      case CountryCode[CountryCode.CU]:
        return COUNTRY_ISD_CODE.CU;
      case CountryCode[CountryCode.CY]:
        return COUNTRY_ISD_CODE.CY;
      case CountryCode[CountryCode.CZ]:
        return COUNTRY_ISD_CODE.CZ;
      case CountryCode[CountryCode.DK]:
        return COUNTRY_ISD_CODE.DK;
      case CountryCode[CountryCode.DJ]:
        return COUNTRY_ISD_CODE.DJ;
      case CountryCode[CountryCode.TL]:
        return COUNTRY_ISD_CODE.TL;
      case CountryCode[CountryCode.EC]:
        return COUNTRY_ISD_CODE.EC;
      case CountryCode[CountryCode.EG]:
        return COUNTRY_ISD_CODE.EG;
      case CountryCode[CountryCode.SV]:
        return COUNTRY_ISD_CODE.SV;
      case CountryCode[CountryCode.GQ]:
        return COUNTRY_ISD_CODE.GQ;
      case CountryCode[CountryCode.ER]:
        return COUNTRY_ISD_CODE.ER;
      case CountryCode[CountryCode.EE]:
        return COUNTRY_ISD_CODE.EE;
      case CountryCode[CountryCode.ET]:
        return COUNTRY_ISD_CODE.ET;
      case CountryCode[CountryCode.FK]:
        return COUNTRY_ISD_CODE.FK;
      case CountryCode[CountryCode.FO]:
        return COUNTRY_ISD_CODE.FO;
      case CountryCode[CountryCode.FJ]:
        return COUNTRY_ISD_CODE.FJ;
      case CountryCode[CountryCode.FI]:
        return COUNTRY_ISD_CODE.FI;
      case CountryCode[CountryCode.FR]:
        return COUNTRY_ISD_CODE.FR;
      case CountryCode[CountryCode.PF]:
        return COUNTRY_ISD_CODE.PF;
      case CountryCode[CountryCode.GA]:
        return COUNTRY_ISD_CODE.GA;
      case CountryCode[CountryCode.GM]:
        return COUNTRY_ISD_CODE.GM;
      case CountryCode[CountryCode.GE]:
        return COUNTRY_ISD_CODE.GE;
      case CountryCode[CountryCode.DE]:
        return COUNTRY_ISD_CODE.DE;
      case CountryCode[CountryCode.GH]:
        return COUNTRY_ISD_CODE.GH;
      case CountryCode[CountryCode.GI]:
        return COUNTRY_ISD_CODE.GI;
      case CountryCode[CountryCode.GR]:
        return COUNTRY_ISD_CODE.GR;
      case CountryCode[CountryCode.GL]:
        return COUNTRY_ISD_CODE.GL;
      case CountryCode[CountryCode.GT]:
        return COUNTRY_ISD_CODE.GT;
      case CountryCode[CountryCode.GN]:
        return COUNTRY_ISD_CODE.GN;
      case CountryCode[CountryCode.GW]:
        return COUNTRY_ISD_CODE.GW;
      case CountryCode[CountryCode.GY]:
        return COUNTRY_ISD_CODE.GY;
      case CountryCode[CountryCode.HT]:
        return COUNTRY_ISD_CODE.HT;
      case CountryCode[CountryCode.HN]:
        return COUNTRY_ISD_CODE.HN;
      case CountryCode[CountryCode.HK]:
        return COUNTRY_ISD_CODE.HK;
      case CountryCode[CountryCode.HU]:
        return COUNTRY_ISD_CODE.HU;
      case CountryCode[CountryCode.IN]:
        return COUNTRY_ISD_CODE.IN;
      case CountryCode[CountryCode.ID]:
        return COUNTRY_ISD_CODE.ID;
      case CountryCode[CountryCode.IR]:
        return COUNTRY_ISD_CODE.IR;
      case CountryCode[CountryCode.IQ]:
        return COUNTRY_ISD_CODE.IQ;
      case CountryCode[CountryCode.IE]:
        return COUNTRY_ISD_CODE.IE;
      case CountryCode[CountryCode.IM]:
        return COUNTRY_ISD_CODE.IM;
      case CountryCode[CountryCode.IL]:
        return COUNTRY_ISD_CODE.IL;
      case CountryCode[CountryCode.IT]:
        return COUNTRY_ISD_CODE.IT;
      case CountryCode[CountryCode.CI]:
        return COUNTRY_ISD_CODE.CI;
      case CountryCode[CountryCode.JP]:
        return COUNTRY_ISD_CODE.JP;
      case CountryCode[CountryCode.JO]:
        return COUNTRY_ISD_CODE.JO;
      case CountryCode[CountryCode.KZ]:
        return COUNTRY_ISD_CODE.KZ;
      case CountryCode[CountryCode.KE]:
        return COUNTRY_ISD_CODE.KE;
      case CountryCode[CountryCode.KI]:
        return COUNTRY_ISD_CODE.KI;
      case CountryCode[CountryCode.KW]:
        return COUNTRY_ISD_CODE.KW;
      case CountryCode[CountryCode.KG]:
        return COUNTRY_ISD_CODE.KG;
      case CountryCode[CountryCode.LA]:
        return COUNTRY_ISD_CODE.LA;
      case CountryCode[CountryCode.LV]:
        return COUNTRY_ISD_CODE.LV;
      case CountryCode[CountryCode.LB]:
        return COUNTRY_ISD_CODE.LB;
      case CountryCode[CountryCode.LS]:
        return COUNTRY_ISD_CODE.LS;
      case CountryCode[CountryCode.LR]:
        return COUNTRY_ISD_CODE.LR;
      case CountryCode[CountryCode.LY]:
        return COUNTRY_ISD_CODE.LY;
      case CountryCode[CountryCode.LI]:
        return COUNTRY_ISD_CODE.LI;
      case CountryCode[CountryCode.LT]:
        return COUNTRY_ISD_CODE.LT;
      case CountryCode[CountryCode.LU]:
        return COUNTRY_ISD_CODE.LU;
      case CountryCode[CountryCode.MO]:
        return COUNTRY_ISD_CODE.MO;
      case CountryCode[CountryCode.MK]:
        return COUNTRY_ISD_CODE.MK;
      case CountryCode[CountryCode.MG]:
        return COUNTRY_ISD_CODE.MG;
      case CountryCode[CountryCode.MW]:
        return COUNTRY_ISD_CODE.MW;
      case CountryCode[CountryCode.MY]:
        return COUNTRY_ISD_CODE.MY;
      case CountryCode[CountryCode.MV]:
        return COUNTRY_ISD_CODE.MV;
      case CountryCode[CountryCode.ML]:
        return COUNTRY_ISD_CODE.ML;
      case CountryCode[CountryCode.MT]:
        return COUNTRY_ISD_CODE.MT;
      case CountryCode[CountryCode.MH]:
        return COUNTRY_ISD_CODE.MH;
      case CountryCode[CountryCode.MR]:
        return COUNTRY_ISD_CODE.MR;
      case CountryCode[CountryCode.MU]:
        return COUNTRY_ISD_CODE.MU;
      case CountryCode[CountryCode.YT]:
        return COUNTRY_ISD_CODE.YT;
      case CountryCode[CountryCode.MX]:
        return COUNTRY_ISD_CODE.MX;
      case CountryCode[CountryCode.FM]:
        return COUNTRY_ISD_CODE.FM;
      case CountryCode[CountryCode.MD]:
        return COUNTRY_ISD_CODE.MD;
      case CountryCode[CountryCode.MC]:
        return COUNTRY_ISD_CODE.MC;
      case CountryCode[CountryCode.MN]:
        return COUNTRY_ISD_CODE.MN;
      case CountryCode[CountryCode.ME]:
        return COUNTRY_ISD_CODE.ME;
      case CountryCode[CountryCode.MA]:
        return COUNTRY_ISD_CODE.MA;
      case CountryCode[CountryCode.MZ]:
        return COUNTRY_ISD_CODE.MZ;
      case CountryCode[CountryCode.NA]:
        return COUNTRY_ISD_CODE.NA;
      case CountryCode[CountryCode.NR]:
        return COUNTRY_ISD_CODE.NR;
      case CountryCode[CountryCode.NP]:
        return COUNTRY_ISD_CODE.NP;
      case CountryCode[CountryCode.NL]:
        return COUNTRY_ISD_CODE.NL;
      case CountryCode[CountryCode.AN]:
        return COUNTRY_ISD_CODE.AN;
      case CountryCode[CountryCode.NC]:
        return COUNTRY_ISD_CODE.NC;
      case CountryCode[CountryCode.NZ]:
        return COUNTRY_ISD_CODE.NZ;
      case CountryCode[CountryCode.NI]:
        return COUNTRY_ISD_CODE.NI;
      case CountryCode[CountryCode.NE]:
        return COUNTRY_ISD_CODE.NE;
      case CountryCode[CountryCode.NG]:
        return COUNTRY_ISD_CODE.NG;
      case CountryCode[CountryCode.NU]:
        return COUNTRY_ISD_CODE.NU;
      case CountryCode[CountryCode.KP]:
        return COUNTRY_ISD_CODE.KP;
      case CountryCode[CountryCode.NO]:
        return COUNTRY_ISD_CODE.NO;
      case CountryCode[CountryCode.OM]:
        return COUNTRY_ISD_CODE.OM;
      case CountryCode[CountryCode.PK]:
        return COUNTRY_ISD_CODE.PK;
      case CountryCode[CountryCode.PW]:
        return COUNTRY_ISD_CODE.PW;
      case CountryCode[CountryCode.PA]:
        return COUNTRY_ISD_CODE.PA;
      case CountryCode[CountryCode.PG]:
        return COUNTRY_ISD_CODE.PG;
      case CountryCode[CountryCode.PY]:
        return COUNTRY_ISD_CODE.PY;
      case CountryCode[CountryCode.PE]:
        return COUNTRY_ISD_CODE.PE;
      case CountryCode[CountryCode.PH]:
        return COUNTRY_ISD_CODE.PH;
      case CountryCode[CountryCode.PN]:
        return COUNTRY_ISD_CODE.PN;
      case CountryCode[CountryCode.PL]:
        return COUNTRY_ISD_CODE.PL;
      case CountryCode[CountryCode.PT]:
        return COUNTRY_ISD_CODE.PT;
      case CountryCode[CountryCode.PR]:
        return COUNTRY_ISD_CODE.PR;
      case CountryCode[CountryCode.QA]:
        return COUNTRY_ISD_CODE.QA;
      case CountryCode[CountryCode.RO]:
        return COUNTRY_ISD_CODE.RO;
      case CountryCode[CountryCode.RU]:
        return COUNTRY_ISD_CODE.RU;
      case CountryCode[CountryCode.RW]:
        return COUNTRY_ISD_CODE.RW;
      case CountryCode[CountryCode.BL]:
        return COUNTRY_ISD_CODE.BL;
      case CountryCode[CountryCode.WS]:
        return COUNTRY_ISD_CODE.WS;
      case CountryCode[CountryCode.SM]:
        return COUNTRY_ISD_CODE.SM;
      case CountryCode[CountryCode.ST]:
        return COUNTRY_ISD_CODE.ST;
      case CountryCode[CountryCode.SA]:
        return COUNTRY_ISD_CODE.SA;
      case CountryCode[CountryCode.SN]:
        return COUNTRY_ISD_CODE.SN;
      case CountryCode[CountryCode.RS]:
        return COUNTRY_ISD_CODE.RS;
      case CountryCode[CountryCode.SC]:
        return COUNTRY_ISD_CODE.SC;
      case CountryCode[CountryCode.SL]:
        return COUNTRY_ISD_CODE.SL;
      case CountryCode[CountryCode.SG]:
        return COUNTRY_ISD_CODE.SG;
      case CountryCode[CountryCode.SK]:
        return COUNTRY_ISD_CODE.SK;
      case CountryCode[CountryCode.SI]:
        return COUNTRY_ISD_CODE.SI;
      case CountryCode[CountryCode.SB]:
        return COUNTRY_ISD_CODE.SB;
      case CountryCode[CountryCode.SO]:
        return COUNTRY_ISD_CODE.SO;
      case CountryCode[CountryCode.ZA]:
        return COUNTRY_ISD_CODE.ZA;
      case CountryCode[CountryCode.KR]:
        return COUNTRY_ISD_CODE.KR;
      case CountryCode[CountryCode.ES]:
        return COUNTRY_ISD_CODE.ES;
      case CountryCode[CountryCode.LK]:
        return COUNTRY_ISD_CODE.LK;
      case CountryCode[CountryCode.SH]:
        return COUNTRY_ISD_CODE.SH;
      case CountryCode[CountryCode.PM]:
        return COUNTRY_ISD_CODE.PM;
      case CountryCode[CountryCode.SD]:
        return COUNTRY_ISD_CODE.SD;
      case CountryCode[CountryCode.SR]:
        return COUNTRY_ISD_CODE.SR;
      case CountryCode[CountryCode.SZ]:
        return COUNTRY_ISD_CODE.SZ;
      case CountryCode[CountryCode.SE]:
        return COUNTRY_ISD_CODE.SE;
      case CountryCode[CountryCode.CH]:
        return COUNTRY_ISD_CODE.CH;
      case CountryCode[CountryCode.SY]:
        return COUNTRY_ISD_CODE.SY;
      case CountryCode[CountryCode.TW]:
        return COUNTRY_ISD_CODE.TW;
      case CountryCode[CountryCode.TJ]:
        return COUNTRY_ISD_CODE.TJ;
      case CountryCode[CountryCode.TZ]:
        return COUNTRY_ISD_CODE.TZ;
      case CountryCode[CountryCode.TH]:
        return COUNTRY_ISD_CODE.TH;
      case CountryCode[CountryCode.TG]:
        return COUNTRY_ISD_CODE.TG;
      case CountryCode[CountryCode.TK]:
        return COUNTRY_ISD_CODE.TK;
      case CountryCode[CountryCode.TO]:
        return COUNTRY_ISD_CODE.TO;
      case CountryCode[CountryCode.TN]:
        return COUNTRY_ISD_CODE.TN;
      case CountryCode[CountryCode.TR]:
        return COUNTRY_ISD_CODE.TR;
      case CountryCode[CountryCode.TM]:
        return COUNTRY_ISD_CODE.TM;
      case CountryCode[CountryCode.TV]:
        return COUNTRY_ISD_CODE.TV;
      case CountryCode[CountryCode.AE]:
        return COUNTRY_ISD_CODE.AE;
      case CountryCode[CountryCode.UG]:
        return COUNTRY_ISD_CODE.UG;
      case CountryCode[CountryCode.GB]:
        return COUNTRY_ISD_CODE.GB;
      case CountryCode[CountryCode.UA]:
        return COUNTRY_ISD_CODE.UA;
      case CountryCode[CountryCode.UY]:
        return COUNTRY_ISD_CODE.UY;
      case CountryCode[CountryCode.US]:
        return COUNTRY_ISD_CODE.US;
      case CountryCode[CountryCode.UZ]:
        return COUNTRY_ISD_CODE.UZ;
      case CountryCode[CountryCode.VU]:
        return COUNTRY_ISD_CODE.VU;
      case CountryCode[CountryCode.VA]:
        return COUNTRY_ISD_CODE.VA;
      case CountryCode[CountryCode.VE]:
        return COUNTRY_ISD_CODE.VE;
      case CountryCode[CountryCode.VN]:
        return COUNTRY_ISD_CODE.VN;
      case CountryCode[CountryCode.WF]:
        return COUNTRY_ISD_CODE.WF;
      case CountryCode[CountryCode.YE]:
        return COUNTRY_ISD_CODE.YE;
      case CountryCode[CountryCode.ZM]:
        return COUNTRY_ISD_CODE.ZM;
      case CountryCode[CountryCode.ZW]:
        return COUNTRY_ISD_CODE.ZW;
      default:
        return COUNTRY_ISD_CODE.US;
    }
  }

  public static getCountryCode(ph: string): string {
    if (!(ph && ph.startsWith('+'))) {
      return CountryCode[CountryCode.US];
    }

    if (ph.startsWith('+' + COUNTRY_ISD_CODE.US)) {  // +1
      return CountryCode[CountryCode.US];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CA)) {  // +1
      return CountryCode[CountryCode.CA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PR)) {  // +1
      return CountryCode[CountryCode.PR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KZ)) {  // +7
      return CountryCode[CountryCode.KZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.RU)) {  // +7
      return CountryCode[CountryCode.RU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.EG)) {
      return CountryCode[CountryCode.EG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ZA)) {
      return CountryCode[CountryCode.ZA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GR)) {
      return CountryCode[CountryCode.GR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NL)) {
      return CountryCode[CountryCode.NL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BE)) {
      return CountryCode[CountryCode.BE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FR)) {
      return CountryCode[CountryCode.FR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ES)) {
      return CountryCode[CountryCode.ES];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.HU)) {
      return CountryCode[CountryCode.HU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IT)) {  // +39
      return CountryCode[CountryCode.IT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.VA)) {  // +39
      return CountryCode[CountryCode.VA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.RO)) {
      return CountryCode[CountryCode.RO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CH)) {
      return CountryCode[CountryCode.CH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AT)) {
      return CountryCode[CountryCode.AT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IM)) {  // +44
      return CountryCode[CountryCode.IM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GB)) {  // +44
      return CountryCode[CountryCode.GB];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.DK)) {
      return CountryCode[CountryCode.DK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SE)) {
      return CountryCode[CountryCode.SE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NO)) {
      return CountryCode[CountryCode.NO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PL)) {
      return CountryCode[CountryCode.PL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.DE)) {
      return CountryCode[CountryCode.DE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PE)) {
      return CountryCode[CountryCode.PE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MX)) {
      return CountryCode[CountryCode.MX];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CU)) {
      return CountryCode[CountryCode.CU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AR)) {
      return CountryCode[CountryCode.AR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BR)) {
      return CountryCode[CountryCode.BR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CL)) {
      return CountryCode[CountryCode.CL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CO)) {
      return CountryCode[CountryCode.CO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.VE)) {
      return CountryCode[CountryCode.VE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MY)) {
      return CountryCode[CountryCode.MY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AU)) {
      return CountryCode[CountryCode.AU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CX)) {
      return CountryCode[CountryCode.CX];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CC)) {
      return CountryCode[CountryCode.CC];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ID)) {
      return CountryCode[CountryCode.ID];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PH)) {
      return CountryCode[CountryCode.PH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NZ)) {
      return CountryCode[CountryCode.NZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SG)) {
      return CountryCode[CountryCode.SG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TH)) {
      return CountryCode[CountryCode.TH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.JP)) {
      return CountryCode[CountryCode.JP];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KR)) {
      return CountryCode[CountryCode.KR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.VN)) {
      return CountryCode[CountryCode.VN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CN)) {
      return CountryCode[CountryCode.CN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TR)) {
      return CountryCode[CountryCode.TR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IN)) {
      return CountryCode[CountryCode.IN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PK)) {
      return CountryCode[CountryCode.PK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AF)) {
      return CountryCode[CountryCode.AF];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LK)) {
      return CountryCode[CountryCode.LK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MM)) {
      return CountryCode[CountryCode.MM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IR)) {
      return CountryCode[CountryCode.IR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MA)) {
      return CountryCode[CountryCode.MA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.DZ)) {
      return CountryCode[CountryCode.DZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TN)) {
      return CountryCode[CountryCode.TN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LY)) {
      return CountryCode[CountryCode.LY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GM)) {
      return CountryCode[CountryCode.GM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SN)) {
      return CountryCode[CountryCode.SN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MR)) {
      return CountryCode[CountryCode.MR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ML)) {
      return CountryCode[CountryCode.ML];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GN)) {
      return CountryCode[CountryCode.GN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CI)) {
      return CountryCode[CountryCode.CI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BF)) {
      return CountryCode[CountryCode.BF];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NE)) {
      return CountryCode[CountryCode.NE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TG)) {
      return CountryCode[CountryCode.TG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BJ)) {
      return CountryCode[CountryCode.BJ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MU)) {
      return CountryCode[CountryCode.MU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LR)) {
      return CountryCode[CountryCode.LR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SL)) {
      return CountryCode[CountryCode.SL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GH)) {
      return CountryCode[CountryCode.GH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NG)) {
      return CountryCode[CountryCode.NG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TD)) {
      return CountryCode[CountryCode.TD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CF)) {
      return CountryCode[CountryCode.CF];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CM)) {
      return CountryCode[CountryCode.CM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CV)) {
      return CountryCode[CountryCode.CV];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ST)) {
      return CountryCode[CountryCode.ST];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GQ)) {
      return CountryCode[CountryCode.GQ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GA)) {
      return CountryCode[CountryCode.GA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CG)) {
      return CountryCode[CountryCode.CG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CD)) {
      return CountryCode[CountryCode.CD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AO)) {
      return CountryCode[CountryCode.AO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GW)) {
      return CountryCode[CountryCode.GW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SC)) {
      return CountryCode[CountryCode.SC];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SD)) {
      return CountryCode[CountryCode.SD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.RW)) {
      return CountryCode[CountryCode.RW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ET)) {
      return CountryCode[CountryCode.ET];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SO)) {
      return CountryCode[CountryCode.SO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.DJ)) {
      return CountryCode[CountryCode.DJ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KE)) {
      return CountryCode[CountryCode.KE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TZ)) {
      return CountryCode[CountryCode.TZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.UG)) {
      return CountryCode[CountryCode.UG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BI)) {
      return CountryCode[CountryCode.BI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MZ)) {
      return CountryCode[CountryCode.MZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ZM)) {
      return CountryCode[CountryCode.ZM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MG)) {
      return CountryCode[CountryCode.MG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.YT)) {
      return CountryCode[CountryCode.YT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ZW)) {
      return CountryCode[CountryCode.ZW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NA)) {
      return CountryCode[CountryCode.NA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MW)) {
      return CountryCode[CountryCode.MW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LS)) {
      return CountryCode[CountryCode.LS];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BW)) {
      return CountryCode[CountryCode.BW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SZ)) {
      return CountryCode[CountryCode.SZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KM)) {
      return CountryCode[CountryCode.KM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SH)) {
      return CountryCode[CountryCode.SH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ER)) {
      return CountryCode[CountryCode.ER];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AW)) {
      return CountryCode[CountryCode.AW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FO)) {
      return CountryCode[CountryCode.FO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GL)) {
      return CountryCode[CountryCode.GL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GI)) {
      return CountryCode[CountryCode.GI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PT)) {
      return CountryCode[CountryCode.PT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LU)) {
      return CountryCode[CountryCode.LU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IE)) {
      return CountryCode[CountryCode.IE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AL)) {
      return CountryCode[CountryCode.AL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MT)) {
      return CountryCode[CountryCode.MT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CY)) {
      return CountryCode[CountryCode.CY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FI)) {
      return CountryCode[CountryCode.FI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BG)) {
      return CountryCode[CountryCode.BG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LT)) {
      return CountryCode[CountryCode.LT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LV)) {
      return CountryCode[CountryCode.LV];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.EE)) {
      return CountryCode[CountryCode.EE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MD)) {
      return CountryCode[CountryCode.MD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AM)) {
      return CountryCode[CountryCode.AM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BY)) {
      return CountryCode[CountryCode.BY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AD)) {
      return CountryCode[CountryCode.AD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MC)) {
      return CountryCode[CountryCode.MC];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SM)) {
      return CountryCode[CountryCode.SM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.UA)) {
      return CountryCode[CountryCode.UA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.RS)) {
      return CountryCode[CountryCode.RS];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.ME)) {
      return CountryCode[CountryCode.ME];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.HR)) {
      return CountryCode[CountryCode.HR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SI)) {
      return CountryCode[CountryCode.SI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BA)) {
      return CountryCode[CountryCode.BA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MK)) {
      return CountryCode[CountryCode.MK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CZ)) {
      return CountryCode[CountryCode.CZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SK)) {
      return CountryCode[CountryCode.SK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LI)) {
      return CountryCode[CountryCode.LI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FK)) {
      return CountryCode[CountryCode.FK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BZ)) {
      return CountryCode[CountryCode.BZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GT)) {
      return CountryCode[CountryCode.GT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SV)) {
      return CountryCode[CountryCode.SV];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.HN)) {
      return CountryCode[CountryCode.HN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NI)) {
      return CountryCode[CountryCode.NI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CR)) {
      return CountryCode[CountryCode.CR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PA)) {
      return CountryCode[CountryCode.PA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PM)) {
      return CountryCode[CountryCode.PM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.HT)) {
      return CountryCode[CountryCode.HT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BL)) {
      return CountryCode[CountryCode.BL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BO)) {
      return CountryCode[CountryCode.BO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GY)) {
      return CountryCode[CountryCode.GY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.EC)) {
      return CountryCode[CountryCode.EC];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PY)) {
      return CountryCode[CountryCode.PY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SR)) {
      return CountryCode[CountryCode.SR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.UY)) {
      return CountryCode[CountryCode.UY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AN)) {
      return CountryCode[CountryCode.AN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TL)) {
      return CountryCode[CountryCode.TL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AQ)) {
      return CountryCode[CountryCode.AQ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BN)) {
      return CountryCode[CountryCode.BN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NR)) {
      return CountryCode[CountryCode.NR];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PG)) {
      return CountryCode[CountryCode.PG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TO)) {
      return CountryCode[CountryCode.TO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SB)) {
      return CountryCode[CountryCode.SB];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.VU)) {
      return CountryCode[CountryCode.VU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FJ)) {
      return CountryCode[CountryCode.FJ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PW)) {
      return CountryCode[CountryCode.PW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.WF)) {
      return CountryCode[CountryCode.WF];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.CK)) {
      return CountryCode[CountryCode.CK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NU)) {
      return CountryCode[CountryCode.NU];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.WS)) {
      return CountryCode[CountryCode.WS];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KI)) {
      return CountryCode[CountryCode.KI];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NC)) {
      return CountryCode[CountryCode.NC];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TV)) {
      return CountryCode[CountryCode.TV];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PF)) {
      return CountryCode[CountryCode.PF];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TK)) {
      return CountryCode[CountryCode.TK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.FM)) {
      return CountryCode[CountryCode.FM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MH)) {
      return CountryCode[CountryCode.MH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KP)) {
      return CountryCode[CountryCode.KP];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.HK)) {
      return CountryCode[CountryCode.HK];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MO)) {
      return CountryCode[CountryCode.MO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KH)) {
      return CountryCode[CountryCode.KH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LA)) {
      return CountryCode[CountryCode.LA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.PN)) {
      return CountryCode[CountryCode.PN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BD)) {
      return CountryCode[CountryCode.BD];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TW)) {
      return CountryCode[CountryCode.TW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MV)) {
      return CountryCode[CountryCode.MV];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.LB)) {
      return CountryCode[CountryCode.LB];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.JO)) {
      return CountryCode[CountryCode.JO];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SY)) {
      return CountryCode[CountryCode.SY];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IQ)) {
      return CountryCode[CountryCode.IQ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KW)) {
      return CountryCode[CountryCode.KW];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.SA)) {
      return CountryCode[CountryCode.SA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.YE)) {
      return CountryCode[CountryCode.YE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.OM)) {
      return CountryCode[CountryCode.OM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AE)) {
      return CountryCode[CountryCode.AE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.IL)) {
      return CountryCode[CountryCode.IL];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BH)) {
      return CountryCode[CountryCode.BH];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.QA)) {
      return CountryCode[CountryCode.QA];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.BT)) {
      return CountryCode[CountryCode.BT];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.MN)) {
      return CountryCode[CountryCode.MN];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.NP)) {
      return CountryCode[CountryCode.NP];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TJ)) {
      return CountryCode[CountryCode.TJ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.TM)) {
      return CountryCode[CountryCode.TM];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.AZ)) {
      return CountryCode[CountryCode.AZ];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.GE)) {
      return CountryCode[CountryCode.GE];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.KG)) {
      return CountryCode[CountryCode.KG];
    } else if (ph.startsWith('+' + COUNTRY_ISD_CODE.UZ)) {
      return CountryCode[CountryCode.UZ];
    } else {
      return CountryCode[CountryCode.US];
    }
  }

  public static getCountryCodeV2(ph: string): string {
    if (!(ph && ph.startsWith('+'))) {
      return CountryCode[CountryCode.US];
    }

    if (ph.startsWith('+1')) {
      return CountryCode[CountryCode.US]; // +1
    } else if (ph.startsWith('+1')) {
      return CountryCode[CountryCode.CA]; // +1
    } else if (ph.startsWith('+1')) {
      return CountryCode[CountryCode.PR]; // +1
    } else if (ph.startsWith('+7')) {
      return CountryCode[CountryCode.KZ]; // +7
    } else if (ph.startsWith('+7')) {
      return CountryCode[CountryCode.RU]; // +7
    } else if (ph.startsWith('+20')) {
      return CountryCode[CountryCode.EG];
    } else if (ph.startsWith('+27')) {
      return CountryCode[CountryCode.ZA];
    } else if (ph.startsWith('+30')) {
      return CountryCode[CountryCode.GR];
    } else if (ph.startsWith('+31')) {
      return CountryCode[CountryCode.NL];
    } else if (ph.startsWith('+32')) {
      return CountryCode[CountryCode.BE];
    } else if (ph.startsWith('+33')) {
      return CountryCode[CountryCode.FR];
    } else if (ph.startsWith('+34')) {
      return CountryCode[CountryCode.ES];
    } else if (ph.startsWith('+36')) {
      return CountryCode[CountryCode.HU];
    } else if (ph.startsWith('+39')) {
      return CountryCode[CountryCode.IT]; // +39
    } else if (ph.startsWith('+39')) {
      return CountryCode[CountryCode.VA]; // +39
    } else if (ph.startsWith('+40')) {
      return CountryCode[CountryCode.RO];
    } else if (ph.startsWith('+41')) {
      return CountryCode[CountryCode.CH];
    } else if (ph.startsWith('+43')) {
      return CountryCode[CountryCode.AT];
    } else if (ph.startsWith('+44')) {
      return CountryCode[CountryCode.IM]; // +44
    } else if (ph.startsWith('+44')) {
      return CountryCode[CountryCode.GB]; // +44
    } else if (ph.startsWith('+45')) {
      return CountryCode[CountryCode.DK];
    } else if (ph.startsWith('+46')) {
      return CountryCode[CountryCode.SE];
    } else if (ph.startsWith('+47')) {
      return CountryCode[CountryCode.NO];
    } else if (ph.startsWith('+48')) {
      return CountryCode[CountryCode.PL];
    } else if (ph.startsWith('+49')) {
      return CountryCode[CountryCode.DE];
    } else if (ph.startsWith('+51')) {
      return CountryCode[CountryCode.PE];
    } else if (ph.startsWith('+52')) {
      return CountryCode[CountryCode.MX];
    } else if (ph.startsWith('+53')) {
      return CountryCode[CountryCode.CU];
    } else if (ph.startsWith('+54')) {
      return CountryCode[CountryCode.AR];
    } else if (ph.startsWith('+55')) {
      return CountryCode[CountryCode.BR];
    } else if (ph.startsWith('+56')) {
      return CountryCode[CountryCode.CL];
    } else if (ph.startsWith('+57')) {
      return CountryCode[CountryCode.CO];
    } else if (ph.startsWith('+58')) {
      return CountryCode[CountryCode.VE];
    } else if (ph.startsWith('+60')) {
      return CountryCode[CountryCode.MY];
    } else if (ph.startsWith('+61')) {
      return CountryCode[CountryCode.AU];
    } else if (ph.startsWith('+61')) {
      return CountryCode[CountryCode.CX];
    } else if (ph.startsWith('+61')) {
      return CountryCode[CountryCode.CC];
    } else if (ph.startsWith('+62')) {
      return CountryCode[CountryCode.ID];
    } else if (ph.startsWith('+63')) {
      return CountryCode[CountryCode.PH];
    } else if (ph.startsWith('+64')) {
      return CountryCode[CountryCode.NZ];
    } else if (ph.startsWith('+65')) {
      return CountryCode[CountryCode.SG];
    } else if (ph.startsWith('+66')) {
      return CountryCode[CountryCode.TH];
    } else if (ph.startsWith('+81')) {
      return CountryCode[CountryCode.JP];
    } else if (ph.startsWith('+82')) {
      return CountryCode[CountryCode.KR];
    } else if (ph.startsWith('+84')) {
      return CountryCode[CountryCode.VN];
    } else if (ph.startsWith('+86')) {
      return CountryCode[CountryCode.CN];
    } else if (ph.startsWith('+90')) {
      return CountryCode[CountryCode.TR];
    } else if (ph.startsWith('+91')) {
      return CountryCode[CountryCode.IN];
    } else if (ph.startsWith('+92')) {
      return CountryCode[CountryCode.PK];
    } else if (ph.startsWith('+93')) {
      return CountryCode[CountryCode.AF];
    } else if (ph.startsWith('+94')) {
      return CountryCode[CountryCode.LK];
    } else if (ph.startsWith('+95')) {
      return CountryCode[CountryCode.MM];
    } else if (ph.startsWith('+98')) {
      return CountryCode[CountryCode.IR];
    } else if (ph.startsWith('+212')) {
      return CountryCode[CountryCode.MA];
    } else if (ph.startsWith('+213')) {
      return CountryCode[CountryCode.DZ];
    } else if (ph.startsWith('+216')) {
      return CountryCode[CountryCode.TN];
    } else if (ph.startsWith('+218')) {
      return CountryCode[CountryCode.LY];
    } else if (ph.startsWith('+220')) {
      return CountryCode[CountryCode.GM];
    } else if (ph.startsWith('+221')) {
      return CountryCode[CountryCode.SN];
    } else if (ph.startsWith('+222')) {
      return CountryCode[CountryCode.MR];
    } else if (ph.startsWith('+223')) {
      return CountryCode[CountryCode.ML];
    } else if (ph.startsWith('+224')) {
      return CountryCode[CountryCode.GN];
    } else if (ph.startsWith('+225')) {
      return CountryCode[CountryCode.CI];
    } else if (ph.startsWith('+226')) {
      return CountryCode[CountryCode.BF];
    } else if (ph.startsWith('+227')) {
      return CountryCode[CountryCode.NE];
    } else if (ph.startsWith('+228')) {
      return CountryCode[CountryCode.TG];
    } else if (ph.startsWith('+229')) {
      return CountryCode[CountryCode.BJ];
    } else if (ph.startsWith('+230')) {
      return CountryCode[CountryCode.MU];
    } else if (ph.startsWith('+231')) {
      return CountryCode[CountryCode.LR];
    } else if (ph.startsWith('+232')) {
      return CountryCode[CountryCode.SL];
    } else if (ph.startsWith('+233')) {
      return CountryCode[CountryCode.GH];
    } else if (ph.startsWith('+234')) {
      return CountryCode[CountryCode.NG];
    } else if (ph.startsWith('+235')) {
      return CountryCode[CountryCode.TD];
    } else if (ph.startsWith('+236')) {
      return CountryCode[CountryCode.CF];
    } else if (ph.startsWith('+237')) {
      return CountryCode[CountryCode.CM];
    } else if (ph.startsWith('+238')) {
      return CountryCode[CountryCode.CV];
    } else if (ph.startsWith('+239')) {
      return CountryCode[CountryCode.ST];
    } else if (ph.startsWith('+240')) {
      return CountryCode[CountryCode.GQ];
    } else if (ph.startsWith('+241')) {
      return CountryCode[CountryCode.GA];
    } else if (ph.startsWith('+242')) {
      return CountryCode[CountryCode.CG];
    } else if (ph.startsWith('+243')) {
      return CountryCode[CountryCode.CD];
    } else if (ph.startsWith('+244')) {
      return CountryCode[CountryCode.AO];
    } else if (ph.startsWith('+245')) {
      return CountryCode[CountryCode.GW];
    } else if (ph.startsWith('+248')) {
      return CountryCode[CountryCode.SC];
    } else if (ph.startsWith('+249')) {
      return CountryCode[CountryCode.SD];
    } else if (ph.startsWith('+250')) {
      return CountryCode[CountryCode.RW];
    } else if (ph.startsWith('+251')) {
      return CountryCode[CountryCode.ET];
    } else if (ph.startsWith('+252')) {
      return CountryCode[CountryCode.SO];
    } else if (ph.startsWith('+253')) {
      return CountryCode[CountryCode.DJ];
    } else if (ph.startsWith('+254')) {
      return CountryCode[CountryCode.KE];
    } else if (ph.startsWith('+255')) {
      return CountryCode[CountryCode.TZ];
    } else if (ph.startsWith('+256')) {
      return CountryCode[CountryCode.UG];
    } else if (ph.startsWith('+257')) {
      return CountryCode[CountryCode.BI];
    } else if (ph.startsWith('+258')) {
      return CountryCode[CountryCode.MZ];
    } else if (ph.startsWith('+260')) {
      return CountryCode[CountryCode.ZM];
    } else if (ph.startsWith('+261')) {
      return CountryCode[CountryCode.MG];
    } else if (ph.startsWith('+262')) {
      return CountryCode[CountryCode.YT];
    } else if (ph.startsWith('+263')) {
      return CountryCode[CountryCode.ZW];
    } else if (ph.startsWith('+264')) {
      return CountryCode[CountryCode.NA];
    } else if (ph.startsWith('+265')) {
      return CountryCode[CountryCode.MW];
    } else if (ph.startsWith('+266')) {
      return CountryCode[CountryCode.LS];
    } else if (ph.startsWith('+267')) {
      return CountryCode[CountryCode.BW];
    } else if (ph.startsWith('+268')) {
      return CountryCode[CountryCode.SZ];
    } else if (ph.startsWith('+269')) {
      return CountryCode[CountryCode.KM];
    } else if (ph.startsWith('+290')) {
      return CountryCode[CountryCode.SH];
    } else if (ph.startsWith('+291')) {
      return CountryCode[CountryCode.ER];
    } else if (ph.startsWith('+297')) {
      return CountryCode[CountryCode.AW];
    } else if (ph.startsWith('+298')) {
      return CountryCode[CountryCode.FO];
    } else if (ph.startsWith('+299')) {
      return CountryCode[CountryCode.GL];
    } else if (ph.startsWith('+350')) {
      return CountryCode[CountryCode.GI];
    } else if (ph.startsWith('+351')) {
      return CountryCode[CountryCode.PT];
    } else if (ph.startsWith('+352')) {
      return CountryCode[CountryCode.LU];
    } else if (ph.startsWith('+353')) {
      return CountryCode[CountryCode.IE];
    } else if (ph.startsWith('+355')) {
      return CountryCode[CountryCode.AL];
    } else if (ph.startsWith('+356')) {
      return CountryCode[CountryCode.MT];
    } else if (ph.startsWith('+357')) {
      return CountryCode[CountryCode.CY];
    } else if (ph.startsWith('+358')) {
      return CountryCode[CountryCode.FI];
    } else if (ph.startsWith('+359')) {
      return CountryCode[CountryCode.BG];
    } else if (ph.startsWith('+370')) {
      return CountryCode[CountryCode.LT];
    } else if (ph.startsWith('+371')) {
      return CountryCode[CountryCode.LV];
    } else if (ph.startsWith('+372')) {
      return CountryCode[CountryCode.EE];
    } else if (ph.startsWith('+373')) {
      return CountryCode[CountryCode.MD];
    } else if (ph.startsWith('+374')) {
      return CountryCode[CountryCode.AM];
    } else if (ph.startsWith('+375')) {
      return CountryCode[CountryCode.BY];
    } else if (ph.startsWith('+376')) {
      return CountryCode[CountryCode.AD];
    } else if (ph.startsWith('+377')) {
      return CountryCode[CountryCode.MC];
    } else if (ph.startsWith('+378')) {
      return CountryCode[CountryCode.SM];
    } else if (ph.startsWith('+380')) {
      return CountryCode[CountryCode.UA];
    } else if (ph.startsWith('+381')) {
      return CountryCode[CountryCode.RS];
    } else if (ph.startsWith('+382')) {
      return CountryCode[CountryCode.ME];
    } else if (ph.startsWith('+385')) {
      return CountryCode[CountryCode.HR];
    } else if (ph.startsWith('+386')) {
      return CountryCode[CountryCode.SI];
    } else if (ph.startsWith('+387')) {
      return CountryCode[CountryCode.BA];
    } else if (ph.startsWith('+389')) {
      return CountryCode[CountryCode.MK];
    } else if (ph.startsWith('+420')) {
      return CountryCode[CountryCode.CZ];
    } else if (ph.startsWith('+421')) {
      return CountryCode[CountryCode.SK];
    } else if (ph.startsWith('+423')) {
      return CountryCode[CountryCode.LI];
    } else if (ph.startsWith('+500')) {
      return CountryCode[CountryCode.FK];
    } else if (ph.startsWith('+501')) {
      return CountryCode[CountryCode.BZ];
    } else if (ph.startsWith('+502')) {
      return CountryCode[CountryCode.GT];
    } else if (ph.startsWith('+503')) {
      return CountryCode[CountryCode.SV];
    } else if (ph.startsWith('+504')) {
      return CountryCode[CountryCode.HN];
    } else if (ph.startsWith('+505')) {
      return CountryCode[CountryCode.NI];
    } else if (ph.startsWith('+506')) {
      return CountryCode[CountryCode.CR];
    } else if (ph.startsWith('+507')) {
      return CountryCode[CountryCode.PA];
    } else if (ph.startsWith('+508')) {
      return CountryCode[CountryCode.PM];
    } else if (ph.startsWith('+509')) {
      return CountryCode[CountryCode.HT];
    } else if (ph.startsWith('+590')) {
      return CountryCode[CountryCode.BL];
    } else if (ph.startsWith('+591')) {
      return CountryCode[CountryCode.BO];
    } else if (ph.startsWith('+592')) {
      return CountryCode[CountryCode.GY];
    } else if (ph.startsWith('+593')) {
      return CountryCode[CountryCode.EC];
    } else if (ph.startsWith('+595')) {
      return CountryCode[CountryCode.PY];
    } else if (ph.startsWith('+597')) {
      return CountryCode[CountryCode.SR];
    } else if (ph.startsWith('+598')) {
      return CountryCode[CountryCode.UY];
    } else if (ph.startsWith('+599')) {
      return CountryCode[CountryCode.AN];
    } else if (ph.startsWith('+670')) {
      return CountryCode[CountryCode.TL];
    } else if (ph.startsWith('+672')) {
      return CountryCode[CountryCode.AQ];
    } else if (ph.startsWith('+673')) {
      return CountryCode[CountryCode.BN];
    } else if (ph.startsWith('+674')) {
      return CountryCode[CountryCode.NR];
    } else if (ph.startsWith('+675')) {
      return CountryCode[CountryCode.PG];
    } else if (ph.startsWith('+676')) {
      return CountryCode[CountryCode.TO];
    } else if (ph.startsWith('+677')) {
      return CountryCode[CountryCode.SB];
    } else if (ph.startsWith('+678')) {
      return CountryCode[CountryCode.VU];
    } else if (ph.startsWith('+679')) {
      return CountryCode[CountryCode.FJ];
    } else if (ph.startsWith('+680')) {
      return CountryCode[CountryCode.PW];
    } else if (ph.startsWith('+681')) {
      return CountryCode[CountryCode.WF];
    } else if (ph.startsWith('+682')) {
      return CountryCode[CountryCode.CK];
    } else if (ph.startsWith('+683')) {
      return CountryCode[CountryCode.NU];
    } else if (ph.startsWith('+685')) {
      return CountryCode[CountryCode.WS];
    } else if (ph.startsWith('+686')) {
      return CountryCode[CountryCode.KI];
    } else if (ph.startsWith('+687')) {
      return CountryCode[CountryCode.NC];
    } else if (ph.startsWith('+688')) {
      return CountryCode[CountryCode.TV];
    } else if (ph.startsWith('+689')) {
      return CountryCode[CountryCode.PF];
    } else if (ph.startsWith('+690')) {
      return CountryCode[CountryCode.TK];
    } else if (ph.startsWith('+691')) {
      return CountryCode[CountryCode.FM];
    } else if (ph.startsWith('+692')) {
      return CountryCode[CountryCode.MH];
    } else if (ph.startsWith('+850')) {
      return CountryCode[CountryCode.KP];
    } else if (ph.startsWith('+852')) {
      return CountryCode[CountryCode.HK];
    } else if (ph.startsWith('+853')) {
      return CountryCode[CountryCode.MO];
    } else if (ph.startsWith('+855')) {
      return CountryCode[CountryCode.KH];
    } else if (ph.startsWith('+856')) {
      return CountryCode[CountryCode.LA];
    } else if (ph.startsWith('+870')) {
      return CountryCode[CountryCode.PN];
    } else if (ph.startsWith('+880')) {
      return CountryCode[CountryCode.BD];
    } else if (ph.startsWith('+886')) {
      return CountryCode[CountryCode.TW];
    } else if (ph.startsWith('+960')) {
      return CountryCode[CountryCode.MV];
    } else if (ph.startsWith('+961')) {
      return CountryCode[CountryCode.LB];
    } else if (ph.startsWith('+962')) {
      return CountryCode[CountryCode.JO];
    } else if (ph.startsWith('+963')) {
      return CountryCode[CountryCode.SY];
    } else if (ph.startsWith('+964')) {
      return CountryCode[CountryCode.IQ];
    } else if (ph.startsWith('+965')) {
      return CountryCode[CountryCode.KW];
    } else if (ph.startsWith('+966')) {
      return CountryCode[CountryCode.SA];
    } else if (ph.startsWith('+967')) {
      return CountryCode[CountryCode.YE];
    } else if (ph.startsWith('+968')) {
      return CountryCode[CountryCode.OM];
    } else if (ph.startsWith('+971')) {
      return CountryCode[CountryCode.AE];
    } else if (ph.startsWith('+972')) {
      return CountryCode[CountryCode.IL];
    } else if (ph.startsWith('+973')) {
      return CountryCode[CountryCode.BH];
    } else if (ph.startsWith('+974')) {
      return CountryCode[CountryCode.QA];
    } else if (ph.startsWith('+975')) {
      return CountryCode[CountryCode.BT];
    } else if (ph.startsWith('+976')) {
      return CountryCode[CountryCode.MN];
    } else if (ph.startsWith('+977')) {
      return CountryCode[CountryCode.NP];
    } else if (ph.startsWith('+992')) {
      return CountryCode[CountryCode.TJ];
    } else if (ph.startsWith('+993')) {
      return CountryCode[CountryCode.TM];
    } else if (ph.startsWith('+994')) {
      return CountryCode[CountryCode.AZ];
    } else if (ph.startsWith('+995')) {
      return CountryCode[CountryCode.GE];
    } else if (ph.startsWith('+996')) {
      return CountryCode[CountryCode.KG];
    } else if (ph.startsWith('+998')) {
      return CountryCode[CountryCode.UZ];
    } else {
      return CountryCode[CountryCode.US];
    }

  }
}