export declare class NavigationDto {
    label: string;
    link: string;
    icon: string;
    nav: Array<NavigationDto>;
    constructor(label: string, link: string, icon: string, nav: Array<NavigationDto>);
}
