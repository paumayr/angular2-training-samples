import { Component } from "@angular/core";

@Component({
    selector: "pipes",
    templateUrl: "./pipes.component.html"
})
export class PipesComponent {

    now = new Date(Date.now());
}