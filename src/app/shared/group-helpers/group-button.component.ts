import { Component, Input } from '@angular/core';

import { Group } from '../models';

@Component({
  selector: 'group-button',
  templateUrl: './group-button.component.html'
})
export class GroupButtonComponent {
  @Input() group: Group;

}
