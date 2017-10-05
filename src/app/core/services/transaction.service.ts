import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { store } from 'app/core/providers/js-data.provider';
import { ITransaction } from "app/shared";

@Injectable()
export class TransactionService {
  private table = 'transaction';
  constructor (
  ) { }

  // General functions for beverages
  get(id): Observable<ITransaction> {
    return Observable.fromPromise(
      store.find(this.table, id)
    );
  }
  getAll(query?): Observable<ITransaction[]> {
    return Observable.fromPromise(
      store.findAll(this.table, query)
    );
  }
  getNew(beverageId:string|number): ITransaction {
    return <ITransaction>store.createRecord(this.table, {beverage_id: beverageId, amount: 0});
  }

  destroy(id) {
    return Observable.fromPromise(store.destroy(this.table, id));
  }

  save(transaction): Observable<ITransaction> {
    // If we're updating an existing article
    if (transaction.id) {
      return Observable.fromPromise(store.update(this.table, transaction.id, transaction));
      // Otherwise, create a new article
    } else {
      return Observable.fromPromise(store.create(this.table, transaction));
    }
  }
}
