import { Component } from '@angular/core';

const HTML_DATA = `
<o-chart #stackedAreaChart type="stackedAreaChart" x-label="Time" y-label="Amount (€)" entity="EMovementsGrouped"
  x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time"></o-chart>
`;

const TYPESCRIPT_DATA = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html'
})
export class StackedAreaComponent{

  constructor() { }

}
`;

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
})
export class StackedAreaComponent {

  constructor() { }
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };

  getFiles() {
    return {
      'html': {
        'data': HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': TYPESCRIPT_DATA
      }
    }
  }
}

