import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { LineModule } from './line/line.module';
import { PieModule } from './pie/pie.module';
import { DiscreteBarModule } from './discrete-bar/discrete-bar.module';
import { MultiBarModule } from './multi-bar/multi-bar.module';
import { MultiBarHorizontalModule } from './multi-bar-horizontal/multi-bar-horizontal.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadLineModule() {
  return LineModule;
}

export function loadPieModule() {
  return PieModule;
}

export function loadDiscreteBarModule() {
  return DiscreteBarModule;
}

export function loadMultiBarModule() {
  return MultiBarModule;
}

export function loadMultiBarHorizontalModule() {
  return MultiBarHorizontalModule;
}


export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'line',
        loadChildren: loadLineModule
      },
      {
        path: 'pie',
        loadChildren: loadPieModule
      },
      {
        path: 'discrete-bar',
        loadChildren: loadDiscreteBarModule
      },
      {
        path: 'multi-bar',
        loadChildren: loadMultiBarModule
      },
      {
        path: 'multi-bar-horizontal',
        loadChildren: loadMultiBarHorizontalModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
