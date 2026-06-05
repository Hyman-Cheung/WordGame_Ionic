import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q2Page } from './q2.page';

const routes: Routes = [
  {
    path: '',
    component: Q2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q2PageRoutingModule {}
