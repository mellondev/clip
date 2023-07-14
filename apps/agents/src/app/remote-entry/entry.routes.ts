import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AgentListComponent } from '../agent-list/agent-list.component';

export const remoteRoutes: Route[] = [
  { path: '', component: AgentListComponent },
  { path: 'edit', component: RemoteEntryComponent },
];
