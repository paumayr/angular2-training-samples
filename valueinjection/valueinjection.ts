import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ValueInjectionModule } from './valueinjection.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ValueInjectionModule);