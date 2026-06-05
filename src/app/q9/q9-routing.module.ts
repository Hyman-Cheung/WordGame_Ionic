import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q9Page } from './q9.page';

const routes: Routes = [
  {
    path: '',
    component: Q9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q9PageRoutingModule {}
