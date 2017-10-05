import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IOrder} from "app/shared/";
import { OrderService, UserService } from 'app/core/services';

@Injectable()
export class OrderResolver implements Resolve<IOrder> {
  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.orderService.get(route.params['id'])
      .catch((err) => this.router.navigateByUrl('/'));

  }
}
