import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputDialogComponent } from './data-input-dialog.component';

describe('DataInputDialogComponent', () => {
  let component: DataInputDialogComponent;
  let fixture: ComponentFixture<DataInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInputDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
