import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCallPage } from './single-call.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCallPageRoutingModule {}
