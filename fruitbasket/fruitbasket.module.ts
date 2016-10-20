import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FruitBasketComponent }   from './fruitbasket.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ FruitBasketComponent ],
  bootstrap:    [ FruitBasketComponent ]
})
export class FruitBasketModule { }
