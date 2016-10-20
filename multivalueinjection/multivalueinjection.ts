import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MultiValueInjectionModule } from './multivalueinjection.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MultiValueInjectionModule);