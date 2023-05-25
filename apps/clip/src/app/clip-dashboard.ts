import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'clip-dashboard',
  template: `
  <h3>You are authenticated so you can see this content.</h3>
  <div>
    SUPER FANCY CHART
  </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ClipDashboardComponent {}
