import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'competencias',
    loadChildren: () => import('./competencias/competencias.module').then( m => m.CompetenciasPageModule)
  },
  {
    path: 'list-forms',
    loadChildren: () => import('./list-forms/list-forms.module').then( m => m.ListFormsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'old-content',
    loadChildren: () => import('./old-content/old-content.module').then( m => m.OldContentPageModule)
  },
  {
    path: 'info-boxes',
    loadChildren: () => import('./info-boxes/info-boxes.module').then( m => m.InfoBoxesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
