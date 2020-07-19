"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueUserDto = void 0;
var key_value_dto_1 = require("./key-value.dto");
var KeyValueUserDto = /** @class */ (function () {
    /* ************************************ Constructors ************************************ */
    function KeyValueUserDto(userId, key, value) {
        this.keyValue = new key_value_dto_1.KeyValueDto(key, value);
        this.userId = userId;
    }
    return KeyValueUserDto;
}());
exports.KeyValueUserDto = KeyValueUserDto;
