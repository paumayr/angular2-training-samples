import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServiceModule } from './service.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ServiceModule);