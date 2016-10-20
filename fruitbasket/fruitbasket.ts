import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FruitBasketModule } from './fruitbasket.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(FruitBasketModule);