import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from 'app/core/services'
import { SharedModule } from 'app/shared';
import { SettingsComponent } from './settings.component';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    settingsRouting
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
