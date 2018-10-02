import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent } from 'ontimize-web-ngx-charts';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts'

import { NavigationBarService } from '../../shared/services/navigation-bar.service';


@Component({

  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit{

  @ViewChild('pieChart')
  protected pieChart: OChartComponent;

  data: Array<Object>;
  protected serviceResponse: string;

  protected chartParameters: PieChartConfiguration;

  constructor(protected http: Http,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    this.chartParameters.legendPosition = "bottom";
    this.chartParameters.labelType = "value";
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

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).share();

    this.http
      .get(url, { headers: headers })
      // .map((res: any) => res.json())
      .subscribe(res => {
        let data: any = res.json();
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => innerObserver.error(error));


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

  getCustomConfigurationId() {
    return 'Pie Chart (Custom Configuration)';
  }

  getCustomConfigurationFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_CONFIGURATION_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': CUSTOM_CONFIGURATION_TYPESCRIPT_DATA
      }

    ];
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
        'data': this.serviceResponse
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="pie" layout-fill entity="EMovementTypesTotal"
  x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart type="pie" layout-fill entity="EMovementTypesTotal"
x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent } from 'ontimize-web-ngx-charts';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts'

import { NavigationBarService } from '../../shared/services/navigation-bar.service';


@Component({

  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent{
  protected chartParameters: PieChartConfiguration;

  constructor(protected http: Http,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    this.chartParameters.legendPosition = "bottom";
    this.chartParameters.labelType = "value";
  }
}
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

import { OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
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