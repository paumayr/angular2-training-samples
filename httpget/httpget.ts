import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpGetModule } from './httpget.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HttpGetModule);