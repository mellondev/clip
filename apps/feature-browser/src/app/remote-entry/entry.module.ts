import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { FeatureMetricWidgetComponent } from '../feature-metric-widget/feature-metric-widget.component';
import { FeatureNewsWidgetComponent } from '../feature-news-widget/feature-news-widget.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, FeatureMetricWidgetComponent, FeatureNewsWidgetComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: []
})
export class RemoteEntryModule {}
