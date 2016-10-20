import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonClickModule } from './buttonclick.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ButtonClickModule);