import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowAuthedDirective } from "./show-authed.directive";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ShowAuthedDirective,
  ],
  declarations: [
    ShowAuthedDirective, // Let Angular resolve the directive within this module
  ]
})
export class DirectivesModule { }
