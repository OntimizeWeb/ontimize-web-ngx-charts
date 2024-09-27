import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-input-dialog',
  templateUrl: './data-input-dialog.component.html',
  styleUrls: ['./data-input-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataInputDialogComponent {
  data: string;

  constructor(
    public dialogRef: MatDialogRef<DataInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any
  ) {
    this.data = inputData.data || '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
