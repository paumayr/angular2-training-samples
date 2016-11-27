import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "my-custom",
    templateUrl: "./mycustom.component.html",
    styleUrls: ["./mycustom.component.css"]
})
export class MyCustomComponent {

    @Input() amount: number = 0.0;
    @Output() amountChange = new EventEmitter<number>();

    incrementAmount() {
        this.amount += 50.0;
        this.amountChange.emit(this.amount);
    }

    decrementAmount() {
        this.amount -= 50.0;
        this.amountChange.emit(this.amount);
    } 
}


