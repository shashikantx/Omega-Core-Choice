"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValueOrgBrDto = void 0;
var key_value_org_dto_1 = require("./key-value-org.dto");
var KeyValueOrgBrDto = /** @class */ (function (_super) {
    __extends(KeyValueOrgBrDto, _super);
    /* ************************************ Constructors ************************************ */
    function KeyValueOrgBrDto(orgId, brId, key, value) {
        var _this = _super.call(this, orgId, key, value) || this;
        _this.brId = brId;
        return _this;
    }
    return KeyValueOrgBrDto;
}(key_value_org_dto_1.KeyValueOrgDto));
exports.KeyValueOrgBrDto = KeyValueOrgBrDto;
