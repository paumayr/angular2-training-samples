import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ClassBindingsModule } from './classbindings.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ClassBindingsModule);