import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomPipesModule } from './custompipes.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomPipesModule);