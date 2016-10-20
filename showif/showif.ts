import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ShowIfModule } from './showif.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ShowIfModule);