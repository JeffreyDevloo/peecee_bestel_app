import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';
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
  ArticlesService,
  BeverageService,
  CommentsService,
  GroupService,
  JwtService,
  OrderService,
  ProfilesService,
  TagsService,
  UserService
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
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
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
    ArticlesService,
    BeverageService,
    CommentsService,
    GroupService,
    JwtService,
    OrderService,
    ProfilesService,
    TagsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
