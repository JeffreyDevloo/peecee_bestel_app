import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderTakerComponent } from './order-taker.component';
import { OrderResolver } from './order-taker-resolver.service';
import { OrderQueuedComponent } from "./order-queued.component";
import { SharedModule } from '../shared';

const orderRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: OrderTakerComponent,
  }
]);

@NgModule({
  imports: [
    orderRouting,
    SharedModule
  ],
  declarations: [
    OrderTakerComponent,
    OrderQueuedComponent
  ],
  providers: [
    OrderResolver
  ]
})
export class OrderModule {}
