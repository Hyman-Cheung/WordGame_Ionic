import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q8Page } from './q8.page';

const routes: Routes = [
  {
    path: '',
    component: Q8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q8PageRoutingModule {}
