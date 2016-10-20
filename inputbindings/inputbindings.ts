import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputBindingsModule } from './inputbindings.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(InputBindingsModule);