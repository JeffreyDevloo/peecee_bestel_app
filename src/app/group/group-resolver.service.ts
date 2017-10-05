import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IGroup, GroupService, UserService } from '../shared';

@Injectable()
export class GroupResolver implements Resolve<IGroup> {
  constructor(
    private groupService: GroupService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.groupService.get(route.params['id'])
      .catch((err) => this.router.navigateByUrl('/'));
  }
}
