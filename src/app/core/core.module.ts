import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from "./directives/directives.module";
import { LayoutModule } from "./components/layout/layout.module";

import {
  AuthGuard,
  ApiService,
  BeverageService,
  GroupService,
  JwtService,
  OrderService,
  ProfilesService,
  UserService,
  TransactionService
} from "app/core/services";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    // Own Modules
    DirectivesModule,
    LayoutModule
  ],
  exports: [
    // Modules
    CommonModule,
    HttpModule,
    RouterModule,
    // Own Modules
    DirectivesModule,
    LayoutModule
  ],
  declarations: [
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
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
