export interface CategoryVo {
  //new field
  status: boolean;
  modifiedDate:Date;
  createdDate:Date;
  nameLower:string;
  //new field
  id: string;

  orgId: string;
  brId: string;

  name: string;
  nameHi: string; // Category Name (hi_IN)
  desc: string; //description
  googleCatId: string; //googleCategoryId

  parentId: string; // 0 for root/top parent
  path: string; // CONSTANT.SEPARATOR -|-

  //SEO
  metaKeyword: string;
  metaDescription: string;
  metaTitle: string;
  h1Tag: string;

  seq: number;

  modCat: boolean; //Category for modifier

  colorBtn: string; // Color Theme #hex color value

  activePos: boolean; // status - true = publish [Show PoS]
  activeVm: boolean; // status - true = publish [Show Virtual Mart]

}
