import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RepeatingElementsModule } from './repeatingelements.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RepeatingElementsModule);