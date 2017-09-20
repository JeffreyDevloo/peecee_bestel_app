import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as localForage from "localforage";

@Injectable()
export class LocalForageService {

  private dataStores: {};
  constructor() {
    this.dataStores = {};
    this.setupLocalDB();
  }

  private setupLocalDB() {
    let defaultConfig = {
      driver      : localForage.WEBSQL, // Force WebSQL; same as using setDriver()
      name        : 'myApp',
      version     : 1.0,
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'key_value_pairs', // Should be alphanumeric, with underscores.
      description : 'A simple local database to keep everything local (for now)'
    };
    localForage.config(defaultConfig);
    let groupStoreConfig = Object.assign({}, defaultConfig);
    groupStoreConfig.name = 'Groups';
    let beverageStoreConcifg = Object.assign({}, defaultConfig);
    beverageStoreConcifg.name = 'Beverages';
    let groupStore = localForage.createInstance(groupStoreConfig);
    let beverageStore = localForage.createInstance(beverageStoreConcifg);
    this.dataStores['groups'] = groupStore;
    this.dataStores['beverages'] = beverageStore;
    this.populateLocalDB()
  }
  private populateLocalDB() {
    // Groups
    let groupStore = this.dataStores['groups'];
    type simpleItem = {'id': number, 'name': string}
    let groupsData:simpleItem[] = [{'id': 0, 'name': 'Hufflepuff'}, {'id': 1, 'name': 'Gryffindor'}, {'id': 2, 'name': 'Ravenclaw'}, {'id': 3, 'name': 'Slytherin'}];
    let beverageStore = this.dataStores['beverages'];
    let beveragesData:simpleItem[] = [{'id': 0, 'name': 'Beer'}, {'id': 1, 'name': 'Wine'}, {'id': 2, 'name': 'Shots'}, {'id': 3, 'name': 'Other'}];
    let populationsMap: object = {
      'groups': {
        'items': groupsData,
        'store': groupStore
      },
      'beverage': {
        'items': beveragesData,
        'store': beverageStore
      }
    };
    for (let dbKey in populationsMap) {
      console.log(dbKey);
      let populationMap = populationsMap[dbKey];
      let requiredKeys = populationMap.items.map(function(item) {
        return item.id.toString()
      });
      // Check if they already exist
      let currentKeys = [];
      Observable.fromPromise(populationMap.store.keys())
        .catch((err) => {
          console.log(`Caught Error ${err}`);
          return err
        })
        .take(1)  // Only get once and unsubscribe
        .subscribe(
          (fetchedKeys) => {
            console.log(`Retrieved ${fetchedKeys}`);
            currentKeys.push.apply(currentKeys, fetchedKeys);
            console.log('checking on data');
            let leftOverIDs = requiredKeys.filter((item) => {
              return !currentKeys.includes(item)
            });
            if (leftOverIDs.length === 0) {
              return
            }
            for (let leftoverID of leftOverIDs) {
              let itemData = populationMap.items.find((item) => item.id === parseInt(leftoverID));
              Observable.fromPromise(populationMap.store.setItem(itemData.id.toString(), itemData))
                .catch((err) => {
                  console.log(`Caught Error ${err}`);
                  return err
                })
                .take(1)  // Only get once and unsubscribe
                .subscribe(
                  (savedValue) => {
                    console.log(`Saved ${savedValue}`)
                  }
                );
            }
          }
        );
    }
  }

}
