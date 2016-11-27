import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from '@angular/router';
import { RoutingBasicsComponent }   from './routingbasics.component';
import { FruitsComponent } from './fruits.component';
import { OrdersComponent } from './orders.component';

var routes : Route[] = [
  { path: "fruits", component: FruitsComponent },
  { path: "orders", component: OrdersComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RoutingBasicsComponent,
    FruitsComponent,
    OrdersComponent
  ],
  bootstrap:    [ RoutingBasicsComponent ]
})
export class RoutingBasicsModule { }
