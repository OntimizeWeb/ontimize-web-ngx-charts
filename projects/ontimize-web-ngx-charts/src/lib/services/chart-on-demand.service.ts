import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogService, IChartOnDemandService } from 'ontimize-web-ngx';

import { OChartOnDemandComponent } from '../components/chart-on-demand/o-chart-on-demand.component';

@Injectable()
export class OChartOnDemandService implements IChartOnDemandService {

  constructor(
    protected dialogService: DialogService,
    protected dialog: MatDialog
  ) { }

  openChartOnDemand(dataArray, service, entity) {
    this.dialog.open(OChartOnDemandComponent, {
      height: '800px',
      width: '800px',
      data: { arrayColumns: dataArray, service: service, entity: entity }
    });
  }

}