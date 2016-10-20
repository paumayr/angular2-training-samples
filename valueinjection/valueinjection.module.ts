import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ValueInjectionComponent, CONNECTION_STRING }   from './valueinjection.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ValueInjectionComponent ],
  providers: [
      { provide: CONNECTION_STRING, useValue: "http://the-magic-connection-string.com/path/to/odata/controller" }
  ],
  bootstrap:    [ ValueInjectionComponent ]
})
export class ValueInjectionModule { }
