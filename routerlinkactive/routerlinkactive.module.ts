import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { RouterLinkActiveComponent }   from './routerlinkactive.component';

import { FruitsComponent } from "./fruits.component";
import { OrdersComponent } from "./orders.component";

var routes : Route[] = [
    { path: "fruits", component: FruitsComponent },
    { path: "orders", component: OrdersComponent }
];

@NgModule({
  imports:      [ 
      BrowserModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [ 
      RouterLinkActiveComponent,
      FruitsComponent,
      OrdersComponent
  ],
  bootstrap:    [ RouterLinkActiveComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RouterLinkActiveModule { }
