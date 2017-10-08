import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from 'app/core/directives/directives.module';

import { HeaderComponent } from "./header.component";
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
