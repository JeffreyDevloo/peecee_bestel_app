import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from 'app/core/providers/js-data.provider';
import { IGroup } from "app/shared";

@Injectable()
export class GroupService {
  private table = 'group';
  constructor (
  ) {
  }

  populate(){
    const names = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];
    const items = [];
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
        const itemsToStore = items.filter((group) => !foundItems.some((foundGroup) => foundGroup.name === group.name));
        return store.createMany(this.table, itemsToStore);
      })
  };
  get(id): Observable<IGroup> {
    return Observable.fromPromise(
      store.find(this.table, id)
    );
  }
  getAll(query?): Observable<IGroup[]> {
    return Observable.fromPromise(
      store.findAll(this.table, query)
    );
  }
  getNew(): IGroup {
    return <IGroup>store.createRecord(this.table);
  }

  destroy(id) {
    return Observable.fromPromise(store.destroy(this.table, id));
  }

  save(group): Observable<IGroup> {
    // If we're updating an existing article
    if (group.id) {
      return Observable.fromPromise(store.update(this.table, group.id, group));
      // Otherwise, create a new article
    } else {
      return Observable.fromPromise(store.create(this.table, group));
    }
  }
}
