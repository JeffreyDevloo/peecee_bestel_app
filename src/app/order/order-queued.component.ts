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
  selector: 'order-queued',
  templateUrl: './order-queued.component.html',
})
/**
 * Component to mutate the queued drinks.
 * The amount is set here as well as the ability to cancel the queued drinks
 */
export class OrderQueuedComponent implements OnInit {
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
    this.beverageService.beveragesQueued$.subscribe(
      (beverage) => {
        this.queuedBeverages.push(beverage)
      }
    )
  }

  ngOnInit() {
    // Load the current users data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = true;
      }
    );
  }
  cancelQueuedBeverage() {

  }

}
