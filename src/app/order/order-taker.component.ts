import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from "../shared/js-data/interfaces/order.interface";
import {
  OrderService,
  QueryModel,
  User,
  UserService,
  BeverageService,
} from '../shared';

@Component({
  selector: 'order-taker',
  templateUrl: './order-taker.component.html',
  providers: [BeverageService]  // Share same instance to children and injects that instance into itself through its constructor
})
export class OrderTakerComponent implements OnInit {
  order: IOrder;
  currentUser: User;
  canModify: boolean;
  isDeleting = false;
  listConfig: QueryModel = new QueryModel();
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
