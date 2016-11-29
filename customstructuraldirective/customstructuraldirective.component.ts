import { Component, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";

import { Subscription } from "rxjs/Rx";

@Component({
    selector:"custom-structural-directive",
    templateUrl: "./customstructuraldirective.component.html",
})
export class CustomStructuralDirectiveComponent implements OnDestroy{
    private rolesChangedSubscription : Subscription;
    public roles: string = '';

    constructor(private userService : UserService) {
        this.userService.rolesChange.subscribe(roles => this.roles = roles.join(' '));
    }

    updateRoles(roles : string) {
        this.userService.setRoles(roles.split(' '));
    }

    ngOnDestroy() {
        this.rolesChangedSubscription.unsubscribe();
    }
}