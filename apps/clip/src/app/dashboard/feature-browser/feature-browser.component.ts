import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Feature, FeatureService } from '@clip/shared/clip-core';
import { Observable } from 'rxjs';
import { DashboardFeatureWidget } from '../dashboard-feature-widget';

@Component({
  selector: 'clip-feature-browser',
  templateUrl: './feature-browser.component.html',
  styleUrls: ['./feature-browser.component.scss'],
})
export class FeatureBrowserComponent {
  private featureService = inject(FeatureService);
  features$: Observable<Feature[]>;

  @Output() widgetAdded = new EventEmitter<DashboardFeatureWidget>();

  constructor() {
    this.features$ = this.featureService.features;
  }

  addWidget(featureWidget: DashboardFeatureWidget) {
    this.widgetAdded.emit(featureWidget);
  }
}
