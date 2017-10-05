import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GroupListComponent, GroupButtonComponent, BeverageButtonComponent, BeverageListComponent} from "./pagehelpers";
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { MarkdownPipe, MapIteratorPipe } from "./pipes";

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
    BeverageButtonComponent,
    BeverageListComponent,
    GroupListComponent,
    GroupButtonComponent,
    ListErrorsComponent,
    // Pipes
    MarkdownPipe,
    MapIteratorPipe
  ],
  exports: [
    // Directives
    ShowAuthedDirective,
    // Components
    BeverageButtonComponent,
    BeverageListComponent,
    ReactiveFormsModule,
    GroupListComponent,
    GroupButtonComponent,
    ListErrorsComponent,
    // Modules
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    // Pipes
    MarkdownPipe,
    MapIteratorPipe
  ]
})
export class SharedModule {}
