import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModelBindingModule } from './modelbinding.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ModelBindingModule);