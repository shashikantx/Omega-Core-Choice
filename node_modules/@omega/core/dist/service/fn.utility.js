"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnUtility = void 0;
/**
 * FnUtility -
 */
var FnUtility = /** @class */ (function () {
    function FnUtility() {
    }
    /*
  
  
        // for (var key in p) {
        Object.keys(appCacheVos).forEach((key) => { // ECMAScript 5
  
        ECMAScript 6 adds for...of
        for (const key of Object.keys(obj)) {
          console.log(key, obj[key]);
        }
        ECMAScript 8
        Object.entries(appCacheVos).forEach(([key, value]) => {
          console.log(key, value)
        });
  
     */
    /* ************************************ Public Methods ************************************ */
    /**
     ECMA 7+:
  
     // because Object.keys(new Date()).length === 0;
     // we have to do some additional check
     Object.entries(obj).length === 0 && obj.constructor === Object
     ECMA 5+:
  
     // because Object.keys(new Date()).length === 0;
     // we have to do some additional check
     Object.keys(obj).length === 0 && obj.constructor === Object
     Pre-ECMA 5:
  
     function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
  
      return JSON.stringify(obj) === JSON.stringify({});
  }
     jQuery:
  
     jQuery.isEmptyObject({}); // true
     lodash:
  
     _.isEmpty({}); // true
     Underscore:
  
     _.isEmpty({}); // true
     Hoek
  
     Hoek.deepEqual({}, {}); // true
     ExtJS
  
     Ext.Object.isEmpty({}); // true
     AngularJS (version 1)
  
     angular.equals({}, {}); // true
     */
    // test for an empty JavaScript object
    FnUtility.isEmpty = function (obj) {
        if (!obj) {
            return true;
        }
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    // *************** Merge Object ***************
    FnUtility.objMerge = function (source, target) {
        if (source) {
            for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
                var k = _a[_i];
                target[k] = source[k];
            }
        }
    };
    // *************** Converting a Map to Array of value ***************
    FnUtility.objToKeyArr = function (obj) {
        return FnUtility.mapToKeyArr(FnUtility.objToStrMap(obj));
    };
    FnUtility.objToValueArr = function (obj) {
        return FnUtility.mapToValueArr(FnUtility.objToStrMap(obj));
    };
    FnUtility.mapToKeyArr = function (strMap) {
        var obj = [];
        strMap.forEach(function (v, k) {
            obj.push(k);
        });
        return obj;
    };
    FnUtility.mapToValueArr = function (strMap) {
        var obj = [];
        strMap.forEach(function (v) {
            if (v) {
                obj.push(v);
            }
        });
        return obj;
    };
    // *************** Converting a string Map to and from an object ***************
    FnUtility.strMapToObj = function (strMap) {
        var obj = Object.create(null);
        // for (let [k,v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        // obj[k] = v;
        // }
        // Object.keys(strMap).forEach((k) => {
        //   obj[k] = strMap.get(k);
        // });
        if (strMap) {
            strMap.forEach(function (v, k) {
                obj[k] = v;
            });
        }
        return obj;
    };
    FnUtility.objToStrMap = function (obj) {
        var strMap = new Map();
        if (obj) {
            for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
                var k = _a[_i];
                strMap.set(k, obj[k]);
            }
        }
        return strMap;
    };
    /**
     Object to Map
     */
    /*
    const map1 = new Map(Object.entries(user));
    
    const map2 = new Map();
    Object.keys(user).forEach(key => {
      if(user[key]) {
        map2.set(key, ''+user[key]);
      }
    });
    const u = {};
    Object.keys(user).forEach(key => {
      if(user[key]) {
        u[key] = ''+user[key];
      }
    });
    */
    // *************** The conversion to and from JSON ***************
    FnUtility.strMapToJson = function (strMap) {
        return JSON.stringify(FnUtility.strMapToObj(strMap));
    };
    FnUtility.jsonToStrMap = function (jsonStr) {
        return FnUtility.objToStrMap(JSON.parse(jsonStr));
    };
    /**
     * Remove Elements From A JavaScript Array
     * Array.filter to return elements not matching a value
     */
    FnUtility.arrayRemove = function (arr, value) {
        return arr.filter(function (ele) {
            return ele !== value;
        });
    };
    return FnUtility;
}());
exports.FnUtility = FnUtility;
