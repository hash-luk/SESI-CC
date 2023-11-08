import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FormularioPage } from '../formulario/formulario.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'formularios',
    component: FormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
