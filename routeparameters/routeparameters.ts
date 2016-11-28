import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouteParametersModule } from './routeparameters.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RouteParametersModule);