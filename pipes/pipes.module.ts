import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PipesComponent }   from './pipes.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PipesComponent ],
  bootstrap:    [ PipesComponent ]
})
export class PipesModule { }
