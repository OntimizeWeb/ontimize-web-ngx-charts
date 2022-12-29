import { Injector } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig, appConfigFactory, APP_CONFIG, OntimizeWebModule, ONTIMIZE_PROVIDERS, OPermissionsModule } from 'ontimize-web-ngx';

import { OChartModule } from '../../ontimize-web-ngx-charts.module';
import { OChartComponent } from './o-chart.component';

describe('ChartComponent', () => {
  let component: OChartComponent;
  let fixture: ComponentFixture<OChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OntimizeWebModule,
        OPermissionsModule,
        NoopAnimationsModule,
        OChartModule
      ],
      providers: [
        {
          provide: APP_CONFIG, useValue: {
            uuid: 'com.ontimize.web.test',
            title: 'Ontimize Web Testing',
            locale: 'en'
          }
        },
        { provide: AppConfig, useFactory: appConfigFactory, deps: [Injector] },
        ...ONTIMIZE_PROVIDERS
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});