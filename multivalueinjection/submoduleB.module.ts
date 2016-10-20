import { NgModule } from "@angular/core";

import { MENU_ITEMS } from "./multivalueinjection.component";

@NgModule({
    providers: [
        { provide: MENU_ITEMS, useValue: "SubModuleB", multi: true }
    ]
})
export class SubModuleBModule {}

