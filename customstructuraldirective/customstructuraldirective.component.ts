import { Component, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";

import { Subscription } from "rxjs/Rx";

@Component({
    selector:"custom-structural-directive",
    templateUrl: "./customstructuraldirective.component.html",
})
export class CustomStructuralDirectiveComponent{
    public roles: string = '';

    constructor(private userService : UserService) {
    }

    updateRoles(roles : string) {
        this.userService.setRoles(roles.split(' '));
    }
}