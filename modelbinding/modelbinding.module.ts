import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ModelBindingComponent }   from "./modelbinding.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ModelBindingComponent ],
  bootstrap:    [ ModelBindingComponent ]
})
export class ModelBindingModule { }
