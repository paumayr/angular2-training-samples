import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { HttpGetComponent }   from './httpget.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ HttpGetComponent ],
  bootstrap:    [ HttpGetComponent ]
})
export class HttpGetModule { }
