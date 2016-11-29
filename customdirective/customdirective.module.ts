import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CustomDirectiveComponent } from "./customdirective.component";

import { ClickWobbleDirective } from "./clickwobble.directive"; 

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CustomDirectiveComponent, 
        ClickWobbleDirective 
    ],
    bootstrap: [CustomDirectiveComponent]
})
export class CustomDirectiveModule {}

