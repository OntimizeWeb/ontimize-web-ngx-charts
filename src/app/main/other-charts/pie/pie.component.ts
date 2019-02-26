import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
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

  chartParameters: PieChartConfiguration;

  constructor(protected http: Http) {

    this.chartParameters = new PieChartConfiguration();
    this.chartParameters.cornerRadius = 20;
    this.chartParameters.legendPosition = 'bottom';
    this.chartParameters.labelType = 'value';

  }

  ngAfterViewInit() {
    this.loadJSONData().subscribe(data => {
      this.data = data;
    });
  }

  protected loadJSONData() {
    let headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).pipe(share());

    this.http
      .get(url, { headers: headers })
      .subscribe(res => {
        let data: any = res.json();
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
<o-chart type="pie" layout-fill entity="EMovementTypesTotal"
  x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart type="pie" layout-fill entity="EMovementTypesTotal"
x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { PieChartConfiguration } from 'ontimize-web-ngx-charts'

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html'
})

export class PieComponent{
  chartParameters: PieChartConfiguration;

  constructor() {
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
    let headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    let url = './assets/dummy-data/dummy-pie-data.json';

    var self = this;
    let innerObserver: any;
    let dataObservable = Observable.create(observer =>
      innerObserver = observer).pipe(share());

    this.http
      .get(url, { headers: headers })
      .subscribe(res => {
        let data: any = res.json();
        self.serviceResponse = JSON.stringify(data, undefined, 2);
        innerObserver.next(data.values);
      }, error => innerObserver.error(error));


    return dataObservable;
  }

}
`;
