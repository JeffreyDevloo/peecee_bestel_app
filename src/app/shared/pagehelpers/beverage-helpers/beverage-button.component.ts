import { Component, Input} from '@angular/core';

import { BeverageService} from "../../services/beverage.service";
import { IBeverage } from "../../js-data/interfaces";

@Component({
  selector: 'beverage-button',
  templateUrl: './beverage-button.component.html'
})
export class BeverageButtonComponent {
  constructor(
    private beverageService: BeverageService
  ) {}

  @Input() beverage: IBeverage;

  beverageButtonClicked() {
    console.log('Queuing beverage')
    this.beverageService.queueBeverage(this.beverage);
  }
}
