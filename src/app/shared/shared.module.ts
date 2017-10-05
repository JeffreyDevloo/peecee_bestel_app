import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  GroupListComponent,
  GroupButtonComponent,
  BeverageButtonComponent,
  BeverageListComponent
} from "app/shared/pagehelpers";

import { MarkdownPipe, MapIteratorPipe } from "app/shared/pipes";
import { ErrorsModule } from "./components/errors/errors.module";
import { LayoutModule } from "./components/layout/layout.module";

@NgModule({
  imports: [
    // Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    // Own Modules
    ErrorsModule,
    LayoutModule
  ],
  declarations: [
    // Component
    BeverageButtonComponent,
    BeverageListComponent,
    GroupListComponent,
    GroupButtonComponent,
    // Pipes
    MarkdownPipe,
    MapIteratorPipe
  ],
  exports: [
    // Modules
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    // Own Modules
    ErrorsModule,
    LayoutModule,
    // Components
    BeverageButtonComponent,
    BeverageListComponent,
    ReactiveFormsModule,
    GroupListComponent,
    GroupButtonComponent,
    // Pipes
    MarkdownPipe,
    MapIteratorPipe
  ]
})
export class SharedModule {}
