import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OutputBindingsModule } from './outputbindings.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(OutputBindingsModule);