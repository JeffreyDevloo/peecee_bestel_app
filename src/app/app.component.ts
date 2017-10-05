import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

import { UserService, GroupService, BeverageService, OrderService } from 'app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private groupService: GroupService,
    private beverageService: BeverageService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.userService.populate();
    // Line 1221 in js-data-localstorage should be localKeys = localKeys.concat(self.makeHasManyLocalKeys(mapper, def, record));
    const groupPopulate$ = this.groupService.populate();
    const beveragePopuluate$ = this.beverageService.populate();
    Observable
      .zip(groupPopulate$, beveragePopuluate$, (groups, beverages) => ({groups, beverages}))
      .subscribe((pair) => {
        console.log('Populated groups and orders');
      //   // Both of the populates are done. Now populate our orders
      //   this.orderService.populate().subscribe((data) => {
      //     console.log(data)
      // })
    })
  }
}
