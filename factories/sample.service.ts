import { Injectable } from "@angular/core";


@Injectable()
export class SampleService {
    public value : number = 0;
    constructor() {
    }

    method() {
        this.value++;
        console.log(this.value);
    }
}