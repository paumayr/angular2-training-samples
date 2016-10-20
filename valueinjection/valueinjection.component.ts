import {  Inject, Component, OpaqueToken } from "@angular/core";

export const CONNECTION_STRING = new OpaqueToken("connectionstring");

@Component({
    selector: "value-injection",
    templateUrl: "./valueinjection.component.html"
})
export class ValueInjectionComponent {
    private injectedValue = '';
    constructor(@Inject(CONNECTION_STRING) connectionString : string ) {
        this.injectedValue = connectionString;
    }
}