import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextInputModule } from './textinput.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(TextInputModule);