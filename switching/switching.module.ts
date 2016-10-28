import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwitchingComponent }   from './switching.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SwitchingComponent ],
  bootstrap:    [ SwitchingComponent ]
})
export class SwitchingModule { }
