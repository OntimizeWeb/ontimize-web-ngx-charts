import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];

const opt: ExtraOptions = {
    enableTracing: false
    // true if you want to print navigation routes
};

@NgModule({
  imports: [RouterModule.forRoot(routes, opt)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
