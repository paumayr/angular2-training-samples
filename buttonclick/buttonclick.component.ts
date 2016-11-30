import { Component } from "@angular/core";

@Component({
    selector: "button-click",
    templateUrl: "./buttonclick.component.html"
})
export class ButtonClickComponent {

    public value = 42;

    increment() {
        console.log("in increment");
        this.value++;
    }
}