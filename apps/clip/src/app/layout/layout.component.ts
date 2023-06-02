import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild, inject } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'clip-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  @ViewChild('sidenav', { static: true })
  sidenav: MatSidenav | undefined;
  sideNavOpen = true;
  sideNavMode: MatDrawerMode = 'side';

  constructor() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.sideNavMode = result.matches ? 'over' : 'side';
      this.sideNavOpen = !result.matches;
    });
  }

  // loadFeature(feature: Feature) {
  //   if (feature) {
  //     this.remoteDefinitions[feature.name] = feature.remoteUrl;
  //     console.log(this.remoteDefinitions);
  //   }
  //   setRemoteDefinitions(this.remoteDefinitions);
  //   this.router.navigateByUrl('login');
  // }
}
