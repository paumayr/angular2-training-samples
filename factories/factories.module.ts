import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FactoriesComponent } from "./factories.component";
import { SampleService } from "./sample.service";

import { MainConnection, TrackingConnection } from "./connection.tokens";
import { ConnectionService } from "./connection.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [FactoriesComponent],
    bootstrap: [FactoriesComponent],
    providers:[
        SampleService,
        { provide: MainConnection, useFactory: () => new ConnectionService("main connection=2323;username=asdf") },
        { provide: TrackingConnection, useFactory: () => new ConnectionService("tracking connection=464646;username=jklm") }
    ]
})
export class FactoriesModule {}