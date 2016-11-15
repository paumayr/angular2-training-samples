import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsSampleModule } from './formssample.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(FormsSampleModule);