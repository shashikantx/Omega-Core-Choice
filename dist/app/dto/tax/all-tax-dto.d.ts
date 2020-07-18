import { PercentFlatVo } from "@parakh/core";
export interface AllTaxDto {
    taxState: PercentFlatVo;
    taxCounty: PercentFlatVo;
    taxCountyAdditive: boolean;
    taxSpecial: PercentFlatVo;
    taxCity: PercentFlatVo;
}
