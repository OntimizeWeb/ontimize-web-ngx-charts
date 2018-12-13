import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletComponent } from './bullet.component';

const routes: Routes = [
  {
    path: '',
    component: BulletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulletRoutingModule { }
