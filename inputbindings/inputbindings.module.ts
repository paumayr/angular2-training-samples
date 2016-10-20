import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { InputBindingsComponent }   from "./inputbindings.component";

import { MasterComponent } from "./master.component";
import { DetailComponent } from "./detail.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      InputBindingsComponent,
      MasterComponent,
      DetailComponent
  ],
  bootstrap:    [ InputBindingsComponent ]
})
export class InputBindingsModule { }
