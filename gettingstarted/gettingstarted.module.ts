import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GettingStartedComponent }   from './gettingstarted.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ GettingStartedComponent ],
  bootstrap:    [ GettingStartedComponent ]
})
export class GettingStartedModule { }
