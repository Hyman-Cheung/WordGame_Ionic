import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q3Page } from './q3.page';

const routes: Routes = [
  {
    path: '',
    component: Q3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q3PageRoutingModule {}
