import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

// import { OChartOnDemandService } from '../../../services/chart-on-demand.service';

@Component({
  selector: 'load-preferences-dialog',
  templateUrl: './load-preferences-dialog.component.html',
  styleUrls: ['./load-preferences-dialog.component.scss'],
  // providers: [OChartOnDemandService]
})
export class LoadPreferencesDialogComponent {
  emptyList: boolean = false;
  constructor(
    // private chartOnDemandService: OChartOnDemandService,
    public dialogo: MatDialogRef<LoadPreferencesDialogComponent>
  ) { }

  getPreferencesList() {
    console.log("getPreferences List")
    // this.chartOnDemandService.configureService(this.chartOnDemandService.getDefaultServiceConfiguration('bankmanager-jee'));
    // this.chartOnDemandService.configureAdapter();
    // this.chartOnDemandService.getPreferences().subscribe(res => {
    //   console.log("Preferences")
    //   console.log(res);
    //   return res.data
    // });
    this.emptyList = true;
    return false;
  }

  loadPreferences() {
    console.log("Load preferences");
  }
}