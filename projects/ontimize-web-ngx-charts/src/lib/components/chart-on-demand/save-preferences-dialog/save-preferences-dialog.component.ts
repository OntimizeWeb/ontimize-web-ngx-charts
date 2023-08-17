import { Component, Injector } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { OTableBaseDialogClass } from 'ontimize-web-ngx';

@Component({
  selector: 'app-save-preferences-dialog',
  templateUrl: './save-preferences-dialog.component.html'
})

export class SavePreferencesDialogComponent extends OTableBaseDialogClass {
  public name: string;
  public description: string;

  public formGroup: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', [
      Validators.required
    ]),
    description: new UntypedFormControl('')
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
