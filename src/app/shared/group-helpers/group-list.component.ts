import { Component, Input } from '@angular/core';

import { Group, GroupListConfig } from '../models';
import { GroupsService } from '../services';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent {
  constructor (
    private groupService: GroupsService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: GroupListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: GroupListConfig;
  results: Group[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1))
    }

    // this.groupService.query(this.query)
    // .subscribe(data => {
    //   this.loading = false;
    //   this.results = data.articles;
    //
    //   // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
    //   this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    // });
  }
}
