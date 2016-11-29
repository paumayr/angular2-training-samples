import { Component, OnDestroy} from "@angular/core";
import {Subscription, Observable } from "rxjs";
@Component({
  template: '<div></div>'  
})
export class MyComponent implements OnDestroy {
    public mySubscription : Subscription;
    constructor() {
        this.mySubscription = Observable.timer(100, 500)
                .subscribe(() => this.updateSomething());
    }

    updateSomething() {}
    ngOnDestroy() {
        this.mySubscription.unsubscribe();
    }
}