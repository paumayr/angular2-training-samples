import { Component } from "@angular/core";

@Component({
    selector: "model-binding",
    templateUrl: "./modelbinding.component.html"
})
export class ModelBindingComponent {

    public message = "";

    showAlert() {
        alert(`You wrote: ${this.message}`);
    }
}