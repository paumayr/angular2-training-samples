import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PipesModule } from './pipes.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(PipesModule);