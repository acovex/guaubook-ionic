import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicApisComponent } from './public-apis.component';

const routes: Routes = [
  {
    path: '',
    component: PublicApisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicApisRoutingModule {}
