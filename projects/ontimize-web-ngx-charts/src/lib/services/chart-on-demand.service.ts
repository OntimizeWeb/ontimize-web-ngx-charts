import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService, IChartOnDemandService } from 'ontimize-web-ngx';

import { OTableBase } from 'ontimize-web-ngx/lib/components/table/o-table-base.class';
import { OChartOnDemandComponent } from '../components/chart-on-demand/o-chart-on-demand.component';
import { Utils } from '../util/utils';

@Injectable()
export class OChartOnDemandService implements IChartOnDemandService {

  constructor(
    protected dialogService: DialogService,
    protected dialog: MatDialog
  ) { }

  openChartOnDemand(table:OTableBase) {
    Utils.openModalVisor(this.dialog, OChartOnDemandComponent, table);

  }

}