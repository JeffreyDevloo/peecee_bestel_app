import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from 'app/core/providers/js-data.provider';
import { IBeverage} from "app/shared";

@Injectable()
export class BeverageService {
  private table = 'beverage';
  private beveragesQueuedSource = new Subject<IBeverage>();
  private beveragesConfirmedSource = new Subject<IBeverage>();
  beveragesQueued$ = this.beveragesQueuedSource.asObservable();
  beveragesConfirmed$ = this.beveragesConfirmedSource.asObservable();
  constructor (
  ) { }

  // Functions to pass around shared data between components
  queueBeverage(beverage: IBeverage) {
    // Queue op a beverage
    this.beveragesQueuedSource.next(beverage);
  }
  confirmBeverage(beverage: IBeverage) {
    // Confirm the beverage to use in this order
    this.beveragesConfirmedSource.next(beverage);
  }
  // General functions for beverages
  populate(): Observable<IBeverage[]>{
    const names = ['Beer', 'Wine', 'Shots', 'Other'];
    const items = [];
    // Generate items
    for (let name of names) {
      const newItem = this.getNew();
      newItem.name = name;
      items.push(newItem);
    }
    return this.getAll({
      where: {
          name: {
            'in': items.map((group) => group.name)
          }
        }
      }
    )
      .mergeMap((foundItems) => {
        // Store all missing items
        const itemsToStore = items.filter((item) => !foundItems.some((foundItem) => foundItem.name === item.name));
        return store.createMany(this.table, itemsToStore);
      })
  };
  get(id): Observable<IBeverage> {
    return Observable.fromPromise(
      store.find(this.table, id)
    );
  }
  getAll(query?): Observable<IBeverage[]> {
    return Observable.fromPromise(
      store.findAll(this.table, query)
    );
  }
  getNew(): IBeverage {
    return <IBeverage>store.createRecord(this.table);
  }

  destroy(id) {
    return Observable.fromPromise(store.destroy(this.table, id));
  }

  save(group): Observable<IBeverage> {
    // If we're updating an existing article
    if (group.id) {
      return Observable.fromPromise(store.update(this.table, group.id, group));
      // Otherwise, create a new article
    } else {
      return Observable.fromPromise(store.create(this.table, group));
    }
  }
}
