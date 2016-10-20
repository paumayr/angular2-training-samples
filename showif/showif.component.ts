import { Component } from "@angular/core";

@Component({
    selector: "show-if",
    templateUrl: "./showif.component.html"
})
export class ShowIfComponent {

    public value = 42;
    public increment() {
        this.value++;
    }
}