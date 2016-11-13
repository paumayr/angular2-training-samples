
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { TemplateReferenceVariablesComponent }   from './templatereferencevariables.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [TemplateReferenceVariablesComponent],
    bootstrap: [ TemplateReferenceVariablesComponent ]
})
export class TemplateReferenceVariablesModule {
}