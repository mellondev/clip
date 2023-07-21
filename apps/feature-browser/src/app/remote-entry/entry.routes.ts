import { Route } from '@angular/router';
import { FeatureCatalogComponent } from '../feature-catalog/feature-catalog.component';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';

export const remoteRoutes: Route[] = [
  { path: '', component: FeatureCatalogComponent },
  { path: ':featureName', component: FeatureDetailComponent}
];
