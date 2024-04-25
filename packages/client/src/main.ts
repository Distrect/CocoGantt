import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/compiler';
import { enableProdMode } from '@angular/core';

const licence =
  'Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtccHVRRGZeV0VyXUM=';

registerLicense(licence);

// const app = bootstrapApplication(AppModule)
//   // .then((app) => app)
//   .catch((err: any) => console.error(err));

// bootstrapApplication(AppComponent, appConfig).catch((err: any) =>
//   console.error(err)
// );
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
