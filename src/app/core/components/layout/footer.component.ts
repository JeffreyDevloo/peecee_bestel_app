import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Globals } from 'app/shared/globals';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  appTitle = Globals.APP_NAME;
  today: number = Date.now();
}
