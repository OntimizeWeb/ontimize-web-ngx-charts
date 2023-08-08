import { Component, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OTableBaseDialogClass } from 'ontimize-web-ngx';

@Component({
  selector: 'app-save-preferences-dialog',
  templateUrl: './save-preferences-dialog.component.html'
})

export class SavePreferencesDialogComponent extends OTableBaseDialogClass {
  public name: string;
  public description: string;

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('')
  });

  constructor(
    public dialogo: MatDialogRef<SavePreferencesDialogComponent>,
    protected injector: Injector) {
    super(injector);
    this.setFormControl(this.formGroup.get('name'));
  }

  save(): void {
    this.dialogo.close({ "name": this.name, "description": this.description });
  }
}
