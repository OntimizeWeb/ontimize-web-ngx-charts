import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './+home';
import { LineComponent } from './+line';
import { PieComponent } from './+pie';
import { DiscreteBarComponent } from './+discrete-bar';
import { MultiBarComponent } from './+multi-bar';
import { MultiBarHorizontalComponent } from './+multi-bar-horizontal';

export const PrivateAppRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'line', component: LineComponent },
      { path: 'pie', component: PieComponent },
      { path: 'discrete-bar', component: DiscreteBarComponent },
      { path: 'multi-bar', component: MultiBarComponent },
      { path: 'multi-bar-horizontal', component: MultiBarHorizontalComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];




