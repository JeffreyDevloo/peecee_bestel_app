import { Component, Input } from '@angular/core';

import { IGroup} from "../../js-data/interfaces/group.interface";

@Component({
  selector: 'group-button',
  templateUrl: './group-button.component.html'
})
export class GroupButtonComponent {
  @Input() group: IGroup;

}
