import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListaProjetos } from './components/listaProjetos/listaProjetos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos', component: ListaProjetos },
  {
    path: 'admin/:senha',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
];
