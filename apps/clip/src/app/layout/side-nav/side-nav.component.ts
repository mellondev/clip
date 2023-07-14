import { Component } from '@angular/core';
import { ApplicationRoute, appNavRoutes } from '../../side-nav-routes';
import { FeatureService } from '@clip/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clip-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavItems = appNavRoutes;

  features$ = this.featureService.features;

  constructor(private featureService: FeatureService, private router: Router) {}

  expandNavItem(sideNavItem: ApplicationRoute) {
    sideNavItem.isExpanded = !sideNavItem.isExpanded;
  }

  loadFeature(featureName: string, navigate = false) {
    // this.featureService.loadFeature(featureName);
    if (navigate) {
      this.router.navigateByUrl(featureName);
    }
  }
}
