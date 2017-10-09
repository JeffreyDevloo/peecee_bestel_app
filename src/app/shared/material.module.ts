/* Module for easy import for Angular Material components*/
import { NgModule } from '@angular/core';
import { MatTableModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatButtonModule],
  declarations: [],
  exports: [
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
