import { Component } from '@angular/core';

@Component({
  selector: 'clip-agents-entry',
  template: `<div>Hello from agent entry</div>
  <div style="display: block; position: relative; width: 400px; height: 400px"><clip-agent-status></clip-agent-status></div>
  `,
})
export class RemoteEntryComponent {}
