import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Group } from '../models';

@Injectable()
export class GroupsService {
  constructor (
    private apiService: ApiService
  ) {}

  get(id): Observable<Group> {
    return this.apiService.get('/groups/' + id)
      .map(data => data.group);
  }

  destroy(slug) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(group): Observable<Group> {
    // If we're updating an existing article
    if (group.id) {
      return this.apiService.put('/articles/' + group.id, {group: group})
        .map(data => data.group);

      // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {group: group})
        .map(data => data.group);
    }
  }
}
