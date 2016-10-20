import { Component } from "@angular/core";
import { FruitCartService } from "./fruitcart.service";

@Component({
    selector: "fruit-basket",
    templateUrl: "./fruitbasket.component.html"
})
export class FruitBasketComponent {

    public fruits : string[];
    public fruitName = "";

    constructor(private fruitCartService : FruitCartService) {
        this.fruits = this.fruitCartService.fruits;
    }

    add() {
        this.fruitCartService.add(this.fruitName);
    }

    remove(index: number) {
        this.fruitCartService.remove(index);
    }
}