import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    templateUrl: "./busy.component.html"
})
export class BusyComponent {
    public isLoading = false;

    constructor(private http: Http) {}

    public fetchData() {
        this.isLoading = true;
        this.http.get('api/parts/1234')
            .map(r => r.json())
            .finally(() => this.isLoading = false)
            .subscribe(data => {
                // process data
            });
    }
}
