import { Injectable } from "@angular/core";

@Injectable()
export class FruitCartService {
    public fruits = [];
    constructor() {
    }

    public add(fruit : string){
        this.fruits.push(fruit);
    }

    public remove(index : number) {
        this.fruits.splice(index, 1);
    }
}