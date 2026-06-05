import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q7Page } from './q7.page';

const routes: Routes = [
  {
    path: '',
    component: Q7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q7PageRoutingModule {}
