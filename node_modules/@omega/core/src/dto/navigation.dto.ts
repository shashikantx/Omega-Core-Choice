export class NavigationDto {

  /* ************************************ Instance Fields ************************************ */
  label: string;
  link: string;
  icon: string;
  nav: Array<NavigationDto>;

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

  constructor(label: string, link: string, icon: string, nav: Array<NavigationDto>) {
    this.label = label;
    this.link = link;
    this.icon = icon;
    this.nav = nav;
  }

}
