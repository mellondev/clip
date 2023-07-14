import { loadRemoteModule } from '@nx/angular/mf';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('telxl-users', './LoginModule').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

// const appRoutes: Route[] = [
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       {
//         path: 'dashboard',
//         component: DashboardComponent,
//       },
//       // {
//       //   path: 'users',
//       //   loadChildren: () =>
//       //     loadRemoteModule('users', './UsersModule').then((m) => m.RemoteEntryModule),
//       // },
//       // {
//       //   path: 'clip-feature-browser',
//       //   loadChildren: () =>
//       //     loadRemoteModule('clip-feature-browser', './Module').then((m) => m.RemoteEntryModule),
//       // },
//       // {
//       //   path: 'clip-agents',
//       //   loadChildren: () =>
//       //     loadRemoteModule('clip-agents', './Module').then((m) => m.RemoteEntryModule),
//       // },
//     ],
//   },
//   {
//     path: 'login',
//     loadChildren: () =>
//       loadRemoteModule('telxl-users', './LoginModule').then((m) => m.RemoteEntryModule),
//   },
//   {
//     path: '**',
//     redirectTo: 'not-found',
//   },
// ];
