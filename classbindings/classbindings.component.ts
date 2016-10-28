import { Component } from "@angular/core";

@Component({
    selector: "class-bindings",
    templateUrl: "./classbindings.component.html"
})
export class ClassBindingsComponent
{
    public value = 0;

    public increment() {
        this.value++;
    }
}