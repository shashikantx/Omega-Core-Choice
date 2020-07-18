/**
 * Forced Modifier - server need to ask
 *  [non-item] Spice Level - Level 1 to Level 9
 *  [raw item] Choose your Bread - 9-Grain Wheat, Multi-grain Flatbread*, Italian, Italian Herbs & Cheese, Flatbread
 */
export declare enum ItemType {
    PRODUCT = 0,
    RAW = 1,
    MOD = 2,
    MOD_PLUS = 3,
    MOD_MINUS = 4
}
export declare namespace ItemType {
    function getItemType(): Array<string>;
}
