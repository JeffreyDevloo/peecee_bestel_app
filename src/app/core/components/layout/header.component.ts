import { Component, OnInit } from '@angular/core';

import { User } from 'app/shared';
import { Globals } from 'app/shared/globals';
import { UserService } from 'app/core/services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  appTitle = Globals.APP_NAME;
  constructor(
    private userService: UserService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }
}
