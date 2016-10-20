import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonClickComponent }   from './buttonclick.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ButtonClickComponent ],
  bootstrap:    [ ButtonClickComponent ]
})
export class ButtonClickModule { }
