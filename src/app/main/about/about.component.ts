import { Component } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public vCore: string = environment.versions.core;
  public vCharts: string = environment.versions.charts;
  public vTheming: string = environment.versions.theming;
}
