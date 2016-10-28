import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClassBindingsComponent }   from './classbindings.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ClassBindingsComponent ],
  bootstrap:    [ ClassBindingsComponent ]
})
export class ClassBindingsModule { }
