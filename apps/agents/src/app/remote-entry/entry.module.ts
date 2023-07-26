import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { remoteRoutes } from './entry.routes';
import { NgChartsModule } from 'ng2-charts';
import { AgentStatusComponent } from '../dashboard/agent-status/agent-status.component';
import { AgentListComponent } from '../dashboard/agent-list/agent-list.component';
import { AgentsComponent } from '../management/agents/agents.component';
import { LoggedInTrendComponent } from '../dashboard/logged-in-trend/logged-in-trend.component';
import { SlaTrendComponent } from '../dashboard/sla-trend/sla-trend.component';

@NgModule({
  declarations: [AgentStatusComponent, AgentListComponent, AgentsComponent, LoggedInTrendComponent, SlaTrendComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,

    RouterModule.forChild(remoteRoutes),
    NgChartsModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
