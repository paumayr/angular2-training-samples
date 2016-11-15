import { Component } from "@angular/core";

@Component({
    selector:"forms-sample",
    templateUrl: "./formssample.component.html",
    styleUrls: ["./formssample.component.css"]
})
export class FormsSampleComponent {
    public user = {
        username: 'philipp'
    };
}