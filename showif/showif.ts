import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ShowIfModule } from './showif.module';

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(ShowIfModule);