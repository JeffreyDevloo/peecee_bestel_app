import { Component, Input } from '@angular/core';

import { IGroup} from "app/shared/js-data/interfaces";

@Component({
  selector: 'group-button',
  templateUrl: './group-button.component.html'
})
export class GroupButtonComponent {
  @Input() group: IGroup;

}
