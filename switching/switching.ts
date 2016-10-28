import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SwitchingModule } from './switching.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(SwitchingModule);