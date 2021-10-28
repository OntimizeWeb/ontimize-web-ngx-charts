import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-preferences-as-dialog',
  templateUrl: './save-preferences-as-dialog.component.html',
  styleUrls: ['./save-preferences-as-dialog.component.scss']
})
export class SavePreferencesAsDialogComponent implements OnInit {
  name: String;
  constructor(
    public dialog: MatDialogRef<SavePreferencesAsDialogComponent>) { }

  ngOnInit() {
  }
  savePreferences(): void {
    if (this.name.length == 0) {
      console.log("Save Preferences")
    }
    else {
      this.dialog.close();
    }
  }
}