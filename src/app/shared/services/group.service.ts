import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from '../providers/js-data.provider';
import { IGroup } from "../js-data/interfaces/group.interface";

@Injectable()
export class GroupService {
  private table = 'group';
  constructor (
  ) {
  }

  populate(){
    console.log(`Populating ${this.table}`);
    const groups = [{name: 'Hufflepuff'}, {name: 'Gryffindor'}, {name: 'Ravenclaw'}, {name: 'Slytherin'}];
    return this.getAll({
      where: {
          name: {
            'in': groups.map((group) => group.name)
          }
        }
      }
    )
      .mergeMap((foundGroups) => {
        console.log(foundGroups);
        // Store all missing items
        const itemsToStore = groups.filter((group) => !foundGroups.some((foundGroup) => foundGroup.name === group.name));
        console.log(itemsToStore);
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
