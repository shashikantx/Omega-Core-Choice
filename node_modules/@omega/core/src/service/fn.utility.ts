/**
 * FnUtility -
 */
export class FnUtility {
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
  public static isEmpty(obj: Object): boolean {
    if (!obj) {
      return true;
    }
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  // *************** Merge Object ***************
  public static objMerge(source: any, target: any) {
    if (source) {
      for (const k of Object.keys(source)) {
        target[k] = source[k];
      }
    }
  }

  // *************** Converting a Map to Array of value ***************
  public static objToKeyArr(obj: any): Array<any> {
    return FnUtility.mapToKeyArr(FnUtility.objToStrMap(obj))
  }

  public static objToValueArr(obj: any): Array<any> {
    return FnUtility.mapToValueArr(FnUtility.objToStrMap(obj))
  }

  public static mapToKeyArr(strMap: Map<any, any>): Array<any> {
    const obj = <Array<any>>[];
    strMap.forEach((v, k) => {
      obj.push(k);
    });
    return obj;
  }

  public static mapToValueArr(strMap: Map<any, any>): Array<any> {
    const obj = <Array<any>>[];
    strMap.forEach((v) => {
      if (v) {
        obj.push(v);
      }
    });
    return obj;
  }

  // *************** Converting a string Map to and from an object ***************
  public static strMapToObj(strMap: Map<any, any>): any {
    const obj = Object.create(null);
    // for (let [k,v] of strMap) {
    // We don’t escape the key '__proto__'
    // which can cause problems on older engines
    // obj[k] = v;
    // }
    // Object.keys(strMap).forEach((k) => {
    //   obj[k] = strMap.get(k);
    // });
    if (strMap) {
      strMap.forEach((v, k) => {
        obj[k] = v;
      });
    }
    return obj;
  }

  public static objToStrMap(obj: any): Map<any, any> {
    const strMap = new Map();
    if (obj) {
      for (const k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
      }
    }
    return strMap;
  }
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
  public static strMapToJson(strMap: Map<any, any>): string {
    return JSON.stringify(FnUtility.strMapToObj(strMap));
  }

  public static jsonToStrMap(jsonStr: string): Map<any, any> {
    return FnUtility.objToStrMap(JSON.parse(jsonStr));
  }

  /**
   * Remove Elements From A JavaScript Array
   * Array.filter to return elements not matching a value
   */
  public static arrayRemove(arr: Array<any>, value: any) {
    return arr.filter((ele) => {
      return ele !== value;
    });
  }

}