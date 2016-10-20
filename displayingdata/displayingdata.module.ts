import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisplayingDataComponent }   from './displayingdata.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DisplayingDataComponent ],
  bootstrap:    [ DisplayingDataComponent ]
})
export class DisplayingDataModule { }
