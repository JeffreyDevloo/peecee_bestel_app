import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { BeverageService} from "../shared/services/beverage.service";
import { IBeverage } from "../shared/js-data/interfaces/beverage.interface";
import {
  Comment,
  OrderService,
  QueryModel,
  User,
  UserService
} from '../shared';


@Component({
  selector: 'article-page',
  templateUrl: './order.component.html',
  providers: [BeverageService]  // Share same instance to children and injects that instance into itself through its constructor
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
  listConfig: QueryModel = new QueryModel();
  queuedBeverages: IBeverage[] = [];
  constructor(
    private orderService: OrderService,
    private router: Router,
    private userService: UserService,
    private beverageService: BeverageService
  ) {
    this.order = this.orderService.getNew();
    this.beverageService.beveragesQueued$.subscribe(
      (beverage) => {
        this.queuedBeverages.push(beverage)
      }
    )
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
