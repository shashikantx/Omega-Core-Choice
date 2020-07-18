"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Forced Modifier - server need to ask
 *  [non-item] Spice Level - Level 1 to Level 9
 *  [raw item] Choose your Bread - 9-Grain Wheat, Multi-grain Flatbread*, Italian, Italian Herbs & Cheese, Flatbread
 */
var ItemType;
(function (ItemType) {
    // CAT, // Category
    // CAT_SUB, // Sub category
    ItemType[ItemType["PRODUCT"] = 0] = "PRODUCT";
    ItemType[ItemType["RAW"] = 1] = "RAW";
    ItemType[ItemType["MOD"] = 2] = "MOD";
    ItemType[ItemType["MOD_PLUS"] = 3] = "MOD_PLUS";
    ItemType[ItemType["MOD_MINUS"] = 4] = "MOD_MINUS";
    // MOD_ALL, //All Mods (e.g. - Cooking Temp (Rare, Medium-rare, Medium, Medium-well, Well-done)
    //MOD_FORCE, // Forced Modifier (e.g. Spice Level - Level 1 to Level 9)
})(ItemType = exports.ItemType || (exports.ItemType = {}));
(function (ItemType) {
    function getItemType() {
        return [
            // ItemType[ItemType.CAT],
            //ItemType[ItemType.CAT_SUB],
            ItemType[ItemType.PRODUCT],
            ItemType[ItemType.RAW],
            ItemType[ItemType.MOD],
            ItemType[ItemType.MOD_PLUS],
            ItemType[ItemType.MOD_MINUS],
        ];
    }
    ItemType.getItemType = getItemType;
})(ItemType = exports.ItemType || (exports.ItemType = {}));
