import { Component, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ChartService, OChartComponent } from 'ontimize-web-ngx-charts';


const BASIC_USAGE_HTML_DATA = `
<o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y"
entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
`;

const INSIDE_FORM_HTML_DATA = `
<o-form #oForm entity="EAccounts" keys="ACCOUNTID" show-header="yes" header-mode="none" label-header="Account detail" header-actions="R"
  fxLayout="column">
  <o-row elevation="0" layout-align="space-between center">
    <o-integer-input attr="ACCOUNTID" enabled="no" layout-padding></o-integer-input>
    <o-row elevation="2">
      <o-text-input attr="ENTITYID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="OFFICEID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="CDID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="ANID" layout-padding class="align-right"></o-text-input>
    </o-row>
  </o-row>
  <o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"
    query-on-init="no" query-on-bind="yes" parent-keys="ACCOUNTID"></o-chart>
</o-form>
`;

const CUSTOM_DATA_HTML_DATA = `
<o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" [data]="data" layout-fill></o-chart>
`;

const CUSTOM_DATA_TYPESCRIPT_DATA = `
import { Component, ViewChild, Injector } from '@angular/core';
import { OntimizeService, ChartService } from 'ontimize-web-ngx';
declare var d3: any;

@Component({
  selector: 'discrete-bar',
  templateUrl: './discrete-bar.component.html',
  styleUrls: ['./discrete-bar.component.scss']
})

export class DiscreteBarComponent {

  protected data: Array<Object>;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  @ViewChild('discreteBar', {static: false})
  protected discreteBar: OChartComponent;

  constructor() {}

  ngAfterViewInit() {
    // Configuring Ontimize service instance...
    let service: OntimizeService = this.injector.get(OntimizeService);
    /*
    * 'getDefaultServiceConfiguration' method provides session, endpoint,.. data from
    * application configuration object.
    */
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovementTypes';
    service.configureService(conf);

    // Performing ontimize query...
    let filter = {
      'ACCOUNTID': 7310
    };
    let columns = ['MOVEMENT', 'MOVEMENTTYPES'];
    service.query(filter, columns).subscribe((resp) => {
      // response ok
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      } else {
        alert('Impossible to query data!');
      }
    });

    let chartService: ChartService = this.discreteBar.getChartService();
    let chartOps = chartService.getChartOptions();
    // Configuring x axis...
    chartOps['yAxis']['tickFormat'] = function (d) {
      return d3.format(',f')(d) + '€';
    };

  }

  /**
   * Creates chart data grouping movements by category 'Movement type'
   *  */
  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.data = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ]
    }
  }

  processValues(data: Array<Object> ) : Array<Object> {
    let values = [];
    var self = this;
    data.forEach((item: any, index: number) => {
      let filtered = self.filterCategory(item[self.xAxis], values);
      if (filtered && filtered.length === 0) {
        let val = {
          'x': item[self.xAxis],
          'y': item[self.yAxis]
        };
        values.push(val);
      } else {
        filtered[0]['y'] += item[self.yAxis];
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => {
        if (val['x'] === category) {
          return true;
        }
      });
    }
    return filtered;
  }

}
`;


declare var d3: any;
@Component({
  selector: 'discrete-bar',
  templateUrl: './discrete-bar.component.html',
  styleUrls: ['./discrete-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiscreteBarComponent {

  @ViewChild('oForm', {static: false})
  protected oForm: OFormComponent;

  @ViewChild('discreteBar', {static: false})
  protected discreteBar: OChartComponent;

  data: Array<Object>;

  protected serviceResponse: string;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  constructor(protected injector: Injector) {}


  ngAfterViewInit() {

    if (this.oForm) {
      // Force oForm query.
      this.oForm.queryData({
        ACCOUNTID: 19939
      });
    }

    // Configuring Ontimize service instance...
    let service: OntimizeService = this.injector.get(OntimizeService);
    /*
    * 'getDefaultServiceConfiguration' method provides session, endpoint,.. data from
    * application configuration object.
    */
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovementTypes';
    service.configureService(conf);

    // Performing ontimize query...
    let filter = {
      'ACCOUNTID': 7310
    };
    let columns = ['MOVEMENT', 'MOVEMENTTYPES'];
    service.query(filter, columns).subscribe((resp) => {
      // response ok
      if (resp.code === 0) {
        this.serviceResponse = JSON.stringify(resp, undefined, 2);
        this.adaptResult(resp.data);
      } else {
        alert('Impossible to query data!');
      }
    });

    let chartService: ChartService = this.discreteBar.getChartService();
    let chartOps = chartService.getChartOptions();
    // Configuring x axis...
    chartOps['yAxis']['tickFormat'] = function (d) {
      return d3.format(',f')(d) + '€';
    };

  }

  /**
   * Creates chart data grouping movements by category 'Movement type'
   *  */
  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      // chart data
      this.data = [
        {
          'key': 'Discrete serie',
          'values': values
        }
      ]
    }

  }

  processValues(data: Array<Object>): Array<Object> {
    let values = [];
    var self = this;
    data.forEach((item: any, index: number) => {
      let filtered = self.filterCategory(item[self.xAxis], values);
      if (filtered && filtered.length === 0) {
        let val = {
          'x': item[self.xAxis],
          'y': item[self.yAxis]
        };
        values.push(val);
      } else {
        filtered[0]['y'] += item[self.yAxis];
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => {
        if (val['x'] === category) {
          return true;
        }
      });
    }
    return filtered;
  }

  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': ''
      }
    }
  }


  getInsideFormFiles() {
    return {
      'html': {
        'data': INSIDE_FORM_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': ''
      }
    }
  }


  getCustomDataFiles() {
    return {
      'html': {
        'data': CUSTOM_DATA_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': CUSTOM_DATA_TYPESCRIPT_DATA
      },
      // 'files': [
      //   {
      //     'label': 'service data',
      //     'data': this.serviceResponse
      //   },
      //   {
      //     'label': 'chart data',
      //     'data': this.data ? JSON.stringify(this.data, undefined, 2) : '{}'
      //   }
      // ]

    }
  }
}

