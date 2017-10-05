import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from "./components/layout";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    // Components
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    // Components
    HeaderComponent,
    FooterComponent
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
