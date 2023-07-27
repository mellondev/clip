import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'clip-agent-status-badge',
  templateUrl: './agent-status-badge.component.html',
  styleUrls: ['./agent-status-badge.component.scss'],
})
export class AgentStatusBadgeComponent implements OnInit {
  @Input({ required: true }) stateName = '';
  colourMap = stateColourMap;
  stateColour = '#b2b2b2';

  ngOnInit(): void {
    this.stateColour = stateColourMap[this.stateName.toLowerCase()];
  }
}

const stateColourMap: Record<string, string> = {
  'available': '#8ac926',
  'break': '#55acee',
  'wrapup': '#747f8d',
  'in-call': '#FAA61A',
  'logged-out': '#b2b2b2',
};
