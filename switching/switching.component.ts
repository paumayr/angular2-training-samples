import { Component } from "@angular/core";

@Component({
    selector: "switching",
    templateUrl: "./switching.component.html"
})
export class SwitchingComponent{
    
    public pages = ["intro", "chapter1", "chapter2", "closing"];
    public currentPage: string = this.pages[0];

    public nextPage() {
        var index = this.pages.indexOf(this.currentPage);
        index = (index + 1) % this.pages.length;
        this.currentPage = this.pages[index];
    }

    public prevPage() {
        var index = this.pages.indexOf(this.currentPage);
        index = index - 1;
        if (index < 0)
            index = this.pages.length - 1;

        this.currentPage = this.pages[index];
    }
}