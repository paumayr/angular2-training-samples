import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { getOrders, Order } from "./orders";

@Component({
    templateUrl: "./orderdetails.component.html"
})
export class OrderDetailsComponent {
    public order: Order = null;
    constructor(activatedRoute : ActivatedRoute) {
        // var orderId = activatedRoute.snapshot.params["id"];
        // fetchOrder(orderId);

        // Uncomment to update to changing route parameter
        activatedRoute.params.subscribe(params => {
            this.fetchOrder(params["id"]);
        });
    }

    private fetchOrder(orderId : string) {
        this.order = getOrders().filter(o => o.id == orderId)[0];
    }
}