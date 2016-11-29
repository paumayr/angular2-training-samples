import { Component, Input,
     OnInit, OnDestroy, OnChanges, 
     AfterViewInit, SimpleChanges } from "@angular/core";

@Component({
    selector: "noisy-comp",
    template: "<div>Noisy Element</div>"
})
export class NoisyComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @Input() public firstName: string;

    constructor() {
        console.log("constructor");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("on changes:", changes['firstName'].currentValue);

    }

    ngOnInit() {
        console.log("on init");
    }

    ngOnDestroy() {
        console.log("on destroy");
    }
    
    ngAfterViewInit() {
        console.log("after view init");
    }
}
