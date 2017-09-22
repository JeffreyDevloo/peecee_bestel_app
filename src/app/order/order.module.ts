import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderResolver } from './order-resolver.service';
import { SharedModule } from '../shared';

const orderRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: OrderComponent,
  }
]);

@NgModule({
  imports: [
    orderRouting,
    SharedModule
  ],
  declarations: [
    OrderComponent,
  ],

  providers: [
    OrderResolver
  ]
})
export class OrderModule {}
