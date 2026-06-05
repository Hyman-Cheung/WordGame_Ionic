import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q6Page } from './q6.page';

const routes: Routes = [
  {
    path: '',
    component: Q6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q6PageRoutingModule {}
