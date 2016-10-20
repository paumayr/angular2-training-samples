import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisplayingDataModule } from './displayingdata.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(DisplayingDataModule);