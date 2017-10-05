import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { OrderModule} from './order/order.module'
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import {
  // Components
  FooterComponent,
  HeaderComponent,
  // Guards
  AuthGuard,
  // Modules
  SharedModule,
  // Services
  ApiService,
  BeverageService,
  GroupService,
  JwtService,
  OrderService,
  ProfilesService,
  UserService,
  TransactionService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    OrderModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule
  ],
  providers: [
    // Guards
    AuthGuard,
    //Services
    ApiService,
    BeverageService,
    GroupService,
    JwtService,
    OrderService,
    ProfilesService,
    UserService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
