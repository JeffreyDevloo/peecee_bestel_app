import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Group,
  GroupsService,
  Comment,
  User,
  UserService
} from '../shared';

@Component({
  selector: 'article-page',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit {
  group: Group;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retrieve the pre-fetched group
    this.route.data.subscribe(
      (data: { group: Group }) => {
        this.group = data.group;
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = true;
      }
    );
  }

  deleteGroup() {
    this.isDeleting = true;

    this.groupService.destroy(this.group.id)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }
}
