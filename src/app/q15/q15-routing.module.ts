import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q15Page } from './q15.page';

const routes: Routes = [
  {
    path: '',
    component: Q15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q15PageRoutingModule {}
