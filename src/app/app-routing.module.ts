import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[loginGuard]
  },
  {
    path: '',
    redirectTo: 'home',

    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate:[logoutGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule),
    
  },
  {
    path: 'seasons/:id',
    loadChildren: () => import('./seasons/seasons.module').then( m => m.SeasonsPageModule),
    canActivate:[logoutGuard]
  },
  {
    path: 'episodes/:id',
    loadChildren: () => import('./episodes/episodes.module').then( m => m.EpisodesPageModule),
    canActivate:[logoutGuard]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
