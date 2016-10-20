import { Component, OpaqueToken, Inject } from "@angular/core";

export const MENU_ITEMS = new OpaqueToken("menu_items");

@Component({
    selector:"multivalue-injection",
    templateUrl: "./multivalueinjection.component.html"
})
export class MultiValueInjectionComponent {
    constructor(@Inject(MENU_ITEMS) private menuItems: string[]) {
    }
}