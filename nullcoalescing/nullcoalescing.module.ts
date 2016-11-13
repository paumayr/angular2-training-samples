import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NullCoalescingComponent }   from './nullcoalescing.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ NullCoalescingComponent ],
  bootstrap:    [ NullCoalescingComponent ]
})
export class NullCoalescingModule { }
