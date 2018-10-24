import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.scss']
})
export class StackedAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getId() {
    return 'Stacked Area Chart';
  }

  getFiles() {
    return [
      {
        'type': 'html',
        'data': HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': TYPESCRIPT_DATA
      }
    ]
  }
}

const HTML_DATA = `
<o-chart #stackedAreaChart type="stackedAreaChart" x-label="Time" y-label="Amount (€)" flex="75" entity="EMovementsGrouped"
  x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time"></o-chart>
`;

const TYPESCRIPT_DATA = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.scss']
})
export class StackedAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
`;