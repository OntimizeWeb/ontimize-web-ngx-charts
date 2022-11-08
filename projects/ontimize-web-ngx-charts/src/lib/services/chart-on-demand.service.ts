import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogService, IChartOnDemandService } from 'ontimize-web-ngx';

import { OChartOnDemandComponent } from '../components/chart-on-demand/o-chart-on-demand.component';
import { Utils } from '../util/utils';

@Injectable()
export class OChartOnDemandService implements IChartOnDemandService {

  constructor(
    protected dialogService: DialogService,
    protected dialog: MatDialog
  ) { }

  openChartOnDemand(dataArray, service, entity) {
    let data = { arrayColumns: dataArray, service: service, entity: entity }
    Utils.openModalVisor(this.dialog, OChartOnDemandComponent, data);

  }

}