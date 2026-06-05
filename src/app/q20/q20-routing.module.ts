import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q20Page } from './q20.page';

const routes: Routes = [
  {
    path: '',
    component: Q20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q20PageRoutingModule {}
