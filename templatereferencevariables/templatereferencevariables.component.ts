import { Component } from "@angular/core";

@Component({
    selector: "template-reference-variables",
    templateUrl: "./templatereferencevariables.component.html"
})
export class TemplateReferenceVariablesComponent {

    showMessage(msg: string) {
        alert(msg);
    }
}