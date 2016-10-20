import { Component, Input } from "@angular/core";

import { Fruit } from "./fruit";

@Component({
    selector: "detail",
    templateUrl: "./detail.component.html"
})
export class DetailComponent {

    @Input() fruit : Fruit;
}