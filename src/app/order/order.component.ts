import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {
  OrderService,
  Comment,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'article-page',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  order;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private userService: UserService,
  ) {
    this.order = this.orderService.getNew();
  }

  ngOnInit() {
    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = true;
      }
    );
  }

  deleteorder() {
    this.isDeleting = true;

    this.orderService.destroy(this.order.id)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }
}
