import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CustomPipesComponent } from "./custompipes.component";
import { FriendlyBytesPipe } from "./friendlybytes.pipe";


@NgModule({
    imports: [BrowserModule],
    declarations: [CustomPipesComponent, FriendlyBytesPipe ],
    bootstrap: [CustomPipesComponent]
})
export class CustomPipesModule {}