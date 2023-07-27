import { Component } from '@angular/core';
import { AGENT_DATA } from './agents.model';

@Component({
  selector: 'clip-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent {
  displayedColumns: string[] = [
    'name',
    "team",
    'accepted',
    'rejected',
    'avgHandling',
    "state",
  ];
  dataSource = AGENT_DATA;
}
