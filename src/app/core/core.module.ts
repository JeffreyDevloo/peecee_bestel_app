import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from "app/core/directives";
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
  ],
  exports: [
    // Modules
    CommonModule,
    HttpModule,
    RouterModule,
    // Directives
    ShowAuthedDirective,
  ],
  declarations: [
    // Directives
    ShowAuthedDirective,
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
export class CoreModule { }
