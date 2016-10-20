import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GettingStartedModule } from './gettingstarted.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(GettingStartedModule);