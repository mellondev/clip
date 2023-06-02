import { loadRemoteModule } from '@nx/angular/mf';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'telxl-users',
        loadChildren: () =>
          loadRemoteModule('telxl-users', './Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'clip-feature-browser',
        loadChildren: () =>
          loadRemoteModule('clip-feature-browser', './Module').then((m) => m.RemoteEntryModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('telxl-users', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
