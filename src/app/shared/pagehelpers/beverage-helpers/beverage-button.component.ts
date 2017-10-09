import { Component, Input} from '@angular/core';

import { IBeverage } from "app/shared/js-data/interfaces";
import { BeverageService} from "app/core/services/beverage.service";

@Component({
  selector: 'beverage-button',
  templateUrl: './beverage-button.component.html'
})
export class BeverageButtonComponent {
  constructor(
    private beverageService: BeverageService
  ) {}

  @Input() beverage: IBeverage;

  beverageButtonClicked(event:any) {
    console.log('Queuing beverage');
    this.beverageService.queueBeverage(this.beverage);
  }
}
