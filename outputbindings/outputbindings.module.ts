import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { OutputBindingsComponent }   from "./outputbindings.component";
import { NameEditorComponent } from "./name-editor.component"; 

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      OutputBindingsComponent,
      NameEditorComponent
  ],
  bootstrap:    [ OutputBindingsComponent ]
})
export class OutputBindingsModule { }
