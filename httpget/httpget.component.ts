import { Component } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/finally";

interface Junkie {
    id : number,
    name : string,
    balance : number,
    consumptions: number
};

@Component({
    selector: "http-get",
    templateUrl: "./httpget.component.html"
})
export class HttpGetComponent {

    public isLoading = false;
    public junkies : Junkie[] = null;

    constructor(private http : Http) {
    }

    fetchJunkies() {
        this.isLoading = true;
        this.http.get('/api/coffeelist')
            .map(r => <Junkie[]>r.json())
            .finally(() => this.isLoading = false)
            .subscribe((data) => this.junkies = data);
    }
}