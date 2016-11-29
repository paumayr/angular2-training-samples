import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomStructuralDirectiveModule } from './customstructuraldirective.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomStructuralDirectiveModule);