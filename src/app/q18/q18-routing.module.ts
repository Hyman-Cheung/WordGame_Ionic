import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q18Page } from './q18.page';

const routes: Routes = [
  {
    path: '',
    component: Q18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q18PageRoutingModule {}
