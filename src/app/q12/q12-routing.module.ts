import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q12Page } from './q12.page';

const routes: Routes = [
  {
    path: '',
    component: Q12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q12PageRoutingModule {}
