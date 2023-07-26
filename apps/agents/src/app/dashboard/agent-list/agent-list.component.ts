import { Component } from '@angular/core';
import { AGENT_DATA } from '../../management/agents/agents.model';



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
