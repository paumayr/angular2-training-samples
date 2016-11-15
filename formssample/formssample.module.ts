import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FormsSampleComponent }   from './formssample.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ FormsSampleComponent ],
  bootstrap:    [ FormsSampleComponent ]
})
export class FormsSampleModule { }
