import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StyleBindingsModule } from './stylebindings.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(StyleBindingsModule);