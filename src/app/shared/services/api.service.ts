import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as localForage from "localforage";

import { JwtService } from './jwt.service';

@Injectable()
export class ApiService {
  private dataStores: {};
  constructor(
    private http: Http,
    private jwtService: JwtService
  ) {
    this.dataStores = {};
    if (environment.storage === 'local') {
      this.setupLocalDB()
    }
}

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
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

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    if (environment.storage === 'local' && path in this.dataStores) {
      // Rely on local storage for now
      let dataStore = this.dataStores[path];
      let key = 1;
      return Observable.fromPromise(dataStore.getItem(key))
        .catch(this.formatErrors)
        .map((res => res.result))
    }
    return this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
