import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { GroupListComponent, GroupButtonComponent, BeverageButtonComponent, BeverageListComponent} from "./pagehelpers";
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { MarkdownPipe} from "./pipes/markdown.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    // Directives
    ShowAuthedDirective,
    // Component
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    BeverageButtonComponent,
    BeverageListComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    GroupListComponent,
    GroupButtonComponent,
    ListErrorsComponent,
    // Pipes
    MarkdownPipe
  ],
  exports: [
    // Directives
    ShowAuthedDirective,
    // Components
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    BeverageButtonComponent,
    BeverageListComponent,
    ReactiveFormsModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    GroupListComponent,
    GroupButtonComponent,
    ListErrorsComponent,
    // Modules
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    // Pipes
    MarkdownPipe
  ]
})
export class SharedModule {}
