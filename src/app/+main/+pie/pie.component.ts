import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

import { OTranslateService } from 'ontimize-web-ng2/ontimize';
import { OChartComponent } from 'ontimize-web-ng2-charts/o-chart';

import { NavigationBarService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'pie',
  templateUrl: 'pie.component.html',
  styleUrls: ['pie.component.css']
})
export class PieComponent implements OnInit {

  @ViewChild('pieChart')
  protected pieChart: OChartComponent;

  protected data: Array<Object>;
  protected serviceResponse: string;


  constructor(protected http: Http,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('PIE');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    })
  }

  protected loadJSONData() {
    let headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    let innerObserver: Observer<any[]>;
    let dataObservable = new Observable<any[]>(observer =>
      innerObserver = observer
    )

    var self = this;
    this.http.get(url, { headers: headers })
      .map(response => response.json()).subscribe(data => {
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => console.log('Could not load data.'));
    return dataObservable;
  }

  getBasicUsageId() {
    return 'Pie Chart (Basic usage)';
  }

  getBasicUsageFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': ''
      }
    ]
  }

  getCustomDataId() {
    return 'Pie Chart (Custom service)';
  }

  getCustomDataFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_DATA_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': CUSTOM_DATA_TYPESCRIPT_DATA
      },
      {
        'type': 'service data',
        'data':  this.serviceResponse
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="pie" layout-fill entity="EMovementTypesTotal"
  x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
`;

const CUSTOM_DATA_HTML_DATA = `
<o-chart #pieChart type="pie" [data]="data" layout-fill></o-chart>
`;

const CUSTOM_DATA_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

import { OChartComponent } from 'ontimize-web-ng2-charts/o-chart';

@Component({
  moduleId: module.id,
  selector: 'pie',
  templateUrl: 'pie.component.html',
  styleUrls: ['pie.component.css']
})
export class PieComponent implements OnInit {

  @ViewChild('pieChart')
  protected pieChart: OChartComponent;

  protected data: Array<Object>;

  constructor(protected http: Http) {
  }

  ngOnInit() {
    // Nothing to do
  }

  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    })
  }

  protected loadJSONData() {
    let headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    let innerObserver: Observer<any[]>;
    let dataObservable = new Observable<any[]>(observer =>
      innerObserver = observer
    )

    this.http.get(url, { headers: headers })
      .map(response => response.json()).subscribe(data => {
        innerObserver.next(data.values);
      }, error => console.log('Could not load data.'));
    return dataObservable;
  }

}
`;