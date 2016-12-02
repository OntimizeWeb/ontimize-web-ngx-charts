import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import { OntimizeService, OTranslateService, OFormComponent } from 'ontimize-web-ng2/ontimize';
import { OChartComponent } from 'ontimize-web-ng2-charts/o-chart';

import { NavigationBarService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'discrete-bar',
  templateUrl: 'discrete-bar.component.html',
  styleUrls: ['discrete-bar.component.css']
})
export class DiscreteBarComponent implements OnInit {

  @ViewChild('oForm')
  protected oForm: OFormComponent;

  protected data: Array<Object>;

  protected serviceResponse: string;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('DISCRETE_BAR');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {

    if (this.oForm) {
      // Force oForm query.
      this.oForm._reloadAction();
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

  getBasicUsageId() {
    return 'Discrete Bar Chart (Basic usage)';
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

  getInsideFormId() {
    return 'Discrete Bar Chart (Inside a form)';
  }

  getInsideFormFiles() {
    return [
      {
        'type': 'html',
        'data': INSIDE_FORM_HTML_DATA
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
    return 'Discrete Bar Chart (Custom data)';
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
      },
      {
        'type': 'chart data',
        'data': this.data ? JSON.stringify(this.data, undefined, 2) : '{}'
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" layout-fill
  entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT"></o-chart>
`;

const INSIDE_FORM_HTML_DATA = `
<o-form layout="column" show-header="yes" header-mode="none" label-header="Account detail" header-actions="R"
  entity="EAccounts" keys="ACCOUNTID" #oForm flex="75">
  <o-row elevation="0" layout-align="space-between center">
    <o-integer-input attr="ACCOUNTID" enabled="no" layout-padding></o-integer-input>
    <o-row elevation="2" layout="row">
      <o-text-input attr="ENTITYID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="OFFICEID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="CDID" layout-padding class="account align-right"></o-text-input>
      <o-text-input attr="ANID" layout-padding class="align-right"></o-text-input>
    </o-row>
  </o-row>
  <o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" flex="75" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
    y-axis="MOVEMENT" query-on-init="no" parent-keys="ACCOUNTID"></o-chart>
</o-form>
`;

const CUSTOM_DATA_HTML_DATA = `
<o-chart type="discreteBar" x-label="Axis x" y-label="Axis Y" [data]="data" layout-fill></o-chart>
`;

const CUSTOM_DATA_TYPESCRIPT_DATA = `
import { Component, OnInit, Injector } from '@angular/core';

import { OntimizeService } from 'ontimize-web-ng2/ontimize';

@Component({
  moduleId: module.id,
  selector: 'discrete-bar',
  templateUrl: 'discrete-bar.component.html',
  styleUrls: ['discrete-bar.component.css']
})
export class DiscreteBarComponent implements OnInit {

  protected data: Array<Object>;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  constructor(protected injector: Injector) {
  }

  ngOnInit() {
    // nothing to do
  }

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