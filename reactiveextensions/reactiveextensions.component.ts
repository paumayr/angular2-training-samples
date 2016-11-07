
import { Component } from "@angular/core";

import {Observable, Subject} from 'rxjs/Rx';

@Component({
    selector: "reactive-extensions",
    templateUrl: "./reactiveextensions.component.html"
})
export class ReactiveExtensionsComponent {

    private timer = Observable.timer(1000, 500);
    public timerEvents : Array<number> = [];

    startTimer() {
        this.timer
            .take(10)
            .subscribe(v => this.timerEvents.push(v));
    }

    private debounce = new Subject<string>();
    public searchTerm = '';
    constructor() {
        this.debounce.debounceTime(2000).subscribe(x => this.searchTerm = x);
    }
    
    search(term) {
        this.debounce.next(term);
    }
}