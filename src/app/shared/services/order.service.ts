import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from '../providers/js-data.provider';
import { IOrder} from "../js-data/interfaces/order.interface";
import { GroupService } from "./group.service";
import { BeverageService} from "./beverage.service";

@Injectable()
export class OrderService {
  private table = 'order';
  constructor (
    private beverageService: BeverageService,
    private groupService: GroupService,
  ) {
  }

  getNew(): IOrder {
    return <IOrder>store.createRecord(this.table);
  }
  populate(){
    console.log(`Populating ${this.table}`);
    const items = [{name: 'test_aankoop'}];
    const beverage$ = this.beverageService.getAll();
    const group$ = this.groupService.getAll();

    return Observable
      .zip(group$, beverage$, (groups, beverages) => ({groups, beverages}))
      .mergeMap((data: any) => {
        console.log(data);
        const beverage = data.beverages[0];
        const group = data.groups[0];
        items[0]['beverage_ids'] = [beverage.id];
        items[0]['beverages'] = [beverage];
        items[0]['group_ids'] = [group.id];
        items[0]['groups'] = [group];
        console.log(items[0]);
        // Both of the populates are done. Now populate our orders
        return this.getAll({where: {name: {'in': items.map((item) => item.name)}}},{with: ['beverages', 'groups']})
          .mergeMap((foundItems) => {
            console.log(foundItems);
            // Store all missing items
            const itemsToStore = items.filter((item) => !foundItems.some((foundItem) => foundItem.name === item.name));
            console.log(itemsToStore);
            return store.createMany(this.table, itemsToStore);
          })
      })
  };
  get(id): Observable<IOrder> {
    return Observable.fromPromise(
      store.find(this.table, id)
    );
  }
  getAll(query?, opts?): Observable<IOrder[]> {
    return Observable.fromPromise(
      store.findAll(this.table, query, opts)
    );
  }

  destroy(id) {
    return Observable.fromPromise(store.destroy(this.table, id));
  }

  save(order): Observable<IOrder> {
    // If we're updating an existing order
    if (order.id) {
      return Observable.fromPromise(store.update(this.table, order.id, order));
      // Otherwise, create a new article
    } else {
      return Observable.fromPromise(store.create(this.table, order));
    }
  }
}
