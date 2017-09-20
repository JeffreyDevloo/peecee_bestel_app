import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Group, GroupsService, UserService } from '../shared';

@Injectable()
export class GroupResolver implements Resolve<Group> {
  constructor(
    private groupService: GroupsService,
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
