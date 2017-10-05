import { Component } from '@angular/core';

import { Globals } from '../globals';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private appTitle = Globals.APP_NAME;
  today: number = Date.now();
}
