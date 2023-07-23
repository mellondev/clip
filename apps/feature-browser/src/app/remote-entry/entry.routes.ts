import { Route } from '@angular/router';
import { FeatureCatalogComponent } from '../feature-catalog/feature-catalog.component';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';
import { FeatureChangelogComponent } from '../feature-detail/feature-changelog/feature-changelog.component';
import { FeatureOverviewComponent } from '../feature-detail/feature-overview/feature-overview.component';
import { FeatureComponentsComponent } from '../feature-detail/feature-components/feature-components.component';
import { FeatureVersionsComponent } from '../feature-detail/feature-versions/feature-versions.component';

export const remoteRoutes: Route[] = [
  { path: '', component: FeatureCatalogComponent },
  {
    path: ':featureName',
    component: FeatureDetailComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: FeatureOverviewComponent },
      { path: 'changelog', component: FeatureChangelogComponent },
      { path: 'versions', component: FeatureVersionsComponent },
      { path: 'components', component: FeatureComponentsComponent },
    ],
  },
];
