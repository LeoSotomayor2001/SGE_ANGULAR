import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'representante',
    loadChildren: () =>
      import('./modules/representante/representante.module').then(
        (m) => m.RepresentanteModule
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
