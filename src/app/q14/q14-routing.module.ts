import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q14Page } from './q14.page';

const routes: Routes = [
  {
    path: '',
    component: Q14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q14PageRoutingModule {}
