import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})
export class PieComponent {

  data: Array<Object>;
  protected serviceResponse: string;

  chartParameters1: PieChartConfiguration;
  chartParameters2: PieChartConfiguration;
  chartParameters3: PieChartConfiguration;
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
  constructor(protected http: HttpClient) {

    this.chartParameters1 = new PieChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new PieChartConfiguration();
    this.chartParameters2.cornerRadius = 20;
    this.chartParameters2.showLeyend = false;
    this.chartParameters2.legendPosition = 'bottom';
    this.chartParameters2.labelType = 'value';
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;

    this.chartParameters3 = new PieChartConfiguration();
    this.chartParameters3.legend.margin.top = 5;
    this.chartParameters3.legend.margin.bottom = 5;;
  }

  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    });
  }

  protected loadJSONData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).pipe(share());

    this.http
      .get(url, { headers: headers })
      .subscribe(res => {
        let data: any = res;
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => innerObserver.error(error));


    return dataObservable;
  }



  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HTML_DATA
      },
      'typescript': {
        'data': ''
      }
    }
  }


  getCustomConfigurationFiles() {
    return {
      'html': {
        'data': CUSTOM_CONFIGURATION_HTML_DATA
      },
      'typescript': {
        'data': CUSTOM_CONFIGURATION_TYPESCRIPT_DATA
      }
    }
  }

  getCustomDataFiles() {
    return {
      'html': {
        'data': CUSTOM_DATA_HTML_DATA
      },
      'typescript': {
        'data': CUSTOM_DATA_TYPESCRIPT_DATA
      }
      // },
      // {
      //   'type': 'service data',
      //   'data': this.serviceResponse
      // }
    }
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="pie" service="movements" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
y-axis="MOVEMENT" [color]="colorScheme"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
  <o-chart type="pie" service="movements" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"
  [color]="colorScheme" [chart-parameters]="chartParameters2"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts'

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})

export class PieComponent{

  data: Array<Object>;
  protected serviceResponse: string;

  chartParameters2: PieChartConfiguration;
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
  constructor(protected http: HttpClient) {

    this.chartParameters2 = new PieChartConfiguration();
    this.chartParameters2.cornerRadius = 20;
    this.chartParameters2.showLeyend = false;
    this.chartParameters2.legendPosition = 'bottom';
    this.chartParameters2.labelType = 'value';
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;

  }
}
`;


const CUSTOM_DATA_HTML_DATA = `
<o-chart #pieChart type="pie" [data]="data" layout-fill></o-chart>
`;

const CUSTOM_DATA_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})
export class PieComponent  {
  protected data: Array<Object>;

  constructor(protected http: Http) { }


  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    })
  }

 protected loadJSONData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).pipe(share());

    this.http
      .get(url, { headers: headers })
      .subscribe(res => {
        let data: any = res;
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => innerObserver.error(error));


    return dataObservable;
  }

}
`;
