import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q13Page } from './q13.page';

const routes: Routes = [
  {
    path: '',
    component: Q13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q13PageRoutingModule {}
