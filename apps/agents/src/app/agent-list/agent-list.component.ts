import { Component } from '@angular/core';

export interface AgentModel {
  name: string;
  accepted: number;
  rejected: number;
  avgHandling: string;
}

const AGENT_DATA: AgentModel[] = [
  { name: 'Craig Mellon', accepted: 10, rejected: 0, avgHandling: '01:00' },
  { name: 'Matt Grove', accepted: 4, rejected: 0, avgHandling: '6:30' },
  { name: 'John Doe', accepted: 2, rejected: 0, avgHandling: '13:20' },
  { name: 'Billy Sharp', accepted: 12, rejected: 1, avgHandling: '0:46' },
  { name: 'Andy Nicolson', accepted: 24, rejected: 6, avgHandling: '2:23' },
];

@Component({
  selector: 'clip-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss'],
})
export class AgentListComponent {
  displayedColumns: string[] = [
    'name',
    'accepted',
    'rejected',
    'avgHandling'
  ];
  dataSource = AGENT_DATA;
}
