'use strict';

import {MathUtility, PercentFlatVo} from "@parakh/core";
import {AllTaxDto} from "../dto/tax";
import {OrderItemVo} from "../vo/tx";
import {ItemVo} from "../vo/catalog";

export class TaxCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getItemTax(item: OrderItemVo, defaultTax: AllTaxDto, taxable: boolean): number {
    return this._getItemTax(item, defaultTax, taxable);
  }

  /* ************************************ Private Methods ************************************ */
  private _getTax(tax: PercentFlatVo, qty: number, price: number): number {
    let taxAmount: number;
    taxAmount = tax.type ? MathUtility.number(tax.value) : MathUtility.percentValue(tax.value, price);
    return MathUtility.round((taxAmount * qty), 2);
  }

  private _getItemTax(item: OrderItemVo, defaultTax: AllTaxDto, taxable: boolean): number {
    let taxAmount: number = 0.00;
    if (!item.item.taxExclude) {
      let stateTax, countyTax, specialTax, cityTax;

      const tax: AllTaxDto = this._getTaxrate(item, defaultTax, taxable);
      stateTax = this._getTax(tax.taxState, item.qty, item.price);
      specialTax = this._getTax(tax.taxSpecial, item.qty, item.price);
      cityTax = this._getTax(tax.taxCity, item.qty, item.price);
      const totalNonAdTax = stateTax + specialTax + cityTax;
      countyTax = this._getCountyTax(tax.taxCounty, tax.taxCountyAdditive, item.qty, item.price, totalNonAdTax);

      taxAmount = this._getTotalItemTax(stateTax, specialTax, cityTax, countyTax);
      taxAmount = MathUtility.round(taxAmount, 2);
    }
    console.log('xxx xx xx xx x x taxAmount ', taxAmount);
    return taxAmount;
  }

  private _getCountyTax(taxCounty: PercentFlatVo, taxCountyAdditive: boolean, qty: number, price: number, totalOtherTax: number) {
    const totalPrice = MathUtility.total(price, qty);
    let countyTax = 0;
    if (taxCountyAdditive) {
      let totalAdditive = totalOtherTax + totalPrice;
      countyTax = this._getTax(taxCounty, 1, totalAdditive);
    } else {
      countyTax = this._getTax(taxCounty, qty, price);
    }
    return countyTax;
  }

  private _getTotalItemTax(stateTax: any, specialTax: any, cityTax: any, countyTax: any) {
    const addList = [stateTax, specialTax, cityTax, countyTax];
    return MathUtility.sum(...addList);
  }

  private _getTaxrate(item: OrderItemVo, defaultTax: AllTaxDto, taxable: boolean) {
    return taxable ? this._setAllTaxDto(item.item) : defaultTax;
  }

  private _setAllTaxDto(item: ItemVo) {
    let tax: AllTaxDto = <AllTaxDto>{};
    tax.taxState = item.taxState;
    tax.taxCounty = item.taxCounty;
    tax.taxSpecial = item.taxSpecial;
    tax.taxCity = item.taxCity;
    tax.taxCountyAdditive = item.taxCountyAdditive;
    return tax;
  }
}
