import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveExtensionsComponent }   from './reactiveextensions.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ReactiveExtensionsComponent ],
  bootstrap:    [ ReactiveExtensionsComponent ]
})
export class ReactiveExtensionsModule { }
