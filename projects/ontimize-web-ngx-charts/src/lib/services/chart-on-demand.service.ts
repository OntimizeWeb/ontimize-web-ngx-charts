import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DialogService, IChartOnDemandService, OTableComponent } from 'ontimize-web-ngx';

import { OChartOnDemandComponent } from '../components/chart-on-demand/o-chart-on-demand.component';
import { Utils } from '../util/utils';

@Injectable()
export class OChartOnDemandService implements IChartOnDemandService {

  constructor(
    protected dialogService: DialogService,
    protected dialog: MatDialog
  ) { }

  openChartOnDemand(table:OTableComponent) {
    Utils.openModalVisor(this.dialog, OChartOnDemandComponent, table);

  }

}