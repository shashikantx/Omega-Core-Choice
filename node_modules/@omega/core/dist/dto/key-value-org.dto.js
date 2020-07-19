"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueOrgDto = void 0;
var key_value_dto_1 = require("./key-value.dto");
var KeyValueOrgDto = /** @class */ (function () {
    /* ************************************ Constructors ************************************ */
    function KeyValueOrgDto(orgId, key, value) {
        this.keyValue = new key_value_dto_1.KeyValueDto(key, value);
        this.orgId = orgId;
    }
    return KeyValueOrgDto;
}());
exports.KeyValueOrgDto = KeyValueOrgDto;
