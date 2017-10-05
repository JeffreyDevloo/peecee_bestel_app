import { Component, OnInit } from '@angular/core';

import { User } from '../models';
import { UserService } from '../services';

import { Globals } from '../globals';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private appTitle = Globals.APP_NAME;
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
