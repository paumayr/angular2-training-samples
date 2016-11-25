import { Component } from "@angular/core";

@Component({
    selector: "class-bindings",
    templateUrl: "./classbindings.component.html"
})
export class ClassBindingsComponent
{
    public directClasses = "even";
    public toggleDirectClasses() {
        this.directClasses = this.directClasses == "even" ? "odd" : "even";
    }

    public value = 0;
    public increment() {
        this.value++;
    }
}


