import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { DialogService, OntimizePreferencesService, OPreference, Util } from 'ontimize-web-ngx';


@Component({
  selector: 'load-preferences-dialog',
  templateUrl: './load-preferences-dialog.component.html'
})

export class LoadPreferencesDialogComponent implements OnInit {
  @ViewChild(MatSelectionList, { static: true })
  protected configurationList: MatSelectionList;

  public configurationListData: OPreference[] = [];
  public selectedConfiguration: OPreference;
  constructor(
    private dialogService: DialogService,
    private preferencesService: OntimizePreferencesService,
    public dialogo: MatDialogRef<LoadPreferencesDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.preferencesService.configureService(this.preferencesService.getDefaultServiceConfiguration('preferences'));
    this.getConfigurations();
  }
  ngOnInit(): void {
    this.configurationList.selectedOptions = new SelectionModel<MatListOption>(false);
  }

  loadConfiguration(): void {
    this.dialogo.close(this.selectedConfiguration);
  }

  remove(): void {
    this.dialogService.confirm('CONFIRM', 'TABLE.DIALOG.CONFIRM_REMOVE_CONFIGURATION').then(result => {
      if (result) {
        this.preferencesService.deletePreferences(this.selectedConfiguration.PREFERENCEID).subscribe(res => {
          if (res && res.code === 0) {
            this.getConfigurations();
          }
        });
      }
    });
  }
  onClickConfigurationList(option) {
    this.selectedConfiguration = option;
  }

  getConfigurations() {
    this.preferencesService.getPreferences(this.data.entity, this.data.service).subscribe(resp => {
      if (resp.isSuccessful()) {
        this.setDataArray(resp.data);
      }
    });
  }

  setDataArray(data: any) {
    if (Util.isArray(data)) {
      this.configurationListData = data;
    } else {
      this.configurationListData = []
    }
  }
}
