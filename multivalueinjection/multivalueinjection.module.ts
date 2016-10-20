import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MultiValueInjectionComponent }   from './multivalueinjection.component';

import { SubModuleAModule } from "./submoduleA.module";
import { SubModuleBModule } from "./submoduleB.module";

import { MENU_ITEMS } from "./multivalueinjection.component";

@NgModule({
  imports:      [ BrowserModule, SubModuleAModule, SubModuleBModule ],
  declarations: [ MultiValueInjectionComponent ],
  bootstrap:    [ MultiValueInjectionComponent ]
})
export class MultiValueInjectionModule { }
