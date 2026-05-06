import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { Injector } from '@angular/core';
import { APP_CONFIG, AppConfig, appConfigFactory, ONTIMIZE_PROVIDERS } from 'ontimize-web-ngx';

import { OChartComponent } from './o-chart.component';

describe('OChartComponent', () => {
  let component: OChartComponent;
  let fixture: ComponentFixture<OChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        OChartComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        provideRouter([]),
        {
          provide: APP_CONFIG,
          useValue: {
            uuid: 'com.ontimize.web.test',
            title: 'Ontimize Web Testing',
            locale: 'en'
          }
        },
        { provide: AppConfig, useFactory: appConfigFactory, deps: [Injector] },
        ...ONTIMIZE_PROVIDERS
      ]
    }).compileComponents();
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
