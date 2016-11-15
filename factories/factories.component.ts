import { Component, Inject } from "@angular/core";
import { SampleService} from "./sample.service";

import { MainConnection, TrackingConnection } from "./connection.tokens";
import { ConnectionService } from "./connection.service";

@Component({
    selector: "factories",
    templateUrl: "./factories.component.html"
})
export class FactoriesComponent {

    constructor(private service: SampleService,
        @Inject(MainConnection) private mainConnection : ConnectionService,
        @Inject(TrackingConnection) private trackingConnection  : ConnectionService) {
    }

    click() {
        this.service.method();
    }
}