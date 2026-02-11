
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'mapa', 
    loadComponent: () => import('./pages/map.component').then(m => m.MapComponent) 
  },
  { 
    path: 'centro-comercial', 
    loadComponent: () => import('./pages/market.component').then(m => m.MarketComponent) 
  },
  { 
    path: 'agenda', 
    loadComponent: () => import('./pages/agenda.component').then(m => m.AgendaComponent) 
  },
  {
    path: 'ranking',
    loadComponent: () => import('./pages/ranking.component').then(m => m.RankingComponent)
  },
  { 
    path: 'youtube', 
    loadComponent: () => import('./pages/youtube.component').then(m => m.YoutubeComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
