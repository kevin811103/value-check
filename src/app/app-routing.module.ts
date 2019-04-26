import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ValueCheckComponent } from './value-check/value-check.component'
const routes: Routes = [

  {path:'',component:ValueCheckComponent},
  {path:'valueCheck',component:ValueCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
