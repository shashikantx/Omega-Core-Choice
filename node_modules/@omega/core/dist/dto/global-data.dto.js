"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDataDto = void 0;
var enums_1 = require("../enums");
var GlobalDataDto = /** @class */ (function () {
    /* ************************************ Constructor ************************************ */
    function GlobalDataDto() {
        this.currencySign = "$"; //CONSTANT.CURRENCY_CHAR_DOLLAR ;//"$"; //CONSTANT.CURRENCY_CHAR_RUPEE
        this.appId = "";
        this.acl = {};
        this.user = {};
        this.org = {};
        this.branch = {};
    }
    /* ************************************ Public Methods ************************************ */
    GlobalDataDto.prototype.setAppId = function (appId) {
        this.appId = appId;
    };
    GlobalDataDto.prototype.setOrg = function (org) {
        this.org = org;
        this.branch = {};
    };
    GlobalDataDto.prototype.setBranch = function (branch) {
        this.branch = branch;
    };
    GlobalDataDto.prototype.getAppId = function () {
        return this.appId;
    };
    GlobalDataDto.prototype.getUserId = function () {
        if (null != this.user) {
            return this.user.id;
        }
        return '0';
    };
    GlobalDataDto.prototype.getOrgId = function () {
        if (null != this.org) {
            return this.org.id;
        }
        return null;
    };
    GlobalDataDto.prototype.getBranchId = function () {
        if (null != this.branch) {
            return this.branch.id;
        }
        return null;
    };
    /*
    @Deprecate
    public getAclOrgId(): string {
      if (null != this.acl) {
        return this.acl.orgId;
      }
      return '0';
    }
  */
    /**
     * @return Current Role
     */
    GlobalDataDto.prototype.getAclRole = function () {
        /*if (null != this.acl && null != this.acl.role) {
          return Role[this.acl.role as keyof typeof Role]//Role[this.acl.role];
        }*/
        return enums_1.Role.NA;
    };
    return GlobalDataDto;
}());
exports.GlobalDataDto = GlobalDataDto;
