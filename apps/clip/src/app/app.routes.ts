import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditorComponent } from './workflow/editor/editor.component';

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
    path: 'flow',
    component: EditorComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
