import { Component } from "@angular/core";

@Component({
    template: `
        <div>
            <h1>Some Fruits</h1>

            <ul>
                <li *ngFor="let fruit of fruits">{{fruit}}</li>
            </ul>
        </div>
    `
})
export class FruitsComponent {
     fruits = ["apples", "bananas", "boysenberry"]; 
}