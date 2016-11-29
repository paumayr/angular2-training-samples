import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { LifecycleEventsComponent } from "./lifecycleevents.component";
import { NoisyComponent } from "./noisy.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ LifecycleEventsComponent, NoisyComponent ],
  bootstrap:    [ LifecycleEventsComponent ]
})
export class LifecycleEventsModule {

}