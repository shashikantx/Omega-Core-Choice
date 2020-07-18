'use strict';

import {OrderCalcService} from "./order-calc.service";
import {OrderItemVo, OrderVo} from "../vo/tx";
import {ProductReportDto, ProductSalesDto, TotalProductSalesDto} from "../dto/report";
import {CategoryVo, ItemCategoryVo} from "../vo/catalog";
import {MathUtility} from "@parakh/core";
import {ITEM_TYPE} from "../const";

export class ProductReportUtilityService extends OrderCalcService {

  /* ************************************ Static Fields ************************************ */

  /* ************************************ Public Methods ************************************ */
  public getProductReportFromOrderList(list: Array<OrderVo>, categoryList: Array<CategoryVo>): ProductReportDto {
    return this._getSalesByProduct(list, categoryList);
  }

  /* ************************************ Private Methods ************************************ */
  private _getSalesByProduct(list: Array<OrderVo>, categoryList: Array<CategoryVo>): ProductReportDto {
    const productReport: ProductReportDto = <ProductReportDto>{};
    productReport.productSalesVo = <Array<ProductSalesDto>>[];
    productReport.ttProductSalesVo = <TotalProductSalesDto>{};
    const itemIdItemMap: Map<string, Array<OrderItemVo>> = this._getItemIdItemMap(list);
    this._setSalesByProduct(productReport.productSalesVo, itemIdItemMap, categoryList);
    productReport.ttProductSalesVo = this._getTtSalesByProduct(productReport.ttProductSalesVo, productReport.productSalesVo);
    return productReport;
  }

  private _getItemIdItemMap(list: Array<OrderVo>): Map<string, Array<OrderItemVo>> {
    const map: Map<string, Array<OrderItemVo>> = new Map();
    list.forEach((order: OrderVo) => {
      order.items.forEach((item: OrderItemVo | any) => {
        if (item && item.item && item.status != 'RETURN') { // TODO Remove hardcoding
          const itemList: Array<OrderItemVo> = <Array<OrderItemVo>>[];
          const listFromMap = map.get(item.item.id);
          if (listFromMap && listFromMap.length > 0) {
            itemList.push(...listFromMap)
          }

          itemList.push(item);
          map.set(item.item.id, itemList);
        }
      });
    });
    return map;
  }

  private _setSalesByProduct(productSalesList: Array<ProductSalesDto>, itemIdItemMap: Map<string, Array<OrderItemVo>>, categoryList: Array<CategoryVo>) {
    const keyList = itemIdItemMap.keys();
    for (let key of keyList) {
      const productSalesVo: ProductSalesDto = <ProductSalesDto>{};
      const orderItemList = itemIdItemMap.get(key);
      if (orderItemList && orderItemList.length > 0) {
        productSalesVo.item = orderItemList[0].item;
        productSalesVo.category = this._getItemCatListFromObject(orderItemList[0].item.category, categoryList);
        productSalesVo.qty = this.getOrderItemTotalByKey(orderItemList, 'qty');
        productSalesVo.sale = this.getOrderItemTotalByKey(orderItemList, 'amount');
        productSalesVo.discount = 0.00; // TODO Remove Hardcoding
        productSalesVo.sub = productSalesVo.sale - productSalesVo.discount;
        productSalesVo.cost = this._getTotalCostProduct(orderItemList);
        productSalesVo.profit = MathUtility.round((productSalesVo.sub - productSalesVo.cost), 2);
        productSalesVo.percent = MathUtility.round(MathUtility.percent(productSalesVo.profit, productSalesVo.cost), 2);
        productSalesList.push(productSalesVo);
      }
    }
  }

  private _getTtSalesByProduct(ttProductSalesVo: TotalProductSalesDto, salesByProduct: Array<ProductSalesDto>) {
    ttProductSalesVo = <TotalProductSalesDto>{};
    ttProductSalesVo.qty = 0;
    ttProductSalesVo.sale = 0;
    ttProductSalesVo.discount = 0;
    ttProductSalesVo.sub = 0;
    ttProductSalesVo.cost = 0;

    if (salesByProduct && salesByProduct.length > 0) {
      salesByProduct.forEach((row: ProductSalesDto) => {
        ttProductSalesVo.qty = ttProductSalesVo.qty + row.qty;
        ttProductSalesVo.discount = ttProductSalesVo.discount + row.discount;
        ttProductSalesVo.sale = ttProductSalesVo.sale + row.sale;
        ttProductSalesVo.sub = ttProductSalesVo.sub + row.sub;
        ttProductSalesVo.cost = ttProductSalesVo.cost + row.cost;
      });
      ttProductSalesVo.profit = MathUtility.round((ttProductSalesVo.sub - ttProductSalesVo.cost), 2);
      ttProductSalesVo.percent = MathUtility.round(MathUtility.percent(ttProductSalesVo.profit, ttProductSalesVo.cost), 2);
    }
    return ttProductSalesVo;
  }

  private _getItemCatListFromObject(category: { string: ItemCategoryVo }, categoryList: Array<CategoryVo>) {
    const list: Array<CategoryVo> = <Array<CategoryVo>>[];
    if (category) {
      let catList = Object.keys(category);
      if (catList && catList.length > 0) {
        catList.forEach(cat => {
          let category = categoryList.find(row => row.id === cat);
          if (category) {
            list.push(category);
          }
        });
      }
    }
    return list;
  }

  private  _getTotalCostProduct(orderItemList: Array<OrderItemVo>) {
    const listForSum: Array<number> = [];
    orderItemList.forEach((item: OrderItemVo | any) => {
      if (item && item.item) {
        let num = item.item.cost * item.qty;
        listForSum.push(num);
      }
    });
    return MathUtility.sum(...listForSum);
  }
}

