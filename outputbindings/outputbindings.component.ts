import { Component } from "@angular/core";

@Component({
    selector: "output-bindings",
    templateUrl: "./outputbindings.component.html"
})
export class OutputBindingsComponent {

    public names = [
        { first: "Homer", last: "Simpson"},
        { first: "Bart", last: "Simpson"},
        { first: "March", last: "Simpson"},
        { first: "Lisa", last: "Simpson"},
        { first: "Maggie", last: "Simpson"},
        { first: "Ling", last: "Bouvier" },
        { first: "Kent", last: "Brockman" },
        { first: "Charles", last: "Burns" },
        { first: "Ned", last: "Flanders" }
    ];

    public selected = this.names[0];

    updateSelected($event : { first: string, last: string }) {
        this.selected.first = $event.first;
        this.selected.last = $event.last;
    }
}