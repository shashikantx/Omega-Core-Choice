"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationDto = void 0;
var NavigationDto = /** @class */ (function () {
    /* ************************************ Constructors ************************************ */
    // constructor(label: string, link: string) {
    //   this.label = label;
    //   this.link = link;
    // }
    //
    // constructor(label: string, link: string, icon: string) {
    //   this.label = label;
    //   this.link = link;
    //   this.icon = icon;
    // }
    //
    // constructor(label: string, link: string, nav: Array<NavigationDto>) {
    //   this.label = label;
    //   this.link = link;
    //   this.nav = nav;
    // }
    function NavigationDto(label, link, icon, nav) {
        this.label = label;
        this.link = link;
        this.icon = icon;
        this.nav = nav;
    }
    return NavigationDto;
}());
exports.NavigationDto = NavigationDto;
