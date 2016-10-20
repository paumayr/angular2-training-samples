import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "fruit-basket",
    templateUrl: "./fruitbasket.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FruitBasketComponent {
    public fruits = ["Apples", "Bananas", "Oranges"];
    public fruitName = "Boysenberry";

    public add() {
        this.fruits.push(this.fruitName);
    }

    public remove(index : number) {
        this.fruits.splice(index, 1);
    }   
}