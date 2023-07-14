import { Component } from '@angular/core';
import {
  ApplicationRoute,
  DEFAULT_APPLICATION_ROUTES,
} from '../../application-routes';
import { FeatureRoute, FeatureService } from '@clip/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'clip-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavItems = DEFAULT_APPLICATION_ROUTES;

  features$ = this.featureService.features;

  constructor(private featureService: FeatureService, private router: Router) {
    this.featureService.features
      .pipe(takeUntilDestroyed())
      .subscribe((features) => {
        this.sideNavItems.push(
          ...features.filter(f => f.route).map((feature) =>
            this.featureRouteToApplicationRoute(feature.route!)
          )
        );
      });
  }

  featureRouteToApplicationRoute(featureRoute: FeatureRoute): ApplicationRoute {
    return {
      id: featureRoute.id,
      text: featureRoute.text,
      route: featureRoute.route,
      icon: featureRoute.icon,
      subItems: featureRoute.subRoutes?.map((subRoute) =>
        this.featureRouteToApplicationRoute(subRoute)
      ),
    };
  }
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
