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

    public availableRoles = ["user", "superuser", "admin"];
    public role = this.availableRoles[0];

    saveUser() {
        console.log("saving user...");
    }
}