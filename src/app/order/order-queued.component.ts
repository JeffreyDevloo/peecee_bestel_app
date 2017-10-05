import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import { IBeverage, ITransaction, IOrder, User} from "app/shared";
import { BeverageService, OrderService, UserService, TransactionService} from "app/core/services";

@Component({
  selector: 'order-queued',
  templateUrl: './order-queued.component.html',
})
/**
 * Component to mutate the queued drinks.
 * The amount is set here as well as the ability to cancel the queued drinks
 */
export class OrderQueuedComponent implements OnInit {
  @Input() order: IOrder;

  transactionMap: Map<IBeverage, ITransaction> = new Map();
  currentUser: User;
  canModify: boolean;
  queuedBeverages: IBeverage[] = [];
  constructor(
    private orderService: OrderService,
    private router: Router,
    private userService: UserService,
    private beverageService: BeverageService,
    private transactionService: TransactionService
  ) {
    this.beverageService.beveragesQueued$.subscribe(
      (beverage) => {
        this.handleTransaction(beverage);
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
  handleTransaction(beverage:IBeverage) {
    let transaction: ITransaction;
    if (this.transactionMap.has(beverage)) {
      transaction = this.transactionMap.get(beverage);
    } else {
      transaction = this.transactionService.getNew(beverage.id);
    }
    // Update our transaction
    transaction.beverage_id = beverage.id;
    transaction.amount += 1;
    // Set also updates when key is present
    this.transactionMap.set(beverage, transaction)
  }

  get transactionEntries(): [IBeverage, ITransaction][] {
    return Array.from(this.transactionMap.entries());
  }
  cancelQueuedBeverage() {

  }
}
