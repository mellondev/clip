import { Component, EventEmitter, Output, computed, inject } from '@angular/core';
import { Feature, FeatureService } from '@clip/core';
import { DashboardFeatureWidget } from '../dashboard-feature-widget';

@Component({
  selector: 'clip-feature-browser',
  templateUrl: './feature-browser.component.html',
  styleUrls: ['./feature-browser.component.scss'],
})
export class FeatureBrowserComponent {
  private featureService = inject(FeatureService);
  features = computed<Feature[]>(() => this.featureService.features().filter((f) => f.dashboardWidgets?.length > 0));

  @Output() widgetAdded = new EventEmitter<DashboardFeatureWidget>();

  addWidget(featureWidget: DashboardFeatureWidget) {
    this.widgetAdded.emit(featureWidget);
  }
}
