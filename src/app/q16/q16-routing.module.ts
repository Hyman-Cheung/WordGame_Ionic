import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q16Page } from './q16.page';

const routes: Routes = [
  {
    path: '',
    component: Q16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q16PageRoutingModule {}
