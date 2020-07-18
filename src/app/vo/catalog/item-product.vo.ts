export interface ItemProductVo {
  itemId: string; //itemId // selected ItemId
  categoryId: string; // if modCat true
  // itemType: string; //ItemType - PRODUCT, RAW, MOD, MOD_PLUS, MOD_MINUS
  modCat: boolean;
  modForced: boolean;
  modPlus: boolean;
  modMinus: boolean;
}
