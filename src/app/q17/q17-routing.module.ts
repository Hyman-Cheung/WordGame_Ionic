import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q17Page } from './q17.page';

const routes: Routes = [
  {
    path: '',
    component: Q17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q17PageRoutingModule {}
