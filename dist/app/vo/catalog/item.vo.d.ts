import { ItemProductVo } from "./item-product.vo";
import { ItemCategoryVo } from "./item-category.vo";
import { PercentFlatVo } from "@omega/core";
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
    upc: string;
    path: string;
    unit: string;
    discount: string;
    vendorData: {
        id: string;
        name: string;
    };
    manufacturerData: {
        id: string;
        name: string;
    };
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
    modifiedDate: Date;
    createdDate: Date;
    nameLower: string;
    brandLower: string;
    vendorLower: string;
    manufacturerLower: string;
    categoryIds: string[];
    id: string;
    orgId: string;
    brId: string;
    manufacturer: {
        string: boolean;
    };
    vendor: {
        string: boolean;
    };
    category: {
        string: ItemCategoryVo;
    };
    item: {
        string: ItemProductVo;
    };
    itemType: string;
    name: string;
    nameHi: string;
    spec: string;
    descShort: string;
    descFull: string;
    taxInclusive: boolean;
    cost: number;
    price: number;
    taxExclude: boolean;
    taxable: boolean;
    taxState: PercentFlatVo;
    taxCounty: PercentFlatVo;
    taxCountyAdditive: boolean;
    taxSpecial: PercentFlatVo;
    taxCity: PercentFlatVo;
    tax: number;
    hsnSac: string;
    igst: number;
    cgst: number;
    sgst: number;
    gtin: string;
    sku: string;
    stockLevel: number;
    stockUnit: string;
    nameVariant: string;
    descVariant: string;
    size: string;
    color: string;
    weight: string;
    weightUnit: string;
    volume: string;
    volumeUnit: string;
    expire: Date;
    ageMin: number;
    promptType: string;
    img: string;
    colorBtn: string;
    activePos: boolean;
    activeVm: boolean;
}
