import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderTakerComponent } from './order-taker.component';
import { OrderQueuedComponent } from "./order-queued.component";
import { OrderResolver } from './order-taker-resolver.service';
import { SharedModule } from 'app/shared';

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
