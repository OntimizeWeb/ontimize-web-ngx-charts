import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-preferences-as-dialog',
  templateUrl: './save-preferences-as-dialog.component.html',
  styleUrls: ['./save-preferences-as-dialog.component.scss']
})
export class SavePreferencesAsDialogComponent {
  name: string;
  constructor(
    public dialog: MatDialogRef<SavePreferencesAsDialogComponent>) { }


  savePreferences(): void {
    if (this.name.length == 0) {
      console.log("Save Preferences")
    }
    else {
      this.dialog.close();
    }
  }
}