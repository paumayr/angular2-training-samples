import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { RouteParametersComponent }   from './routeparameters.component';

import { OrderDetailsComponent } from "./orderdetails.component";
import { OrdersComponent } from "./orders.component";

var routes : Route[] = [
    { path: "orders/:id", component: OrderDetailsComponent },
    { path: "orders", component: OrdersComponent }
];

@NgModule({
  imports: [ 
      BrowserModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [ 
      RouteParametersComponent,
      OrderDetailsComponent,
      OrdersComponent
  ],
  bootstrap:    [ RouteParametersComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RouteParametersModule { }
