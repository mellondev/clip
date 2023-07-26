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
    'accepted',
    'rejected',
    'avgHandling'
  ];
  dataSource = AGENT_DATA;
}
