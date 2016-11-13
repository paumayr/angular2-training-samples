import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NullCoalescingModule } from './nullcoalescing.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(NullCoalescingModule);