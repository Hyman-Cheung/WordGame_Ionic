import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q5Page } from './q5.page';

const routes: Routes = [
  {
    path: '',
    component: Q5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q5PageRoutingModule {}
