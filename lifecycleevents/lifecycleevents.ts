import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LifecycleEventsModule } from './lifecycleevents.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(LifecycleEventsModule);