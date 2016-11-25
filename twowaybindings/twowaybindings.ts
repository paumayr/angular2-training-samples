import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TwoWayBindingsModule } from './twowaybindings.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(TwoWayBindingsModule);