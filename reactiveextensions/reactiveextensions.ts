import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveExtensionsModule } from './reactiveextensions.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ReactiveExtensionsModule);