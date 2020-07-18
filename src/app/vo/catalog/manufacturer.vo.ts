/**
 * OEM
 */
export interface ManufacturerVo {
  id: string;

  orgId: string;
  brId: string;
  name: string; // Product Name
  logo: string; // (250px * 150px)

  desc: string; // Description
  descFooter: string; // FooterDescription

  tagLine: string;

  designer: boolean;
  internationalBrand: boolean;

  //SEO
  metaKeyword: string;
  metaDescription: string;
  metaTitle: string;

  // List of Manufacturer
  /*
Picture	Product Name	Manufacturer	Category
Price(Discount Price)
Rank(Manufacturer)
Rank(Category)
   */

  /*
  >> Manufacturer Info
  Name
  Upload Logo Image (250px * 150px)
  Is Designer
  Is Internation Brand
  TagLine
  CountryOfOrigin
  Description
  FooterDescription

  >> SEO
  MetaKeywords
  MetaDescription
  MetaTitle
   */


}
