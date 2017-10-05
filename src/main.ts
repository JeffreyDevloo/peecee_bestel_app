import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { getTranslationProviders } from './app/core/providers/i18n-providers';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
getTranslationProviders().then(providers => {
  const options = {providers};
  const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule, options);

  //Logging bootstrap information
  bootstrapPromise.then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));
});
