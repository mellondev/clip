import { loadRemoteModule } from '@nx/angular/mf';
import { ClipDashboardComponent } from './clip-dashboard';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('telxl-users', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dashboard',
    component: ClipDashboardComponent,
  },
];
