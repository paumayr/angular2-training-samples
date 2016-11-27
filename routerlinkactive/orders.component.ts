import { Component } from "@angular/core";

@Component({
    template: `
        <div>
            <h1>Orders</h1>

            <ul>
                <li *ngFor="let order of orders">{{order}}</li>
            </ul>
        </div>
    `
})
export class OrdersComponent {

    public orders = ["Order 1 ", "Order 2", "Order 3"];

}