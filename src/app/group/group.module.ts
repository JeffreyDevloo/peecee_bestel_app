import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GroupComponent } from './group.component';
import { GroupResolver } from './group-resolver.service';
import { SharedModule } from 'app/shared';

const groupRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'group/:id',
    component: GroupComponent,
    resolve: {
      group: GroupResolver
    }
  }
]);

@NgModule({
  imports: [
    groupRouting,
    SharedModule
  ],
  declarations: [
    GroupComponent,
  ],

  providers: [
    GroupResolver
  ]
})
export class GroupModule {}
