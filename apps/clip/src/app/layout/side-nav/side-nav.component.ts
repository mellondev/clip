import { Component, computed, inject } from '@angular/core';
import { ApplicationRoute, DEFAULT_APP_ROUTES } from '../../application-routes';
import { FeatureRoute, FeatureService } from '@clip/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clip-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  private featureService = inject(FeatureService);
  private router = inject(Router);

  features = this.featureService.features;
  sideNavItems = computed<ApplicationRoute[]>(() => [
    ...DEFAULT_APP_ROUTES,
    ...this.features()
      .filter((f) => f.route != undefined)
      .map((feature) => this.featureRouteToApplicationRoute(feature.route!)),
  ]);

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
    if (navigate) {
      this.router.navigateByUrl(featureName);
    }
  }
}
