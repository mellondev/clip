import { Component } from '@angular/core';
import {
  ApplicationRoute,
  DEFAULT_APPLICATION_ROUTES,
} from '../../application-routes';
import { FeatureRoute, FeatureService } from '@clip/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'clip-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  sideNavItems = DEFAULT_APPLICATION_ROUTES;

  constructor(private featureService: FeatureService, private router: Router) {
    console.log('SideNav constuctor');
    this.featureService.features$
      .pipe(takeUntilDestroyed(),
      tap((features) => console.log('Sidenav: features', features)))
      .subscribe((features) => {
        this.sideNavItems = [...DEFAULT_APPLICATION_ROUTES];
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
    if (navigate) {
      this.router.navigateByUrl(featureName);
    }
  }
}
