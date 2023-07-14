import { Route } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: UserListComponent },
  { path: 'new', component: RemoteEntryComponent}
];
