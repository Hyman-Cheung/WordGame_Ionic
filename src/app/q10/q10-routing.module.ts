import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q10Page } from './q10.page';

const routes: Routes = [
  {
    path: '',
    component: Q10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q10PageRoutingModule {}
