import { Component } from "@angular/core";

@Component({
    selector: "style-bindings",
    templateUrl: "./stylebindings.component.html"
})
export class StyleBindingsComponent {


    public fontSize = 12;
    public width = 50;
    public height = 50;

    public increaseFont() {
        this.fontSize += 2;
    }

    public decreaseFont() {
        this.fontSize -= 2;
    }

    public increaseWidth() {
        this.width += 10;
    }

    public decreaseWidth() {
        this.width -= 10;
    }

    public increaseHeight() {
        this.height += 10;
    }

    public decreaseHeight() {
        this.height -= 10;
    }
}