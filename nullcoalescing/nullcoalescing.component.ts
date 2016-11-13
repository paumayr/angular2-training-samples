
import { Component } from "@angular/core";

interface Person {
    first: string;
    last: string;
}

@Component({
    selector: "null-coalescing",
    templateUrl: "./nullcoalescing.component.html"
})
export class NullCoalescingComponent {


    public selectedPerson : Person = null;
    public people: Array<Person> = [
        { first: "Bjarne", last: "Stroustrup" },
        { first: "Anders", last: "Hejlsberg" },
        { first: "Douglas", last: "Crockford" }
    ];

    select(person: Person) {
        this.selectedPerson = person;
    }

    
}