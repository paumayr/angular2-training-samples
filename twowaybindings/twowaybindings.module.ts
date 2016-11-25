import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TwoWayBindingsComponent }   from './twowaybindings.component';
import { MyCustomComponent } from './mycustom.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    MyCustomComponent,
    TwoWayBindingsComponent
  ],
  bootstrap:    [ TwoWayBindingsComponent ]
})
export class TwoWayBindingsModule { }
