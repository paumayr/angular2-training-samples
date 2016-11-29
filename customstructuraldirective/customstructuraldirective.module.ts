import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CustomStructuralDirectiveComponent } from "./customstructuraldirective.component";
import { UserService } from "./user.service";
import { OnlyForDirective } from "./onlyfor.directive"; 

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CustomStructuralDirectiveComponent, 
        OnlyForDirective 
    ],
    providers: [
        UserService
    ],
    bootstrap: [CustomStructuralDirectiveComponent]
})
export class CustomStructuralDirectiveModule {}

