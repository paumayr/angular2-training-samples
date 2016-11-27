import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RoutingBasicsModule } from './routingbasics.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RoutingBasicsModule);