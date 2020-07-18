/**
 * Forced Modifier - server need to ask
 *  [non-item] Spice Level - Level 1 to Level 9
 *  [raw item] Choose your Bread - 9-Grain Wheat, Multi-grain Flatbread*, Italian, Italian Herbs & Cheese, Flatbread
 */
export enum ItemType {
  // CAT, // Category
  // CAT_SUB, // Sub category

  PRODUCT,
  RAW, // Raw Materials
  MOD,
  MOD_PLUS, // Modifier (+)
  MOD_MINUS, // Modifier (-)
  // MOD_ALL, //All Mods (e.g. - Cooking Temp (Rare, Medium-rare, Medium, Medium-well, Well-done)
  //MOD_FORCE, // Forced Modifier (e.g. Spice Level - Level 1 to Level 9)

}

export namespace ItemType {

  export function getItemType(): Array<string> {
    return [
      // ItemType[ItemType.CAT],
      //ItemType[ItemType.CAT_SUB],
      ItemType[ItemType.PRODUCT],
      ItemType[ItemType.RAW],
      ItemType[ItemType.MOD],
      ItemType[ItemType.MOD_PLUS],
      ItemType[ItemType.MOD_MINUS],
      // ItemType[ItemType.MOD_ALL],
    ];
  }

}
