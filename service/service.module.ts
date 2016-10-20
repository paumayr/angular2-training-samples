import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FruitBasketComponent }   from "./fruitbasket.component";
import { FruitCartService } from "./fruitcart.service";
import { ServiceComponent } from "./service.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
      FruitBasketComponent,
      ServiceComponent
  ],
  providers: [
      FruitCartService
  ],
  bootstrap:    [ ServiceComponent ]
})
export class ServiceModule { }
