import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

import { Observable } from "rxjs/Rx";

@Directive({
    selector: "[click-wobble]"
})
export class ClickWobbleDirective {   
     constructor(private el: ElementRef, private renderer: Renderer) {
    }

    @HostListener('click') onclick() {
        console.log(this.el);
        this.renderer.setElementClass(this.el.nativeElement, "animated", true);
        this.renderer.setElementClass(this.el.nativeElement, "wobble", true);

        Observable.timer(1000)
                .first()
                .subscribe(() => { 
                    this.renderer.setElementClass(this.el.nativeElement, "animated", false);
                    this.renderer.setElementClass(this.el.nativeElement, "wobble", false);
                });
    }
}