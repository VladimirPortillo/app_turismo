import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    /*canActivate:[loginGuard],
    canLoad:[]*/
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comunidades',
    loadChildren: () => import('./pages/comunidades/comunidades.module').then( m => m.ComunidadesPageModule)
  },  {
    path: 'restaurantes',
    loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'hoteles',
    loadChildren: () => import('./pages/hoteles/hoteles.module').then( m => m.HotelesPageModule)
  },
  {
    path: 'gastronomias',
    loadChildren: () => import('./pages/gastronomias/gastronomias.module').then( m => m.GastronomiasPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'atractivos',
    loadChildren: () => import('./pages/atractivos/atractivos.module').then( m => m.AtractivosPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
