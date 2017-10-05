import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Feature Module
import { CoreModule} from "app/core/core.module";
import { AuthModule } from './auth/auth.module';
import { OrderModule} from './order/order.module'
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular Module
    BrowserModule,
    // Order matters in the imports
    CoreModule,
    AuthModule,
    OrderModule,
    ProfileModule,
    rootRouting,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
