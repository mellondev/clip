import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { FeatureMetricWidgetComponent } from '../feature-metric-widget/feature-metric-widget.component';
import { FeatureNewsWidgetComponent } from '../feature-news-widget/feature-news-widget.component';
import { FeatureDetailComponent } from '../feature-detail/feature-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureCatalogComponent } from '../feature-catalog/feature-catalog.component';
import { FeaturedItemComponent } from '../featured-item/featured-item.component';
import { FeatureItemComponent } from '../feature-item/feature-item.component';
import { FeatureBrowseListComponent } from '../feature-browse-list/feature-browse-list.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    FeatureMetricWidgetComponent,
    FeatureNewsWidgetComponent,
    FeatureDetailComponent,
    FeatureCatalogComponent,
    FeaturedItemComponent,
    FeatureItemComponent,
    FeatureBrowseListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,

    RouterModule.forChild(remoteRoutes),
  ],
  providers: [],
})
export class RemoteEntryModule {}
