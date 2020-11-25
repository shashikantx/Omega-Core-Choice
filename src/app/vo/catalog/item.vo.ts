import {ItemProductVo} from "./item-product.vo";
import {ItemCategoryVo} from "./item-category.vo";
import {PercentFlatVo} from "@omega/core";

/**
 https://support.google.com/merchants/answer/6219078?hl=en

 SKU (Stock Keeping Unit)
 UPC (Universal Product Codes)
 GTIN (Global Trade Item Number) is an international identifier that doesn’t change from manufacturer to distributor to storefront
 EAN is an international identifier that has been absorbed into the GTIN system.
 GTINs are typically 12-14 digits
 GTIN is called a different name (for example, UPC code in the US, EAN code in Europe).

 SKU is an identifying series of numbers and letters that can change depending on which business is inventorying the product.
 SKUs are series of identifying numbers that you create for simpler inventory management in your online store.
 SKU is a number assigned to a product by the company for stock-keeping purposes and internal operations.
 They may include abbreviated details of the product itself, including the brand, size, or color.
 A medium red t-shirt created in 2018, for example, might read something like “TEE-RD-MED-18.”
 */
export interface ItemVo {
//new fields
upc: string;
path: string;
unit: string;
discount: string;
vendorData:  { id: string, name: string};
manufacturerData: { id: string, name: string};
productType: string;
brandName: string;
productLable: string;
atrribute: string;
displayOption: string;
status: boolean;
minStockLevel: string;
returnPolicy: boolean;
underAge: boolean;
vendorStatus: string;
doM: Date;
doE: Date;
doP: Date;
reorderPoint: string;
stockInHand: string;
reorderAmount: string;
doA: Date;
displayInInnowi: boolean;
displayInBrowser: boolean;
modifiedDate:Date;
createdDate:Date;
nameLower:string;
brandLower:string;
vendorLower:string;
manufacturerLower:string;
categoryIds:string[];
taxFederal: PercentFlatVo;
defaulBranchTax: boolean;

//new fields

  id: string;

  orgId: string;
  brId: string;

  manufacturer: { string: boolean };
  vendor: { string: boolean }; //multiple vendor allowed for same type of product

  category: { string: ItemCategoryVo }; // <categoryId, true>
  item: { string: ItemProductVo }; // <item_itemId> -OR- <cat_categoryId>
  itemType: string; //ItemType - PRODUCT, RAW, MOD

  //Product
  // >> General information
  name: string; // Product Name
  nameHi: string; // Product Name (hi_IN)
  spec: string; // Specification
  descShort: string; // Short Description
  descFull: string; // Full Description

  // >> Price
  taxInclusive: boolean; // Cost
  cost: number; // Cost
  price: number; // Retail Selling Price
  // priceDiscounted: number; // Discounted Price
  // priceSpecial: number; // Is Special Price Enabled

  // Tax
  taxExclude: boolean; // If true Item should be tax free from any tax (tax = 0 for the item)
  taxable: boolean; // if true then apply item specific tax

  // Tax / US
  taxState: PercentFlatVo;
  taxCounty: PercentFlatVo;
  taxCountyAdditive: boolean;
  taxSpecial: PercentFlatVo;
  taxCity: PercentFlatVo;
  tax: number; //FiXME ??

  // Tax / GST
  // HSN - Harmonized System of Nomenclature - (8 digit)
  // SAC - Services Accounting Codes
  hsnSac: string;
  igst: number;
  cgst: number;
  sgst: number;

  // Inventory
  gtin: string; // Product GTIN - UPC/EAN/JAN/ISBN/ITF-14
  sku: string;
  // asin: string; // ASIN is specifically Amazon's SKU
  // mpn: string; // MPN - Manufacturer Part Number

  // Stock info
  stockLevel: number;
  stockUnit: string; //kg, pcs, sets, lt
  // stockBrand: string; // Brand Stock
  // stockConsignment: string; // Consignment Stock
  // vendorStockNumber: string; // Vendor Stock Number
  // minStock: number // minimum stock on hand
  // emailForStockNotification: string // Email Low Stock Notification
  // alertPolicyLowStock: string;

  // Variant Information
  nameVariant: string; // Name
  descVariant: string; // Description
  size: string; // Size
  color: string; // Color
  weight: string; // Weight
  weightUnit: string; // Weight Units
  volume: string; // Volume
  volumeUnit: string; // Volume Units

  // New variables added
  expire: Date;
  ageMin: number; // min age required to purchase the product
  promptType: string; // age restriction message

  // personalization / Theme
  img: string; // Pictures
  colorBtn: string; // Color Theme #hex color value

  activePos: boolean; // status - true = publish [Show PoS]
  activeVm: boolean; // status - true = publish [Show Virtual Mart]
  //activeStore: { string: boolean }; //  TODO  activeStore -OR- store: {<storeId>: storeItemConf} >> storeItemConf - active, price etc

}

/*

 **** List of Products ****
Price(Discount Price)
Rank(Manufacturer)
Rank (Category)

  **** Filter values ****
Brand
Search Text

Price
SEO
Inventory
Pictures

>> General information
Collection Type
Delivery Days

>> Price
Retail Selling Price
Discounted Price
Retail Selling Price Text
Discounted Price Text
Is Special Price Enabled

>> Variant Information
Name
Vendor Stock Number
Size
Color
Weight
Weight Units
Volume
Volume Units
GTIN
MPN
Description

>> SEO
var metaKeyword: String? = null // Meta Keywords
var metaDescription: String? = null // Meta Description
var metaTitle: String? = null // Meta Title

>> Inventory
Brand Stock
Consignment Stock
 */
