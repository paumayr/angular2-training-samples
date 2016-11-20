import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomDirectiveModule } from './customdirective.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomDirectiveModule);