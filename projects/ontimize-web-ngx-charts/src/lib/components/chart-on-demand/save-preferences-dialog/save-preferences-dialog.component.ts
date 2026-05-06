import { Component, Injector } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OntimizeWebModule, OTableBaseDialogClass } from 'ontimize-web-ngx';

@Component({
  standalone: true,
  selector: 'app-save-preferences-dialog',
  templateUrl: './save-preferences-dialog.component.html',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, OntimizeWebModule]
})

export class SavePreferencesDialogComponent extends OTableBaseDialogClass {
  public name: string;
  public description: string;

  public formGroup = new FormGroup({
    name: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true })
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
