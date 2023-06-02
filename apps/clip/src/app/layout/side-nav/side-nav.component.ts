import { Component } from '@angular/core';
import { SideNavRoute, appNavRoutes } from '../../side-nav-routes';
import { FeatureService } from '@clip/shared/clip-core';
import { Router } from '@angular/router';

@Component({
  selector: 'clip-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavItems = appNavRoutes;

  features$ = this.featureService.features;

  constructor(private featureService: FeatureService, private router: Router) {    
  }

  expandNavItem(sideNavItem: SideNavRoute) {
    sideNavItem.isExpanded = !sideNavItem.isExpanded;
  }

  loadFeature(featureName: string) {
    this.featureService.loadFeature(featureName);
    this.router.navigateByUrl(featureName);
  }
}
