import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Rx";

@Injectable()
export class UserService {
    public roles: Array<string> = [];
    public setRoles(roles: string[]) {
        this.roles = roles;
        this.rolesChange.next(this.roles);
    }
    public rolesChange = new Subject<Array<string>>();
}