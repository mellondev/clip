import { Route } from '@angular/router';
import { AgentsComponent } from '../management/agents/agents.component';

export const remoteRoutes: Route[] = [
  { path: '', component: AgentsComponent },
  { path: 'edit', component: AgentsComponent },
];
