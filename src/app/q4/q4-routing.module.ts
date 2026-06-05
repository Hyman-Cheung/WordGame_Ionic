import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q4Page } from './q4.page';

const routes: Routes = [
  {
    path: '',
    component: Q4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q4PageRoutingModule {}
