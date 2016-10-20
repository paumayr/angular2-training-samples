import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextInputComponent }   from './textinput.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TextInputComponent ],
  bootstrap:    [ TextInputComponent ]
})
export class TextInputModule { }
