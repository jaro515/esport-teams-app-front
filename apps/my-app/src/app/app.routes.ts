import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () => import('@my-app/auth').then((c) => c.AuthComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('@my-app/registration').then((c) => c.RegistrationComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];
