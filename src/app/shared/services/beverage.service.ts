import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from '../providers/js-data.provider';
import { IBeverage} from "../js-data/interfaces/beverage.interface";

@Injectable()
export class BeverageService {
  private table = 'beverage';
  constructor (
  ) {
  }

  populate(): Observable<IBeverage[]>{
    console.log(`Populating ${this.table}`);
    const items = [{name: 'Beer'}, {name: 'Wine'}, {name: 'Shots'}, {name: 'Other'}];
    return this.getAll({
      where: {
          name: {
            'in': items.map((group) => group.name)
          }
        }
      }
    )
      .mergeMap((foundItems) => {
        console.log(foundItems);
        // Store all missing items
        const itemsToStore = items.filter((item) => !foundItems.some((foundItem) => foundItem.name === item.name));
        console.log(itemsToStore);
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
