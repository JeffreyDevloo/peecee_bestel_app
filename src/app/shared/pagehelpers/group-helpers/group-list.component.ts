import { Component, Input } from '@angular/core';

import { QueryModel } from '../../models';
import { GroupService } from '../../services';
import { IGroup} from "../../js-data/interfaces/group.interface";

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent {
  constructor (
    private groupService: GroupService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: QueryModel) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: QueryModel;
  results: IGroup[];
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
      this.query.limit = this.limit;
      this.query.offset =  (this.limit * (this.currentPage - 1))
    }

    this.groupService.getAll(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data;

      // // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      // this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
    });
  }
}
