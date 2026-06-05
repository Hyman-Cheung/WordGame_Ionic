import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q11Page } from './q11.page';

const routes: Routes = [
  {
    path: '',
    component: Q11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q11PageRoutingModule {}
