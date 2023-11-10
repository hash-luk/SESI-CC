import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFormsPage } from './list-forms.page';

const routes: Routes = [
  {
    path: '',
    component: ListFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFormsPageRoutingModule {}
