import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'app/shared';
import { GroupService, UserService } from 'app/core/services';

@Component({
  selector: 'myGroup',
  templateUrl: './group.component.html'
})
export class GroupComponent implements OnInit {
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // Retrieve the pre-fetched group
    // this.route.data.subscribe(
    //   (data: { group: Group }) => {
    //     this.group = data.group;
    //   }
    // );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = true;
      }
    );
  }
}
