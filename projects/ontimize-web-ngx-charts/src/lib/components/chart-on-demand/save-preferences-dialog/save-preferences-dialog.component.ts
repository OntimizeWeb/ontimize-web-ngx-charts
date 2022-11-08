import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-save-preferences-dialog',
  templateUrl: './save-preferences-dialog.component.html',
  styleUrls: ['./save-preferences-dialog.component.scss']
})
export class SavePreferencesDialogComponent {
  name: string;
  constructor(
    public dialog: MatDialogRef<SavePreferencesDialogComponent>) { }

  savePreferences(): void {
    if (this.name.length == 0) {
      console.log("Save Preferences")
    }
    else {
      this.dialog.close();
    }
  }
}