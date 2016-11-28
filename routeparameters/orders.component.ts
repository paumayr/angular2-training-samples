import { Component } from "@angular/core";

import { Order, getOrders } from "./orders";
@Component({
    templateUrl: "./orders.component.html"
})
export class OrdersComponent {
    public orders : Order[];
    constructor() {
        this.orders = getOrders();
    }
}