import { Input, Directive, TemplateRef, ViewContainerRef, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";
import { Subscription } from "rxjs";

@Directive({
    selector: "[onlyFor]"
})
export class OnlyForDirective implements OnDestroy {

    constructor(private userService : UserService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
    }

    private rolesUpdatedSubscription : Subscription;
    private _roleName : string;
    private created = false;
    @Input() set onlyFor(roleName : string) {
        this._roleName = roleName;
        this.rolesUpdatedSubscription = this.userService
                                            .rolesChange
                                            .subscribe(roles => this.updateContent(this._roleName, roles));
        this.updateContent(this._roleName, this.userService.roles);
    }

    ngOnDestroy() {
        this.rolesUpdatedSubscription.unsubscribe();
    }

    private updateContent(roleName : string, roles: string[]) {
        if (roles.indexOf(roleName) > -1) {
            // show
            if (!this.created) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.created = true;
            }
        } else {
            // hide
            if (this.created) {
                this.viewContainer.clear();
                this.created = false;
            }
        }
    }
}