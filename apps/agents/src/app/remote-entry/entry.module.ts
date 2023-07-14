import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { NgChartsModule } from 'ng2-charts';
import { AgentStatusComponent } from '../dashboard/agent-status/agent-status.component';
import { AgentListComponent } from '../agent-list/agent-list.component';

@NgModule({
  declarations: [RemoteEntryComponent, AgentStatusComponent, AgentListComponent],
  imports: [
    CommonModule,

    MatTableModule,

    RouterModule.forChild(remoteRoutes),
    NgChartsModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
