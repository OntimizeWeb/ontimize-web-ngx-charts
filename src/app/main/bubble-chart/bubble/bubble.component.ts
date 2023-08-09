import { Component, ViewChild } from '@angular/core';
import { OChartComponent } from 'ontimize-web-ngx-charts';

const HTML_DATA = `
<o-chart #bubbleChart type="bubbleChart" chart-height="400"></o-chart>
`;

const TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html'
})
export class BubbleComponent {

  @ViewChild('bubbleChart', {static: false})
  protected bubbleChart: OChartComponent;

  constructor() { }

  ngAfterViewInit() {
    let data = [{
      "index": 1.0,
      "size": 6.0,
      "name": "A",
      "children": [
        {
          "index": 1.0,
          "name": "A1",
          "value": 1.0,
          "size": 1.0
        },
        {
          "index": 1.0,
          "name": "A2",
          "value": 2.0,
          "size": 2.0
        },
        {
          "index": 1.0,
          "name": "A3",
          "value": 1.0,
          "size": 1.0
        },
        {
          "index": 1.0,
          "name": "A4",
          "value": 2.0,
          "size": 2.0
        }
      ]
    }, {
      "index": 4.0,
      "size": 4.0,
      "name": "B",
      "children": [
        {
          "index": 1.0,
          "name": "B1",
          "value": 10.0,
          "size": 10.0
        },
        {
          "index": 2.0,
          "name": "B2",
          "value": 15.0,
          "size": 15.0
        },
        {
          "index": 3.0,
          "name": "B3",
          "value": 11.0,
          "size": 11.0
        },
        {
          "index": 4.0,
          "name": "B4",
          "value": 10.0,
          "size": 10.0
        }
      ],
      },
    {
      "index": 2.0,
      "size": 3.0,
      "name": "C",
      "children": [
        {
          "index": 1.0,
          "name": "C1",
          "value": 11.0,
          "size": 11.0
        },
        {
          "index": 2.0,
          "name": "C2",
          "value": 10.0,
          "size": 10.0
        }
      ]
    }];

    this.bubbleChart.setDataArray(data);
  }
}
`;

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html'
})
export class BubbleComponent {

  @ViewChild('bubbleChart')
  protected bubbleChart: OChartComponent;

  constructor() { }

  ngAfterViewInit() {
    let data = [{
      'index': 1.0,
      'size': 6.0,
      'name': 'A',
      'children': [
        {
          'index': 1.0,
          'name': 'A1',
          'value': 1.0,
          'size': 1.0
        },
        {
          'index': 1.0,
          'name': 'A2',
          'size': 2.0,
          'children': [
            {
              'index': 1.0,
              'name': 'A21',
              'size': 2.0,
              'value': 2.0
            },
            {
              'index': 2.0,
              'name': 'A22',
              'size': 2.0,
              'value': 2.0
            }
          ]
        },
        {
          'index': 1.0,
          'name': 'A3',
          'value': 1.0,
          'size': 1.0
        },
        {
          'index': 1.0,
          'name': 'A4',
          'value': 2.0,
          'size': 2.0
        }
      ]
    }, {
      'index': 4.0,
      'size': 4.0,
      'name': 'B',
      'children': [
        {
          'index': 1.0,
          'name': 'B1',
          'value': 10.0,
          'size': 10.0
        },
        {
          'index': 2.0,
          'name': 'B2',
          'value': 15.0,
          'size': 15.0
        },
        {
          'index': 3.0,
          'name': 'B3',
          'value': 11.0,
          'size': 11.0
        },
        {
          'index': 4.0,
          'name': 'B4',
          'value': 10.0,
          'size': 10.0
        }
      ],
    },
    {
      'index': 2.0,
      'size': 3.0,
      'name': 'C',
      'children': [
        {
          'index': 1.0,
          'name': 'C1',
          'value': 11.0,
          'size': 11.0
        },
        {
          'index': 2.0,
          'name': 'C2',
          'value': 10.0,
          'size': 10.0
        }
      ]
    }];

    this.bubbleChart.setDataArray(data);
  }


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
