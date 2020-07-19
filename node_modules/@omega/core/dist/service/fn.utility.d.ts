/**
 * FnUtility -
 */
export declare class FnUtility {
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
    static isEmpty(obj: Object): boolean;
    static objMerge(source: any, target: any): void;
    static objToKeyArr(obj: any): Array<any>;
    static objToValueArr(obj: any): Array<any>;
    static mapToKeyArr(strMap: Map<any, any>): Array<any>;
    static mapToValueArr(strMap: Map<any, any>): Array<any>;
    static strMapToObj(strMap: Map<any, any>): any;
    static objToStrMap(obj: any): Map<any, any>;
    /**
     Object to Map
     */
    static strMapToJson(strMap: Map<any, any>): string;
    static jsonToStrMap(jsonStr: string): Map<any, any>;
    /**
     * Remove Elements From A JavaScript Array
     * Array.filter to return elements not matching a value
     */
    static arrayRemove(arr: Array<any>, value: any): any[];
}
