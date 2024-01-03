import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBoxesPage } from './info-boxes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBoxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBoxesPageRoutingModule {}
